import classes from "./image-overlay.module.css"

interface ImageOverlayProps {
    src: string | null
    visible: boolean
    update: (visible: boolean, src: string | null) => void
}

export default function ImageOverlay (props:ImageOverlayProps){
    const cssClasses = [classes.overlay]
    if (props.visible) cssClasses.push(classes.visible)

    const exitOverlay = () => {
        props.update(false, props.src)
    }

    return(
        <div className = {cssClasses.join(" ")}>
            <div className = {classes.button_wrapper}>
                <ExitButton onClick={exitOverlay}/>
            </div>
            <div className={classes.wrapper}>
                {props.src !== null ?
                    <img src={props.src}/> 
                : null
                }
            </div>
        </div>
    )
}

interface ExitButtonProps {
    onClick: () => void
}

function ExitButton (props: ExitButtonProps) {
    return <svg onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z"/>
    </svg>
}