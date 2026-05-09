import type { Page } from "../models/Page";

export const getAllPages = async (): Promise<Page[]> => {
    const response = await fetch(
        'http://payload:3000/api/pages?depth=10&draft=false&trash=false'
    )
    const data = await response.json()
    return data.docs.map((raw: any) => {
        return {
            title: raw.title,
            url: raw.url,
            content: raw.content.map(mapRawContentBlock)
        }
    })
}

export const getPageByURL = async (url: string): Promise<Page | undefined> => {
    const fetchUrl =
        'http://payload:3000/api/pages?depth=0&draft=false&trash=false' +
        '&where[url][equals]=' +
        encodeURIComponent(`/${url}`)
    const response = await fetch(fetchUrl)
    const data = await response.json()

    if (data.docs.length === 0) return undefined
    console.log(data.docs[0])
    return {
        title: data.docs[0].title,
        url: data.docs[0].url,
        content: data.docs[0].content.map(mapRawContentBlock),
    }
}

const mapRawContentBlock = (raw: any) => {
    let block: any = {}
    switch (raw.blockType) {
        case 'grid':
            block.columns = raw.columns.map(mapRawContentBlock)
            break;
        case 'imageColumn':
            block.images = raw.images.map(mapMedia)
            break;
    }
}

const mapMedia = (raw: any): string => {
    return `/assets/media/${raw.media.filename}`
}
