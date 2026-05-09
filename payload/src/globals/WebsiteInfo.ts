import { GlobalConfig } from "payload";

export const WebsiteInfo: GlobalConfig = {
    slug: 'website-info',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'socials',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'url',
                    label: 'URL',
                    admin: {
                        placeholder: 'https://example.com/username'
                    },
                    type: 'text',
                    required: true,
                },
                {
                    name: 'icon',
                    type: 'relationship',
                    relationTo: 'icons',
                    hasMany: false,
                    required: true,
                }
            ]
        }
    ]
}
