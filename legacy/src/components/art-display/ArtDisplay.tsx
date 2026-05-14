import { Column } from "./column";
import type { ImageDataType } from "./image";

import classes from './ArtDisplay.module.css'
import { useState } from "react";
import ImageOverlay from "./image-overlay";

interface ArtDisplayProps {
    images: ImageDataType[],
    columns: number,
    captionsVisible: boolean,
    compressLongImages?: boolean,
}

export function ArtDisplay (props: ArtDisplayProps) {
    // now, create art columns
    const artColumns: Array<Array<ImageDataType>> = []
    for (let i = 0; i < props.columns; i++)
        artColumns.push([])
        // artColumns will look like [[], []] if there are 2 columns, for example

    for (let i = 0; i < props.images.length; i++) {
        artColumns[i % props.columns].push(props.images[i])
    }
        // e.g. if there are 3 columns and 5 images...
        //
        // 0 -> artColumns[0 % 3] == artColumns[0] // first column
        // 1 -> artColumns[1 % 3] == artColumns[1] // second column
        // 2 -> artColumns[2 % 3] == artColumns[2] // third column
        // 3 -> artColumns[3 % 3] == artColumns[0] // then repeat...
        // 4 -> artColumns[4 % 3] == artColumns[1]
        // 5 -> artColumns[5 % 3] == artColumns[2]
        //
        // 0 -> artColumns[0 % 4] == artColumns[0] // first column
        // 1 -> artColumns[1 % 4] == artColumns[1] // second column
        // 2 -> artColumns[2 % 4] == artColumns[2] // third column
        // 3 -> artColumns[3 % 4] == artColumns[3] // fourth column
        // 4 -> artColumns[4 % 4] == artColumns[0]
        // 5 -> artColumns[5 % 4] == artColumns[1]
        //
        // This evenly distributes the images among the columns.

    const [overlayVisible, setOverlayVisible] = useState(false)
    const [overlaySrc, setOverlaySrc] = useState<string | null>(null)

    const setOverlay = (visible: boolean, src: string | null) => {
        setOverlayVisible(visible)
        setOverlaySrc(src)
    }
    
    return (
        <>
        <div className={classes.art_display}>
            {
                artColumns.map((group) =>
                        <Column
                        key={group[0].fileName}
                        images={group}
                        setOverlay={setOverlay}
                        captionsVisible={props.captionsVisible}
                        compressLongImages={props.compressLongImages} />
                )
            }
        </div>
        <ImageOverlay 
            src={overlaySrc} 
            visible={overlayVisible}
            update={setOverlay}/>
        </>
    )
}
