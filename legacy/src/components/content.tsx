import type { PropsWithChildren } from "react";
import classes from './content.module.css'

export default function Content (props: PropsWithChildren){
    return(
        <main className={classes.content}>
            {props.children}
        </main>
    )
}