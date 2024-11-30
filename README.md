# Gadgets Heaven

## 📄 Project Overview

This project is a React-based e-commerce website for a Gadgets Store. It features various gadgets like computers, phones, smartwatches, and accessories, allowing users to browse, add to cart, and manage their wishlist seamlessly.

- **🔗 Live Website Link**: [https://gadget-heaven-react-project.netlify.app/](#)

## 🚀 Features

- **Home Page**:
  - Attractive banner with a navigation button to the Dashboard.
  - Sidebar for selecting gadget categories (e.g., computers, phones).
  - Product cards displaying product image, name, price, and details button.

- **Details Page**:
  - Full information about the product, including specifications.
  - Two buttons:
    - 🛒 **Add to Cart**
    - ❤️ **Add to Wishlist**
  - Disable the wishlist button after adding the item.

- **Dashboard**:
  - Contains two tabs:
    - **Cart**
    - **Wishlist**
  - Displays cart items with the total price calculation.
  - Sort by price button (Costly items first).

- **Purchase Modal**:
  - A congratulatory modal appears on purchase.
  - Clears the cart without page reload.
  - Redirects to the home page on close.

- **Persistent Data**:
  - Uses Context API for global state management.

## 📚 React Fundamental Concepts Used

- **React Functional Components**
- **React Router**:
  - For navigation between pages (Home, Dashboard, Details, etc.)
- **React Context API**:
  - For managing global state of Cart and Wishlist
- **React Hooks**:
  - `useState`, `useContext`, `useEffect`, `useNavigate`, `useLocation`
- **React Toastify**:
  - For showing notifications when adding items to cart or wishlist

## 🗃️ Data Handling and Management

- **Context API**:
  - Manages the state of Cart and Wishlist across components.

## ✨ Key Features of the Website

1. **Dynamic Navbar**:
   - Indicates active routes for better user experience.
2. **Product Categories Sidebar**:
   - Allows filtering products based on gadget categories.
3. **Wishlist and Cart Functionality**:
   - Adds products to wishlist/cart with toast notifications.
4. **Sort by Price**:
   - Sorts cart items in descending order based on price.
5. **Purchase Confirmation**:
   - Shows a congratulatory modal after purchase.
   - Clears cart and redirects to the homepage on modal close.
