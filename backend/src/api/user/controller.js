import responseHandler from "../../responseHandler.js";

const getUserInfo = async (req, res) => {
    try {
        return responseHandler(`passed user info`, res, req.user);
    } catch (e) {
        console.log(`Error on GetUserInfo : ${e}`);
        return res.status(400).send(`Error on GetUserInfo : ${e}`);
    }
};

const logOut = async (req, res) => {
    try {
        const {tokenDecoded: {token}} = req;

        req.user.tokens = req.user.tokens.filter(eachToken => eachToken.token !== token);
        await req.user.save();

        return responseHandler(`logout success`, res);
    } catch (e) {
        console.log(`Error on Logout : ${e}`);
        return res.status(400).send(`Error on Logout : ${e}`);
    }
};

export default {getUserInfo, logOut};