import { Link } from "react-router-dom";
export default function Home() {

    return (
        <>
            <header className="mt-[-3rem] bg-no-repeat bg-cover text-white flex flex-col justify-center items-center">
                <h1 className="text-5xl">Welcome to Routers Reapair!</h1>
                <p>Click below to see what services we offer</p>
                <Link to="/services" className="bg-slate-600 rounded px-4 py-2 hover:bg-black">Services</Link>
            </header>
        </>
    );
}