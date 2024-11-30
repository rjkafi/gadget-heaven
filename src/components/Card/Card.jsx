import { useNavigate } from "react-router-dom";


const Card = ({gadget}) => {
    const {product_title,price,product_image}=gadget || {}
    const navigate=useNavigate();
    const handleToShowDetails = () =>{
        navigate('/details',{state:{gadget}});
    }
    return (
        <div className="card bg-base-100 md:w-[290px] shadow-xl p-3 rounded-md">
  <div className=" flex justify-center items-center py-3 rounded-md">
  <figure >
    <img
       className="w-[190px] h-[190px] rounded-md"
      src={product_image}
      alt="" />
  </figure>
  </div>
  <div className="p-4 space-y-4">
    <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
    <p className="text-gray-500 font-medium text-xl">Price:{price}</p>
    <div className="card-actions justify-start">
    <button onClick={handleToShowDetails}
    className="btn rounded-full border-common text-common text-lg font-semibold">Details</button>
    </div>
  </div>
</div>
    );
};

export default Card;