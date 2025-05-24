import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "../pages/layout/AppLayout"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import NotFound from "../pages/NotFound"
import ErrorElement from "../pages/ErrorElement"

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
                    path: 'projects',
                    element: <Projects />
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
