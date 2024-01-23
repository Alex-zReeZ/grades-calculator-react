import './App.css'
import DashBoard from "./Component/DashBoard.tsx";
import PageHeader from "./Component/PageHeader.tsx";
import {Outlet} from "react-router";

function App() {
    return (
        <>
            <PageHeader/>
            <main className="-mt-24 pb-8">
                <div className="container mx-auto sm:px-6 lg:px-8">
                    <h1 className="sr-only">Averages</h1>
                    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                            <Outlet />

                        </div>

                        <DashBoard />
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
