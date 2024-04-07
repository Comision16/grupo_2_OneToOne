import { createBrowserRouter } from "react-router-dom";
import { App } from "./layouts/App";
import Home from "./page/Home";
import Products from "./page/Products";
import Clientes from "./page/Clientes";





export const router = createBrowserRouter([
    {
        path:"/",
        element : <App/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/clientes",
                element: <Clientes/>
            }
            
        ]
    }




])


