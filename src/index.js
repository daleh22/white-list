import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Homepage from "./components/Homepage";
import Error from "./components/Errorpage";
import Profile from "./components/Profile";
import Register from "./components/Register"
import Posts from "./components/Posts";
import App from "./components/App"
import Login from "./components/Login"
import Create from "./components/Create";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [ 
            {
                index: true,
                element: <Homepage/>
            },
             {
            path: "Profile",
            element: <Profile/>
        },
        
    {
        path: "Register",
        element: <Register/>
    },
    {
        path: "Posts",
        element: <Posts/>
    },
    {
        path: "Login",
        element: <Login/>
    },
    {
        path: "Create",
        element: <Create/>
    }
]
    }


]);













ReactDOM.render(<RouterProvider router = {router}/>, document.getElementById("app"))