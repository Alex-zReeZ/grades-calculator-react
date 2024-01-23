import './App.css'
import {AllSemester} from "./Component/AllSemester.tsx";
import DashBoard from "./Component/DashBoard.tsx";
import PageHeader from "./Component/PageHeader.tsx";
/*import {createBrowserRouter} from "react-router-dom";
import NavBar from "./Component/NavBar.tsx";*/

function App() {
/*    const router = createBrowserRouter([
        {
            path:"/",
            element: <div>
                <NavBar/>
                <subject={"Mathématiques"}/>
            </div>
        },
    ])*/

    return (
        <>
            <PageHeader/>
            <main className="-mt-24 pb-8">
                <div className="container mx-auto sm:px-6 lg:px-8">
                    <h1 className="sr-only">Averages</h1>
                    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                            <AllSemester />
                        </div>

                        <DashBoard />
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
