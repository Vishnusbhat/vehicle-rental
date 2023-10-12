import { useState , useEffect} from "react";
import React from "react";

const DateTime = () => {
    const [initdate, setInitDate] = useState();
    const [findate, setFinDate] = useState();
   
   
    
    return ( 
        <div className=" bg-white opacity-90 shadow-md border-cyan-700 border-2 border-opa rounded-lg w-1/4 h-[25vw] absolute top-[30vh] left-[2.6vw]">
            <div className="container flex flex-col shrink-0 w-full h-full items-center">
                <div className="name font-text text-[1.8vw] pt-[2vw] ">
                    <h1>
                        Search your next ride
                    </h1>
                </div>

                <div className="pickup text-[1.4vw] flex flex-col justify-center items-center pt-[2vw]">
                    <h1 className=" pb-[1vw]">
                        Pickup Date: { initdate } 
                    </h1>
                    <h1>  
                        <input type="date" name="initdate" id="initdate" onChange={e => setInitDate(e.target.value)} placeholder="Select" className=" p-[0.2vw] border-black border-2 rounded-md text-gray-400"/>
                    </h1>
                </div>

                <div className="dropoff text-[1.4vw] flex flex-col justify-center items-center pt-[2vw]">
                    <h1 className=" pb-[1vw]">
                        Dropoff Date: { findate } 
                    </h1>
                    <h1>  
                        <input type="date" name="finaldate" id="finaldate" onChange={e => setFinDate(e.target.value)} className=" p-[0.2vw] border-black border-2 rounded-md text-gray-400"/>
                    </h1>                    
                </div>                
            </div>
            
        </div>
     );
}
 
export default DateTime
