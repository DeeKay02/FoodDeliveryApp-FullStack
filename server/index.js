// Importing .env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// Configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// Microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/Orders";
import Reviews from "./API/Reviews";
import User from "./API/User";
import Menu from "./API/Menu";

// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

//Application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

// Passport Configuration
googleAuthConfig(passport);
routeConfig(passport);

// Application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/menu", Menu);

zomato.get("/" , (req, res) => res.json({message: "Setup success"}));

zomato.listen(4000, () => 
    ConnectDB()
        .then(() => console.log("Server is running"))
        .catch((e) => console.log(e))
);