import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";

const Master = () => {
    const { type } = useParams();

    return <div className="my-5">
        {type === "delivery" && <Delivery />}
        {type === "dining" && <Dining />}
        {type === "night" && <NightLife />}
        {type === "nutri" && <Nutrition />}
    </div>;
};

export default Master;