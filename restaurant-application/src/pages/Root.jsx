import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../styles/Home.css';
import Footer from "../components/Footer";

const Root = () => {
    return (
        <>
            <Navbar />
            <main className="App">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Root;