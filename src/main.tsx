import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AllSemester} from "./Component/AllSemester.tsx";


const router = createBrowserRouter([
    {
        path:"/",
        Component: App,
        children: [
            {
                path:"/",
                element: <div>
                    <AllSemester subject={"Mathematiques"}/>
                </div>
            },
            {
                path:"/societe",
                element: <AllSemester subject={"SocieteEtLangues"}/>
            }
            ,
            {
                path:"/anglais",
                element:
                    <div>
                        <AllSemester subject={"Anglais"}/>
                    </div>

            },
            {
                path:"/epsic",
                element: <div>
                    <AllSemester subject={"ModulesEPSIC"}/>
                </div>
            },
            {
                path:"/cie",
                element: <div>
                    <AllSemester subject={"ModulesCIE"}/>
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