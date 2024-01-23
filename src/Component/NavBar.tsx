import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
            <div className="grid grid-cols-3 items-center gap-8">
                <div className="col-span-2">
                    <nav className="flex space-x-4">
                        <Link
                            to="/Mathematique"
                            className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                        >
                            Math</Link>
                        <Link
                            to="/Societe"
                            className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                        >
                            Société</Link
                        >
                        <Link
                            to="/Anglais"
                            className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                        >
                            Anglais</Link
                        >
                        <Link
                            to="/ModuleEpsic"
                            className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                        >
                            Modules EPSIC</Link
                        >
                        <Link
                            to="/Cie"
                            className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                        >
                            CIE</Link
                        >
                    </nav>
                </div>
            </div>
        </div>
    )
}

