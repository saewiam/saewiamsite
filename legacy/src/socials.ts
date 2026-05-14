/* add entry to insert new social site
* change icons: https://tabler.io/icons
* copy react component name from tabler, put into "type"
* */

import * as icons from '@tabler/icons-react'

interface Social {
    type: keyof typeof icons,
    link: string
}

const socials: Social[] = [
    {
        "type": "IconBrandX",
        "link": "https://x.com/saewiam"
    },
    {
        "type": "IconBrandInstagram",
        "link": "https://www.instagram.com/saewiam/"
    },
    {
        "type": "IconBrandTumblr",
        "link": "https://saewiam.tumblr.com/"
    },
    {
        "type": "IconMail",
        "link": "mailto:saewiam@gmail.com"
    },
    {
        "type": "IconBrandEtsy",
        "link": "https://saewiam.etsy.com?coupon=BUY3GET1SAE"
    }
]

export default socials