import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Service/Service";
import Login from "../../Pages/Login/Login";

const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/service/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://classic-photo-blush.vercel.app/service/${params.id}`)
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    }
    
]);

export default router;