import type { WebsiteInfo } from "../models/WebsiteInfo";

export const getWebsiteInfo = async (): Promise<WebsiteInfo> => {
    const infoResponse = await fetch(
        'http://payload:3000/api/globals/website-info?depth=2&draft=false&trash=false'
    )
    const infoData: any = await infoResponse.json()
    return {
        title: infoData.title,
        socials: infoData.socials.map((raw: any) => {
            return {
                name: raw.name,
                url: raw.url,
                icon: raw.icon.svg
            }
        })
    }
}
