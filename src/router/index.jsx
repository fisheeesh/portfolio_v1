import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy } from "react"

const Home = lazy(() => import('../pages/Home'))
const AppLayout = lazy(() => import('../pages/layout/AppLayout'))
const NotFound = lazy(() => import('../pages/NotFound'))
const ErrorElement = lazy(() => import('../pages/ErrorElement'))
const Gallery = lazy(() => import('../pages/Gallery'))

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
