import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from "react";
const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <div className="navbar">

            <div className="leftSide" id={showLinks ? "open" : "close"}>
                <img src={logo}/>
                <div className="hiddenLinks">
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </div>
                
            </div>
            <div className="rightSide">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <button onClick={handleShowLinks}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;