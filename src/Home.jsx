
import { useEffect } from "react";
import Banner from "./components/Banner/Banner";
import GadgetContainer from "./components/GadgetContainer.jsx/GadgetContainer";


const Home = () => {
   useEffect(()=>{
    document.title='Gadgets || Gadget_Heaven '
   },[])
    
    return (
        <div>
            <Banner></Banner>
            <GadgetContainer></GadgetContainer>
        </div>
    );
};

export default Home;