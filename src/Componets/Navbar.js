
import { Link } from "react-router-dom";
import img from "../images/start.jpeg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="logo-container">
                    <Link to="/" className="link">
                        <img alt="logo" src={img} className="gather-logo" />
                    </Link>
                </div>

                <ul className="navbar-options-container">
                <a href="#who-we-are" className="link">
                        <li>Who We Are</li>
                    </a>
                    <a href="#projects" className="link">
                        <li>Projects</li>
                    </a>
                    <a href="#whatwedo" className="link">
                        <li>What we do</li>
                    </a>
                   
                    <a href="#whos-talking" className="link">
                        <li>Who's talking</li>
                    </a>
                    <a href="#contact" className="link">
                        <li>Contact Us</li>
                    </a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
