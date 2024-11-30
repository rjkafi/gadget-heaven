import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home";
import Statistics from "../components/Statistics/Statistics";
import Dashboard from "../components/Dashboard/Dashboard";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import GadgetCards from "../components/GadgetCards/GadgetCards";
import Details from "../components/Details/Details";
import SelectCartContainer from "../components/SelectCartContainer/SelectCartContainer";
import WishlistContainer from "../components/WishlistContainer/WishlistContainer";
import About from "../components/About/About";

const routes = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
           element:<Home></Home>,
           loader:()=> fetch('../categories.json'),
           children:[
            {
              path:'/',
              element:<GadgetCards></GadgetCards>,
              loader:()=> fetch('../gadgetsCards.json'),
            },
            {
              path:'/category/:category',
              element:<GadgetCards></GadgetCards>,
              loader:()=> fetch('../gadgetsCards.json'),
            }
           ]
        },{
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>,
          children:[
            {
              path:'/dashboard',
              element:<SelectCartContainer></SelectCartContainer>
            },
            {
              path:'/dashboard/cart',
              element:<SelectCartContainer></SelectCartContainer>
            },
            {
              path:'/dashboard/wishlist',
              element:<WishlistContainer></WishlistContainer>
            }
          ]
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/details',
          element:<Details></Details>
        }
      ]
    },
  ]);
  export default routes ;