import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai"
import { BiLogoFacebookCircle } from "react-icons/bi"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LoginPage = ({user, setUser}) => {
     const [displayName, setDisplayName] = useState('Login');
    
    return (
        
        <div className="min-h-[100vh] w-[100%]">
            <div className="background bg-bg-login bg-cover bg-no-repeat h-[100vh]"> </div>

            <div className="capsule flex flex-col items-center justify-center absolute top-[25vh] left-1/2 -ml-[15vw]"> 
                <div className="background border-white border-2 rounded-lg w-[30vw] h-[60vh] bg-white opacity-40 shadow-2xl">
                    <div className="doodle bg-login-doodle h-full w-[30vw]  opacity-10 bg-contain bg-center ">                                    
                    </div>              
                </div>  
                <div className="all-container relative -top-[60vh] h-[60vh] w-[30vw] font-navtext flex flex-col  items-center">
                    <p className=" mt-7 text-5xl">{displayName}</p>
                    <input type="text" placeholder="Username" name="username" className=" w-[20vw] h-[5vh] mt-8 rounded-lg bg-transparent text-center border-2  border-cyan-800 placeholder-cyan-800 placeholder-opacity-50"/>

                    <input type="password" placeholder="Password" name="password" className=" w-[20vw] h-[5vh] mt-5 rounded-lg bg-transparent text-center border-2  border-cyan-800 placeholder-cyan-800 placeholder-opacity-50"/>

                    <button type="submit" className=" p-2 border-2 border-cyan-800 rounded-xl mt-5 text-opacity-80 hover:text-cyan-300 hover:bg-cyan-800" onClick={()=>{
                        
                        }}>{user}</button>
                        


                    {/* line */}
                    <div className="line w-[25vw] h-[0.5px] bg-cyan-800 mt-5"></div>

                    <div className="icons-list flex flex-row justify-evenly w-[80%] mt-5">
                        
                        <button>
                        <div className="google-icon "><AiFillGoogleCircle size={70}/></div>
                        </button>

                        <button>
                        <div className="facebook-icon">< BiLogoFacebookCircle size={70}/></div>
                        </button>

                        <button>
                        <div className="facebook-icon">< AiFillTwitterCircle size={70}/></div>                        
                        </button>
                        

                        

                    </div>
                </div>              
             </div> 

        </div>
    );
}
 

export default  LoginPage;
