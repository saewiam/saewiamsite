import type { NavigationLink } from "../models/NavigationLink";

export const getNavigationLinks = async (): Promise<NavigationLink[]> => {
    // get navigation link data
    const navResponse = await fetch(
        'http://payload:3000/api/globals/navigation?depth=0&draft=false&trash=false'
    )
    const navData: any = await navResponse.json()
    return navData.links.map((link: any) => {
        return {
            title: link.title,
            url: link.url,
            sublinks: link.sublinks.map((sublink: any) => {
                return {
                    title: sublink.title,
                    url: sublink.url,
                }
            }),
        }
    })
}
