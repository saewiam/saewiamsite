import { useState } from 'react';
import classes from './image.module.css'

interface ImageProps{
    src: string;
    caption?: string;
    setOverlay?: (visible: boolean, src: string) => void
    compressLongImages?: boolean
}

export interface ImageDataType {
    name: string,
    caption: string,
    date: string,
    fileName: string
}

export default function Image(props: ImageProps){
    const [longImage, setLongImage] = useState(false);
    const onClick = () => {
        if (props.setOverlay)
            props.setOverlay(true, props.src)
    }
    const onImgLoad = (event: Event) => {
        const img = event.target;
        if (img == null) return;
        // @ts-expect-error target is an img element, which has these properties
        if (img.offsetHeight !== null && img.offsetWidth !== null) {
        // @ts-expect-error target is an img element, which has these properties
            setLongImage(img.offsetHeight > img.offsetWidth);
        }
    }

    // Each image is styled with classes.image.
    // Also style it with long_image if the image is looooooong.
    let imageClasses = classes.image;
    if (longImage && props.compressLongImages) {
        imageClasses += " " + classes.long_image;
    }
    return (
        <div 
            className={imageClasses}
            onClick={onClick}>
            {/* @ts-expect-error onLoad is a valid load function! */}
            <img src={props.src} alt={props.caption} onLoad={onImgLoad}/>
            {
                props.caption ? <p>{props.caption}</p> : null
            }
        </div>
    );
}

<Image src={'something.png'} caption={'a string of text'}/>
