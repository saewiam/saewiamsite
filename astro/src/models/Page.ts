export type Page = {
    title: string
    url: string
    content: ContentBlock[]
}

// TODO: separate file for content block types

export type ContentBlock = GridBlock | ImageColumn

export type GridBlock = {
    columns: ImageColumn[]
}

export type ImageColumn = {
    // TODO: type for images/media
    images: string[]
}
