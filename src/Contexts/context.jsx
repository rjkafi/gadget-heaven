
import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
 
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]); 

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handlePurchase = () => {
    if (cartItems.length === 0) {
      toast("Your cart is empty. Add items to purchase.");
      return;
    }
    setIsModalOpen(true);
  };
  const closeModalAndNavigate = () => {
    setCartItems([]); 
    setIsModalOpen(false); 
    navigate("/"); 
  };
 
 
  const addToCart = (item) => {
   toast(' Item Added to Cart')
    setCartItems((prevItems) => [...prevItems, item]);
  };
  const handleRemoveCart = id =>{
   toast('This Item removed from Cart')
  cartItems.find(item => item.product_id === id)
   const updatedCarts =cartItems.filter(item =>item.product_id !== id) 
   setCartItems(updatedCarts);
   
}

  const addToWishList = (item) => {
   toast('This Item Added to Wishlist')
    setWishListItems((prevItems) => [...prevItems, item]);
  };

  const handleToRemoveWishList = (productId) => {
   toast('This Item removed from the  Wishlist')
    setWishListItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };
 
  return (
    <CartContext.Provider value={{ cartItems, addToCart,handleRemoveCart, wishListItems, addToWishList, handleToRemoveWishList

   ,handlePurchase,
        isModalOpen,
        closeModalAndNavigate,

     }}>
      {children}
    </CartContext.Provider>
  );
};
// custom hook
export const useCart = () => {
  return useContext(CartContext);
};
