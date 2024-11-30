
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { CartProvider } from "./Contexts/context";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <>
        <div className="bg-gray-50">
            <ToastContainer position="top-center"></ToastContainer>
        <CartProvider>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer> 
        </CartProvider>
        </div>      
        </>
    );
};

export default Root;