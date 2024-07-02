import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";
import useDonationData from "../../Hooks/useDonationData";

const Home = () => {
    const [value,setValue]=useState("")
    const {data,loading}=useDonationData()
    const [filteredData,setFilteredData]=useState([])
    useEffect(()=>{
        setFilteredData(data)
    },[data])
    const handleSearch=()=>{
        console.log(value)
        if(value.trim!==""){
            const filterData=data.filter(item=>item.category.toLowerCase().includes(value.toLowerCase()))
            setFilteredData(filterData)
        }
        else{
            setFilteredData(data)
        }
    }
    return (
        <div>
            <Banner setValue={setValue} handleSearch={handleSearch}></Banner>
            <CategoryList filteredData={filteredData} loading={loading}></CategoryList>
        </div>
    );
};

export default Home;