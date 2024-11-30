import { Outlet, useLoaderData } from "react-router-dom";
import CategoryBtns from "../CategoryBtns/CategoryBtns";

const GadgetContainer = () => {
const categories=useLoaderData();
    
    return (
        <div className="min-h-svh  mt-80 max-w-6xl mx-auto p-3">
            <h3 className="text-3xl font-bold text-center ">Explore Cutting-Edge Gadgets</h3>
            <div className="md:flex md:my-9 my-4 gap-3 ">
                <CategoryBtns categories={categories}></CategoryBtns>
                <Outlet></Outlet>
               
                
                
               
            </div>
        </div>
    );
};

export default GadgetContainer;




