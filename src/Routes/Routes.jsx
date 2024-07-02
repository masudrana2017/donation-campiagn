import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Donation from "../Pages/Donation/Donation";
import Statitics from "../Pages/Statitics/Statitics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader:()=>fetch('data.json')
            },
            {
                path: "/statitics",
                element: <Statitics></Statitics>
            },
            {
                path:"/donation-details/:id",
                element:<DonationDetails></DonationDetails>,
                loader:()=>fetch('data.json')
                
            }
        ]
    },
]);
export default router