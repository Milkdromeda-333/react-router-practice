import { Link, Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <div className="flex flex-col min-h-screen">
            <nav className="bg-gray-700 text-white flex justify-between h-16 pr-2">

                <div className="flex justify-center items-center">
                    <img src="https://img.icons8.com/ios-glyphs/60/000000/plumbing.png" alt="logo" className="w-10" />
                    <span>Reuter-Repair</span>
                </div>

                <div className="flex justify-evenly items-center gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                </div>

            </nav>

            <div className="my-[3rem]">
                <Outlet />
            </div>

            <footer className="w-full h-12 flex items-center justify-center bg-gray-700 text-white absolute bottom-0">
                React Router co &copy;
            </footer>
        </div>
    );
}