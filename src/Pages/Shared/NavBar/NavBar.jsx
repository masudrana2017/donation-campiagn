import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/Logo.png"
const NavBar = () => {
    const nav=<>
    <NavLink to="/"><li><a>Home</a></li></NavLink>
    <NavLink to="/donation"><li><a>Donation</a></li></NavLink>
    <NavLink to="/statitics"><li><a>Statitics</a></li></NavLink>
    </>
    return (
        <div className="navbar">
            <div className="flex-1">
               <Link to="/"> <a>
                    {
                        <img src={logo} alt="" />
                    }
                </a></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        nav
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;