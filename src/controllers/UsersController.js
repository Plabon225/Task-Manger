import UsersModel from "../models/UsersModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {JWT_KEY} from "../config/config.js";
import TaskModel from "../models/TaskModel.js";


export const registration = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await UsersModel.create(req.body);
        res.status(201).json({ status: "success", data: user });
    } catch (err) {
        res.status(400).json({ status: "fail", error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const [user] = await UsersModel.aggregate([
            { $match: { email } },
            { $project: { _id: 0, email: 1, firstName: 1, mobile: 1, password: 1 } }
        ]);

        if (!user) return res.status(401).json({ status: "unauthorized", message: "User not found" });

        if (!(await bcrypt.compare(password, user.password)))
            return res.status(401).json({ status: "unauthorized", message: "Wrong password" });

        delete user.password;

        // const token = jwt.sign(
        //     { exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, email: user.email },
        //     JWT_KEY
        // );
        const token = jwt.sign({ email: user.email }, JWT_KEY, { expiresIn: "24h" });

        return res.status(200).json({ status: "success", token, data: user });

    } catch (err) {
        return res.status(400).json({ status: "fail", error: err.message });
    }
};

export const profileUpdate = async (req, res) => {
    try {
        const result = await UsersModel.updateOne(
            { email: req.user },
            { $set: req.body }
        );
        console.log("EMAIL FROM TOKEN =", req.user);
        if (!result.matchedCount)


        return res.status(404).json({ status: "failed" });

        res.json({ status: "success", data: result });

    } catch (err) {
        res.status(400).json({ status: "fail" });
    }
};

















