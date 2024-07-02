
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Roots = () => {
    return (
        <div>
           <div className="container mx-auto">
           <NavBar></NavBar>
           </div>

            <Outlet></Outlet>

        </div>
    );
};

export default Roots;