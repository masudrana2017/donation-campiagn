import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationToLocalStorage } from "../../utilities/localstorage";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
    const data=useLoaderData()
    const [donation,setDonation]=useState([])
    const [showAll,setShowAll]=useState(false)
    useEffect(()=>{
        const storeDonation=getDonationToLocalStorage()
        const appliDonation=[]
        for(const id of storeDonation){
            const donationData=data.find(item=>item.id==id)
            if(donationData){
                appliDonation.push(donationData)
            }
        }
        setDonation(appliDonation)
    },[data])
    const handleShowAll=()=>{
        setShowAll(!showAll)
    }
    if(donation.length==0){
        return <p>Data Not Found....</p>
    }
    return (
        <div className="container mx-auto">
            <h2>Donation:{donation.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                donation.slice(0,showAll?donation.length:4).map(item=><DonationCard key={item.id} item={item}></DonationCard>)
            }
            </div>
            {donation.length>4?
            <div className="flex flex-col items-center mt-6">
                <button onClick={handleShowAll} className="btn bg-green-600">
                    {
                        showAll?'Less Show All':'Show All'
                    }
                </button>
            </div>:null}
        </div>
    );
};

export default Donation;