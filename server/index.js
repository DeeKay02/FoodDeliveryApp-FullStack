// Importing .env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Microservice routes
import Auth from "./API/Auth";

// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

//Application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }))
zomato.use(cors());
zomato.use(helmet());

// Application routes
zomato.use("/auth", Auth);

zomato.get("/" , (req, res) => res.json({message: "Setup success"}));

zomato.listen(4000, () => 
    ConnectDB()
        .then(() => console.log("Server is running"))
        .catch((e) => console.log(e))
);