import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/01'></Navigate>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element: <CategoryNews></CategoryNews>
            }
        ]
    },
    {
        path: '/news',
        element: <h2>news</h2>
    },
    {
        path: '/auth',
        element: <h2>auth</h2>
    },
    {
        path: '*',
        element: <h2>error</h2>
    }
])

export default router