import jwt from 'jsonwebtoken';

import {isNullUndefinedEmpty} from "../helperFunction.js";
import responseHandler from "../responseHandler.js";
import config from '../config/index.js';

export const verifyToken = (req, res, next) => {
    try {
        let token = req.headers['x-access-token'] || req.headers['authorization'];

        if (isNullUndefinedEmpty(token)) return responseHandler(`token missing`, res);

        token = token.replace(` `, ``).replace(`Bearer`, ' ');

        // if (!isJWT(token)) responseHandler(`invalid jwt token`, res);

        jwt.verify(token, config.JWTSecret, (error, decoded) => {
            if (error) return responseHandler(`invalid token`, res);
            req.tokenDecoded = decoded;
        });

        next();
    } catch (error) {
        console.log(`Error : ${error}`);
        res.status(400).send(`Error : ${error}`);
    }
};