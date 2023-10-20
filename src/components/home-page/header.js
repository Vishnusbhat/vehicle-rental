import Logo from '../../images/Logo.png'

import { Link, Outlet } from 'react-router-dom';
import React from 'react';





const Header = () => {
    
    
    
    
    return ( 
        
        <header>
            
            <nav className=" bg-white opacity-100 w-full h-20 p-0 fixed top-0    left-0 z-20 font-navtext text-xl shadow-2xl">
                <Link to='/'>
                <img src={Logo} alt="Logo error" className=' w-16  absolute top-2 left-2'/> </Link>
                
                                   
                <ul className=' flex flex-row justify-evenly items-center h-full w-1/2 absolute right-0 top-0 '>             
                        <button className=' w-32 h-12  rounded-lg m-0  p-0 '> Suggest
                        </button>
                    <li>
                        <button className=' w-32 h-12  rounded-lg m-0  p-0 border-location-color border-2 hover:bg-location-color'> location
                        </button>
                    </li>                  

                    <li className=' w-auto'>
                    <Link to="/auth">
                    <button className=' rounded-md  p-2 px-4 border-location-color border-2 hover:bg-location-color ' 
                    >login
                    </button>
                    </Link>
                    
                    </li>

                    
                </ul>
                <Outlet />                
            </nav>
        </header>
     );
}


export default Header;











// <li className=' w-auto'><Link to='top' smooth={true} duration={1000}  className=' cursor-pointer'>backtohome</Link></li>