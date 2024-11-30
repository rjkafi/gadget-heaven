import { FaRegHeart } from "react-icons/fa";
import { useLocation} from "react-router-dom";
import { useCart } from "../../Contexts/context";

const Details = () => {
    const location=useLocation();
    const { gadget } = location.state || {};
    const {product_title,price,description,Specification,product_image}=gadget;
    console.log(gadget)
    // use contex Api 
  const {addToCart,addToWishList}=useCart();

const handleToAddCart= () => {
  addToCart(gadget)
}
const handleAddToWishlist = () => {
  addToWishList(gadget);
};
    return (
        
        <>
          <div className='relative'>
                {/* Banner */}
            <div>
                <div className="hero bg-common pb-16  text-white">
                    <div className="hero-content text-center container mx-auto">
                        <div className="flex flex-col px-3">
                            <h1 className="text-5xl font-bold">Product Details</h1>
                            <p className="py-6 ">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner card */}
            <div className='absolute rounded-md bg-white left-1/2 transform -translate-x-1/2  md:top-[150px] z-[100]'>
              <div className='md:max-w-2xl border rounded-md  p-3' >
                <div className="md:flex gap-3">
                    {/* img */}
                    <div className="w-[390px] rounded-md p-3  flex justify-center items-center ">
                    <figure >
                        <img className="w-full h-full" src={product_image} alt="" />
                    </figure>
                    </div>
                    
                    {/* description */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold">{product_title}</h2>
                        <p className="text-lg font-semibold text-gray-600">Price:{price}</p>
                        <button className="px-3 bg-green-100 text-green-700 border border-green-400 rounded-full">InStock</button>
                        <p className="text-gray-500">{description}</p>
                         <div>
                            <h4 className="text-xl font-bold">Specification:</h4>
                            <div className="text-gray-600">
                                <ul className="ml-3 space-y-2">
                                   {
                                    Specification.map( (spec,idx) => <p key={idx}>{spec}</p>)
                                   }
                                </ul>
                            </div>
                            <h5 className="text-xl font-bold">Rating</h5>
                            <div>
                            <div className="rating text-lg">
                              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                       type="radio"
                     name="rating-2"
                     className="mask mask-star-2 bg-orange-400"
                      />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div> 
                            <div>
                            <button onClick={handleToAddCart} className="btn bg-common rounded-full text-white text-lg font-semibold">Add to card</button>
                            <button onClick={handleAddToWishlist} className="btn btn-ghost btn-circle bg-white ml-3">
                            < FaRegHeart className="text-xl"></FaRegHeart>
                            </button>
                            </div>
                            </div>
                         </div>
                    </div>
                
                </div>
              </div>
            </div>
            <div className="bg-gray-100 py-52"></div>
            </div>
        
        </>
    );
};

export default Details;