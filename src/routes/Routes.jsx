import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path:"/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <h2>news layouts</h2>
    },
    {
        path: 'auth',
        element: <h2>login</h2>
    },
    {
        path: '*',
        element: <h2>error</h2>
    },
])

export default Routes;