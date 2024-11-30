import { TiDeleteOutline } from "react-icons/ti";
import { useCart } from "../../Contexts/context";

const WishlistContainer = () => {
    const {wishListItems,handleToRemoveWishList}=useCart();
    return (
        <>
        <section className="bg-gray-200 py-12 min-h-svh">
            <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-slate-800">WishList</h3>
            <div className="space-y-4 mt-4">
            {
            wishListItems.map((item, index) => (
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
                    <div><button onClick={()=>handleToRemoveWishList(item.product_id)} className="text-5xl text-red-500 ">
                        <TiDeleteOutline></TiDeleteOutline></button></div>
                </div>
              </div>
            ))}
          </div>

            </div>

        </section>
        </>
    );
};

export default WishlistContainer;