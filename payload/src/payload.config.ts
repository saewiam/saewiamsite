import { mongooseAdapter } from '@payloadcms/db-mongodb'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Navigation } from './globals/Navigation'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { WebsiteInfo } from './globals/WebsiteInfo'
import { Icons } from './collections/Icons'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    routes: {
        admin: '/',
    },
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
        autoLogin: {
            username: 'admin',
            password: 'admin',
        },
        livePreview: {
            url: ({ data }) => {
                return `http://develop.localhost${data.url}`
            },
            collections: ['pages']
        }
    },
    collections: [Users, Media, Pages, Icons],
    globals: [Navigation, WebsiteInfo],
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URL || '',
    }),
    onInit: async (payload) => {
        const adminQuery = await payload.find({
            collection: 'users',
            where: {
                username: {
                    equals: 'admin'
                }
            }
        })
        if (adminQuery.totalDocs === 0) {
            console.log('making new user')
            await payload.create({
                collection: 'users',
                data: {
                    username: 'admin',
                    password: 'admin',
                },
            })
        }
    },
    endpoints: [
        {
            path: '/health',
            method: 'get',
            handler: async () => {
                return new Response('OK', { status: 200 })
            },
        },
    ],
    plugins: [
        nestedDocsPlugin({
            collections: ['pages'],
            generateLabel: (_, doc) => String(doc.title),
            generateURL: (docs) =>
                docs.reduce((url, doc) => `${url}/${String(doc.slug)}`, ''),
        }),
    ],
})
