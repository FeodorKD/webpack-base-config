import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App/App";
import { LazyAboutPage } from "@/App/pages/about/AboutPage.lazy";
import { LazyShopPage } from "@/App/pages/shop/ShopPage.lazy";
import { Suspense } from "react";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={<h2>Loading</h2>}><LazyAboutPage/></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={<h2>Loading</h2>}><LazyShopPage/></Suspense>
            }
        ]
    }
])