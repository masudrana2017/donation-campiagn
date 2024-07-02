import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,

    Typography,
  } from "@material-tailwind/react";
import { saveJobApplication } from "../../utilities/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DonationDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [singleData, setSingleData] = useState({})
    useEffect(() => {
        const singleData = data.find(item => item.id == id)
        setSingleData(singleData)
    }, [data, id])
    const handleSavaDonateData=()=>{
        console.log('clicked')
        saveJobApplication(id)
        toast("Added Successfully")
    }
    return (
        <Card className="mt-6 container mx-auto overflow-hidden">
            <CardHeader color="blue-gray" className="relative">
                <img
                    src={singleData.image} className="w-full"
                    alt="card-image"
                />
               <div className="absolute bg-black bg-opacity-40 bottom-0 w-full h-20">
               <button onClick={handleSavaDonateData} className="btn border-none items-center justify-center mt-2 ml-6" style={{backgroundColor:singleData.categoryBg}}>Donated ${singleData.price}</button>
               </div>
            </CardHeader>
            <CardBody className="mt-6">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                   {singleData.title}
                </Typography>
                <Typography>
                    {singleData.description}
                </Typography>
            </CardBody>
            <ToastContainer />
        </Card>
    );
};

export default DonationDetails;