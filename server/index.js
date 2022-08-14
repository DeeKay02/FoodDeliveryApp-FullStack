import express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = express();

//Application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }))
zomato.use(cors());
zomato.use(helmet());

zomato.get("/" , (req, res) => res.json({message: "Setup success"}));

zomato.listen(4000, () => console.log("Server running"));