import jwt from 'jsonwebtoken';

import {isNullUndefinedEmpty, toObjectId} from "../helperFunction.js";
import responseHandler from "../responseHandler.js";
import config from '../config/index.js';
import {User} from "../modal/index.js";
import {matchRoute, ROUTE_LIST} from "./utiles.js";

export const verifyToken = async (req, res, next) => {
    try {
        const routeObject = ROUTE_LIST().find(obj=>matchRoute(obj.route,req.path));
        if(!routeObject) return responseHandler(`route not found`, res);

        let token = req.headers['authorization'];

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

        if (!user.length) return responseHandler(`expired token`, res);
        req.user = user[0];

        if(!routeObject.eligibility[req.user.positionType.toLowerCase()]) return responseHandler(`unauthorized`, res);

        req.body = {
            ...req.body,
            user: toObjectId(req.tokenDecoded.id)
        };

        next();
    } catch (error) {
        console.log(`Error on verifyToken`);
        return res.status(400).send(`Error on verifyToken: ${error}`);
    }
};