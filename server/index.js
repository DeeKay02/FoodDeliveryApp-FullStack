// Importing .env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// Configs
import googleAuthConfig from "./config/google.config";

// Microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";

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

// Application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);

zomato.get("/" , (req, res) => res.json({message: "Setup success"}));

zomato.listen(4000, () => 
    ConnectDB()
        .then(() => console.log("Server is running"))
        .catch((e) => console.log(e))
);