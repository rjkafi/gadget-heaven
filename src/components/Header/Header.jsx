import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const Header = () => {
   const links = <>
   <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/statistics'>Statistics</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    
   </>

    return (
   <div className="bg-base-100 sticky top-0 z-[1000] bg-transparent backdrop-blur-xl">
     <div className="navbar  max-w-6xl mx-auto ">
   <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
       
      </ul>
    </div>
    <a className=" text-xl font-semibold ">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle bg-white">
      <IoCartOutline className="text-xl"></IoCartOutline>
    </button>
    <button className="btn btn-ghost btn-circle bg-white ml-2">
      <div className="indicator">
        < FaRegHeart className="text-xl"></FaRegHeart>
      </div>
    </button>
  </div>
</div>
   </div>
    );
};

export default Header;