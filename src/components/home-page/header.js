import Logo from "../../images/Logo.png";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  return (
    <>
      <header>
        <nav className=" bg-white opacity-100 w-full lg:h-20 md:h-14 sm:h-10 vsm:h-8 p-0 fixed top-0 left-0 z-20 font-navtext text-xl shadow-2xl flex items-center justify-start">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo error"
              className=" lg:w-16 md:w-14 vsm:w-6 ml-1"
            />{" "}
          </Link>
          {isLargeDevice || isMediumDevice || isExtraLargeDevice ? (
            <ul className="flex flex-row justify-evenly items-center h-full w-1/2 absolute right-0 top-0">
              <button className=" w-32 h-12  rounded-lg m-0  p-0 ">
                Suggest
              </button>
              <li>
                <button className=" w-32 h-12  rounded-lg m-0  p-0 border-location-color border-2 hover:bg-location-color">
                  location
                </button>
              </li>

              <li className=" w-auto">
                <Link to="/auth">
                  <button className=" rounded-md  p-2 px-4 border-location-color border-2 hover:bg-location-color ">
                    login
                  </button>
                </Link>
              </li>
            </ul>
          ) : (
            <div className=" flex w-full h-full items-center justify-end pr-5 hover:cursor-pointer">
              {menu ? (
                <div>
                  <div className=" w-[100%] h-[90vh] absolute top-0 right-[6.5px] bg-white"></div>
                  <ImCross onClick={showMenu} />
                </div>
              ) : (
                <div>
                  <FaBars onClick={showMenu} />
                </div>
              )}
            </div>
          )}
          <Outlet />
        </nav>
      </header>
    </>
  );
};

export default Header;

// <li className=' w-auto'><Link to='top' smooth={true} duration={1000}  className=' cursor-pointer'>backtohome</Link></li>
