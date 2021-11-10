import responseHandler from "../../responseHandler.js";

const getUserInfo = async (req, res) => {
    try {
        responseHandler(`passed user info`, res, req.user);
    } catch (e) {
        console.log(`Error : ${e}`);
        res.status(400).send(`Error : ${e}`);
    }
};

export default {getUserInfo};