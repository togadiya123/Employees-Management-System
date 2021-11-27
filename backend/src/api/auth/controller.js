import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../../modal/index.js";
import responseHandler from "../../responseHandler.js";
import config from "../../config/index.js";

const register = async (req, res) => {
    try {
        let body = req.body;
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);
        await User.create(body);
        return responseHandler(`register success`,res);
    } catch (e) {
        console.log(`Error on register`);
        return res.status(400).send(`Error : ${e}`);
    }
};

const logIn = async (req, res) => {
    try {
        let {emailId, password} = req.body;
        if (!(emailId && password))return responseHandler(`invalid email or password`,res);

        const user = await User.findOne({emailId: emailId});
        if(!user)return responseHandler(`invalid email`,res);

        const response = await bcrypt.compare(password, user.password);
        if(!response)return responseHandler(`invalid password`,res);

        const token = jwt.sign({id: user._id, email: user.emailId}, config.JWTSecret);
        user.tokens.push({token});
        await user.save();

        return responseHandler(`login success`,res,{token});
    } catch (e) {
        return res.status(400).send(`Error on login`);
    }
};

export default {register, logIn};