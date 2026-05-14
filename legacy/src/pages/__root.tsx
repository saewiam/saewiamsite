import { createRootRoute, Outlet } from "@tanstack/react-router";
import Layout from "../components/layout";

function rootComponent(){
    return(
        <>
            <Layout>
                <Outlet/>
            </Layout>
        </>
    )
}

export const rootRoute = createRootRoute({component: rootComponent})