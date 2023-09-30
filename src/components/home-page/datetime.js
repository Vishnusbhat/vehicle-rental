import { useState , useEffect} from "react";
import React from "react";

const DateTime = () => {
    const [initdate, setInitDate] = useState();
    const [findate, setFinDate] = useState();
   
   
    
    return ( 
        <div className=" bg-white opacity-90 shadow-md border-cyan-700 border-2 border-opa rounded-lg w-1/4 h-[25vw] absolute top-32 left-10">
            <div className="container flex flex-col shrink-0 w-full h-full items-center">
                <div className="name font-text text-2xl pt-[10%] ">
                    <h1>
                        Search your next ride
                    </h1>
                </div>

                <div className="pickup text-xl flex flex-col justify-center items-center pt-[10%]">
                    <h1 className=" pb-[5%]">
                        Pickup Date: { initdate } 
                    </h1>
                    <h1 className="border-black border-2 rounded-md p-1 text-gray-400">  
                        <input type="date" name="initdate" id="initdate" onChange={e => setInitDate(e.target.value)} placeholder="Select" />
                    </h1>
                </div>

                <div className="dropoff text-xl flex flex-col justify-center items-center pt-[10%]">
                    <h1 className=" pb-[5%]">
                        Dropoff Date: { findate } 
                    </h1>
                    <h1>  
                        <input type="date" name="finaldate" id="finaldate" onChange={e => setFinDate(e.target.value)} className=" p-1 border-black border-2 rounded-md text-gray-400"/>
                    </h1>                    
                </div>                
            </div>
            
        </div>
     );
}
 
export default DateTime
