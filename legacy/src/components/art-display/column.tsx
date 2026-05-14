import type { ImageDataType } from "./image"
import Image from "./image"

interface ColumnProps {
    images: ImageDataType[],
    captionsVisible: boolean
    setOverlay?: (visible: boolean, src: string) => void,
    compressLongImages?: boolean,
}

export function Column (props:ColumnProps){
    return(
        <div>
            {
                props.images.map((image) =>
                    <Image 
                        key={image.fileName} 
                        src={image.fileName} 
                        setOverlay={props.setOverlay}
                        caption={props.captionsVisible ? image.caption : undefined}
                        compressLongImages={props.compressLongImages} />
                )
            }
        </div>
    )
}
