import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "../pages/layout/AppLayout"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import ErrorElement from "../pages/ErrorElement"
import Gallery from "../pages/Gallery"

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            errorElement: <ErrorElement />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'gallery',
                    element: <Gallery />
                }
            ]
        },
        {
            path: '*',
            element: <NotFound />
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}
