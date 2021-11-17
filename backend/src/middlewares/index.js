import jwt from 'jsonwebtoken';

import {isNullUndefinedEmpty} from "../helperFunction.js";
import responseHandler from "../responseHandler.js";
import config from '../config/index.js';
import {User} from "../modal/index.js";
import {toObjectId} from "../helperFunction.js";

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.headers['x-access-token'] || req.headers['authorization'] || req.headers['Authorization'];

        if (isNullUndefinedEmpty(token)) return responseHandler(`token missing`, res);

        token = token.replace(` `, ``).replace(`Bearer`, ' ');

        jwt.verify(token, config.JWTSecret, (error, decoded) => {
            if (error) return responseHandler(`invalid token`, res);
            req.tokenDecoded = {...decoded, token};
        });

        const user = await User.find({
            $and: [
                {
                    _id: toObjectId(req.tokenDecoded.id),

                },
                {
                    tokens: {
                        $elemMatch: {
                            token: req.tokenDecoded.token
                        }
                    }
                }
            ]
        });

        if (!user.length)return responseHandler(`expired token`, res);
        req.user = user[0];

        next();
    } catch (error) {
        console.log(`Error on verifyToken: ${error}`);
        return res.status(400).send(`Error on verifyToken: ${error}`);
    }
};