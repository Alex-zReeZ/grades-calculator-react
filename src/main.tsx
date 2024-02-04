import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Mathematique from "./Component/subject/Math.tsx";
import Anglais from "./Component/subject/Anglais.tsx";
import Societe from "./Component/subject/Societe.tsx";
import ModuleEpsic from "./Component/subject/ModuleEpsic.tsx";
import Cie from "./Component/subject/Cie.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/Mathematique",
                element: <Mathematique />,
            },
            {
                path: "/societe",
                element: <Societe />,
            },
            {
                path:"/anglais",
                element:
                    <div>
                        <Anglais />
                    </div>

            },
            {
                path:"/moduleEpsic",
                element: <div>
                    <ModuleEpsic/>
                </div>
            },
            {
                path:"/Cie",
                element: <div>
                    <Cie />
                </div>
            },
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)