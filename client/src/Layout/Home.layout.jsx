import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

// Redux action
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const HomeLayout = (props) => {
  const dispatch = useDispatch;
  useEffect(() => {
    
  }, []);

  return (
    <>
        <Navbar />
        <FoodTab />
        <div className="container mr-20  ml-120 px-4 lg:px-20 ">{props.children}</div>
    </>
  );
};

export default HomeLayout;