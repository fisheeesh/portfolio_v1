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
                    element: <Home />,
                    errorElement: <ErrorElement />,
                },
                {
                    path: 'gallery',
                    element: <Gallery />,
                    errorElement: <ErrorElement />,
                }
            ]
        },
        {
            path: '*',
            element: <NotFound />,
            errorElement: <ErrorElement />,
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}
