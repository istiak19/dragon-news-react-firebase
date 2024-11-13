import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
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