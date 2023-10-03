import Logo from '../../images/Logo.png'
import { useState } from 'react';
import { Link } from 'react-scroll';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import React from 'react';





const Header = ( {user}) => {
    
    const [place, setPlace] = useState(user === '1' ? 'home' : 'login');
    const location = useLocation();
    const isLoginPage = location.pathname==='/login'
    return ( 
        
        <header>
            
            <nav className=" bg-white opacity-90 w-full h-20 p-0 fixed top-0    left-0 z-20 font-navtext text-xl">
                <NavLink to='/'>
                <img src={Logo} alt="Logo error" className=' w-16  absolute top-2 left-2'/> </NavLink>
                
                                   
                <ul className=' flex flex-row justify-evenly items-center h-full w-1/2 absolute right-0 top-0 '>
                    
                    <li className=' w-auto'><Link to='footer' smooth={true} duration={1000}  className=' cursor-pointer'>footer</Link></li>

                    <li className=' w-auto'><Link to='top' smooth={true} duration={1000}  className=' cursor-pointer'>backtohome</Link></li>

                    <li className=' w-auto'>{!isLoginPage &&
                    <NavLink to="/login">
                    <button className=' rounded-md border-2 border-cyan-800 p-2 px-4 hover:bg-cyan-800 hover:text-white' 
                    >{place}
                    </button>
                    </NavLink>
}
                    </li>
                </ul>

                <Outlet />
                
            </nav>
        </header>
     );
}


export default Header;
