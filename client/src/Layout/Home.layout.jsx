import React from "react";

// Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
  return (
    <>
        <Navbar />
        <FoodTab />
        <div className="container mr-20  ml-120 px-4 lg:px-20 ">{props.children}</div>
    </>
  );
};

export default HomeLayout;