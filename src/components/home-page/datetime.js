import { useState , useEffect} from "react";
import React from "react";

const DateTime = () => {
    const [initdate, setInitDate] = useState();
    const [findate, setFinDate] = useState();
   
   
    
    return ( 
        <div className=" bg-white opacity-90 shadow-md border-cyan-700 border-2 rounded-lg xl:w-[400px] xl:h-[400px] absolute xl:top-[300px] xl:left-16 lg:w-[400px] lg:h-[400px] lg:top-[150px] lg:left-5 md:w-[300px] md:h-[350px] md:top-[100px] md:left-5 vsm:w-[60vw] vsm:h-[70vw] vsm:top-[90vw] vsm:left-[20vw] flex justify-center">
            <div className="container flex flex-col w-full h-full items-center">
                <div className="name font-text lg:text-[1.8rem] md:text-[1.5rem] pt-5 max-sm:pt-[1vw]">
                    <h1>
                        Search your next ride
                    </h1>
                </div>

                <div className="pickup text-[1.6rem] flex flex-col justify-center items-center pt-5 ">
                    <h1 className=" pb-5">
                        Pickup Date: { initdate } 
                    </h1>
                    <h1>  
                        <input type="date" name="initdate" id="initdate" onChange={e => setInitDate(e.target.value)} placeholder="Select" className=" p-1 border-black border-2 rounded-md text-gray-400"/>
                    </h1>
                </div>

                <div className="dropoff text-[1.6rem] flex flex-col justify-center items-center pt-5">
                    <h1 className=" pb-1">
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
