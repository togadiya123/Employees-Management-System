import responseHandler from "../../responseHandler.js";
import {User} from "../../modal/index.js";
import {getObjFromKeyValueObjectArray, getOnlyRequiredObjectKeyValue, toObjectId} from "../../helperFunction.js";
import {updateUserInfoKeyList} from "./utiles.js";

const getUserInfo = async (req, res) => {
    try {
        return responseHandler(`passed user info`, res, req.user);
    } catch (e) {
        console.log(`Error on GetUserInfo`);
        return res.status(400).send(`Error on GetUserInfo : ${e}`);
    }
};

const updateUserInfo = async (req, res) => {
    try {

        const obj = getOnlyRequiredObjectKeyValue(getObjFromKeyValueObjectArray(req.body.obj), updateUserInfoKeyList);

        const user = await User.findOneAndUpdate({
            _id: toObjectId(req.tokenDecoded.id),
        }, {$set: obj}, {
            new: true
        });

        return responseHandler(`update user info success`, res, user);

    } catch (e) {
        console.log(`Error on updateUserInfo`);
        return res.status(400).send(`Error on updateUserInfo : ${e}`);
    }
};

const logOut = async (req, res) => {
    try {
        const {tokenDecoded: {token}} = req;

        req.user.tokens = req.user.tokens.filter(eachToken => eachToken.token !== token);
        await req.user.save();

        return responseHandler(`logout success`, res);
    } catch (e) {
        console.log(`Error on Logout`);
        return res.status(400).send(`Error on Logout : ${e}`);
    }
};

const getAllUser = async (req, res) => {
    try {
        const users = await User.aggregate([{$match: {positionType: {$ne: `Admin`}}}, {
            $project: {
                firstName: 1, lastName: 1
            }
        }]);

        return responseHandler(`successful`, res, users);
    } catch (e) {
        console.log(`Error on getAllUser`);
        return res.status(400).send(`Error on getAllUser : ${e}`);
    }
};

export default {getUserInfo, updateUserInfo, logOut, getAllUser};