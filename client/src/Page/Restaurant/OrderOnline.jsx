import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// Components
import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";
import FoodList from "../../Components/Restaurant/Order-Online/FoodList";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
            <MenuListContainer />
            <MenuListContainer />
        </aside>
        <div className="w-full  px-3 md:w-3/4">
            <div className="pl-3 mb-4">
                <h2 className="text-xl font-semibold">Order Online</h2>
                <h4 className="flex items-center gap-2 font-light text-gray-500">
                <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                </h4>
            </div>
            <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                <FoodList
                    title="Recommended"
                    items={[
                        {
                        price: "1000",
                        rating: 3,
                        description: "Tender mutton marinated with Andhra spices and cooked with long grain basmati rice. Served with raita, brinjal curry and bread halwa.",
                        title: "Andhra Mutton Biryani Family Pack",
                        image:
                            "https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp",
                        },
                    ]}
                />
            </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;