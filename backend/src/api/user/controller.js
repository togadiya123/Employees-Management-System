import responseHandler from "../../responseHandler.js";

const getUserInfo = async (req, res) => {
    try {
        let userToken = req.body.token;
        responseHandler(`register success`, res);
    } catch (e) {
        console.log(`Error : ${e}`);
        res.status(400).send(`Error : ${e}`);
    }
};

export default {getUserInfo};