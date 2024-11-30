import { useCart } from "../../Contexts/context";
import { TiDeleteOutline } from "react-icons/ti";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

const SelectCartContainer = () => {

    const {cartItems,
        handleRemoveCart,
      handlePurchase,
   isModalOpen,
   closeModalAndNavigate
}=useCart();
    
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    const [sortedItems, setSortedItems] = useState([...cartItems]);
    useEffect(() => {
        setSortedItems([...cartItems]);
      }, [cartItems]);
      const handleSort = () => {
        setSortedItems((prevItems) =>
          [...prevItems].sort((a, b) => b.price - a.price)
        );
      };
      console.log(handleSort);

    return (
        <>
        <section className="bg-gray-200 py-12 min-h-svh">
            <div className=' mx-auto container'>
            <div className="flex justify-between px-2">
                <h4  className="text-3xl font-bold text-slate-800">Cart
                </h4>
                <div className="toogle flex justify-center items-center gap-3">
                    <div className="text-2xl font-semibold">Price:${totalPrice}</div>
                    <button onClick={handleSort}  className="btn bg-common">Sort By price</button>
                    <button onClick={handlePurchase} className="btn">Purchase</button>

                </div>
            </div>
            {/* selected carts */}
            <div className="space-y-4 mt-4">
            {
            sortedItems.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-md shadow">
                <div className="md:flex items-center justify-between">
                    <div className="md:flex justify-start items-center">
                        {/* img */}
                        <div className="w-[190px] h-[190px] border rounded-md">
                            <img src={item.product_image} alt="" />
                        </div>
                        {/* txt */}
                        <div className="ml-4 space-y-3">
                        <h5 className="text-2xl font-semibold">{item.product_title}</h5>
                           <p className="text-gray-600">{item.description}</p>
                           <p className="text-xl font-semibold">Price: {item.price}</p>
                        </div>
                    </div>
                    {/* remove button */}
                    <div><button onClick={()=>handleRemoveCart(item.product_id)} className="text-5xl text-red-500 ">
                        <TiDeleteOutline></TiDeleteOutline></button></div>
                </div>
              </div>
            ))}
          </div>
             {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModalAndNavigate}
        message=" You have successfully purchased the items."
      />
          
        </div>
     </section>

         
        </>
    );
};

export default SelectCartContainer;