import { Typography } from "@material-tailwind/react";
const Banner = ({setValue,handleSearch}) => {

    return (
        <div className="hero min-h-screen relative">
            
            {/* <img src="/src/assets/image/banner.png" alt="" /> */}
            <div className="absolute bg-[url('/src/assets/image/banner.png')] inset-0 opacity-20 bg-cover bg-no-repeat">
            </div>
            
            <div className="flex flex-col hero-content  text-center text-black">
            <Typography variant="h1">I Grow By Helping People In Need</Typography>
                <div className="max-w-md text-black">
                   
                    <label className="input input-bordered flex items-center gap-2">
                        <input onChange={(e)=>setValue(e.target.value)} type="text" className="grow text-black" placeholder="Search" />
                        <button onClick={handleSearch} className="bg-red-500 p-2 rounded-lg">Search</button>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Banner;