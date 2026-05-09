import type { CollectionConfig } from 'payload'

export const Icons: CollectionConfig = {
    slug: 'icons',
    admin: {
        useAsTitle: 'name'
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'svg',
            label: 'SVG',
            type: 'code',
            admin: {
                language: 'html'
            },
            required: true,
        }
    ],
}
