import { useLoaderData, useParams} from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";




const GadgetCards = () => {
    const {category}=useParams();
    const data=useLoaderData();
    // console.log(data)
    // console.log(',,,,,,,,,,,,,,,,,,,,,,')
    // console.log( typeof category.category)
    const [gadgets,setGadgets]=useState([]);
    useEffect(() => {
      if(category){
        const filterByCategory=[...data].filter(gadget =>gadget.category === category)
      setGadgets(filterByCategory)
      }else{
        setGadgets(data)
      }

    },[data,category])
    
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          gadgets.map(gadget=> <Card key={gadget.product_id} gadget={gadget}></Card>)
        }
       
        </div>
    );
};

export default GadgetCards;