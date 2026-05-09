export type Page = {
    title: string
    url: string
    content: ContentBlock[]
}

// TODO: separate file for content block types

export type ContentBlock = Grid | ImageColumn

export class Grid {
    columns: ImageColumn[]
    constructor(columns: ImageColumn[]) {
        this.columns = columns
    }
}

export class ImageColumn {
    // TODO: type for images/media
    images: string[]
    constructor(images: string[]) {
        this.images = images
    }
}
