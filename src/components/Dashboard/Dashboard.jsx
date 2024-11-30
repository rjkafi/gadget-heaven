import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    useEffect(()=>{
        document.title='Dashboard || Gadget_Heaven '
       },[])
    
    return (
        <div>
                 {/* Banner */}
            <div>
                <div className="hero  bg-common pb-16  text-white">
                    <div className="hero-content text-center container mx-auto">
                        <div className="flex flex-col px-3 justify-center items-center">
                            <h1 className="text-5xl font-bold">Dashboard</h1>
                            <p className="py-6 ">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <div className="flex gap-2 justify-center items-center">
                            <NavLink to='/dashboard/cart' className={({ isActive }) =>
            `btn rounded-full w-full ${isActive ? 'bg-white  border-white' : 'bg-common'}`
          }>Cart</NavLink>
                        <NavLink to='/dashboard/wishlist' className={({ isActive }) =>
            `btn rounded-full w-full ${isActive ? '  bg-white' : 'bg-common'}`
          }>Wishlist</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* outlet boshabo */}
            <Outlet></Outlet>
            
        </div>
    );
};

export default Dashboard;