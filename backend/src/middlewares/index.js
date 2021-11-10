import jwt from 'jsonwebtoken';

import {isNullUndefinedEmpty} from "../helperFunction.js";
import responseHandler from "../responseHandler.js";
import config from '../config/index.js';
import {User} from "../modal/index.js";
import {toObjectId} from "../helperFunction.js";

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.headers['x-access-token'] || req.headers['authorization'];

        if (isNullUndefinedEmpty(token)) return responseHandler(`token missing`, res);

        token = token.replace(` `, ``).replace(`Bearer`, ' ');

        jwt.verify(token, config.JWTSecret, (error, decoded) => {
            if (error) return responseHandler(`invalid token`, res);
            req.tokenDecoded = {...decoded, token};
        });

        const user = await User.aggregate([
            {
                $match: {
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
                }
            }
        ]);

        if(!user.length) responseHandler(`expired token`,res);

        req.user = user[0];

        next();
    } catch (error) {
        console.log(`Error : ${error}`);
        res.status(400).send(`Error : ${error}`);
    }
};

// export const userDetails = async (req, res, next) => {
//     try {
//         // const user = User.findById(req?.tokenDecoded?.id);
//         // if (!user) return responseHandler(`user not found`, res);
//
//         const user = await User.aggregate([
//             {
//                 $match: {
//                     $and : [
//                         {id : req?.tokenDecoded?.id},
//                         {$in : [req?.tokenDecoded?.token , "$tokens" ]}
//                     ]
//                 }
//             }
//         ])
//
//
//     } catch (error) {
//         console.log(`Error : ${error}`);
//         res.status(400).send(`Error : ${error}`);
//     }
// };