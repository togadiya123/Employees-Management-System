import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../modal/index.js";
import responseHandler from "../../responseHandler.js";
import config from "../../config/index.js";

const register = async (req, res) => {
    try {
        let body = req.body;
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);
        await User.create(body);
        responseHandler(`register success`,res);
    } catch (e) {
        console.log(`Error : ${e}`);
        res.status(400).send(`Error : ${e}`);
    }
};

const logIn = async (req, res) => {
    try {
        let {emailId, password} = req.body;
        if (!(emailId && password)) responseHandler(`invalid email or password`,res);

        const user = await User.findOne({emailId: emailId});
        if(!user) responseHandler(`invalid email`,res);

        const response = await bcrypt.compare(password, user.password);
        if(!response) responseHandler(`invalid password`,res);

        const token = jwt.sign({id: user._id, email: user.emailId}, config.JWTSecret);
        user.tokens.push({token});
        await user.save();

        responseHandler(`login success`,res,{...user._doc,token});
    } catch (e) {
        res.status(400).send(`Error : ${e}`);
    }
};

export default {register, logIn};