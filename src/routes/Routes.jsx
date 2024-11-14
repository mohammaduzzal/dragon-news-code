import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
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