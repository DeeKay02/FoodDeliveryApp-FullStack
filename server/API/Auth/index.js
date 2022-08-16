import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

// Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route     /signup
Des       Register new user
Params    none
Access    Public
Method    POST  
*/
Router.post("/signup", async (req, res) => {
    try {
        await UserModel.findByEmailAndPhone(req.body.credentials);
        
        // save to DB
        const newUser = await UserModel.create(req.body.credentials);

        // generate JWT auth token
        const token = newUser.generateJwtToken();

        return res.status(200).json({ token, status: "success" })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;