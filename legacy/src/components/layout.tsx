import type { PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";
import Content from "./content";
import classes from './layout.module.css'

export default function Layout (props: PropsWithChildren){
    return(
        <div className={classes.layout}>
            <Header/>
            <Content>
                {props.children}
            </Content>
            <Footer/>
        </div>
    )
}