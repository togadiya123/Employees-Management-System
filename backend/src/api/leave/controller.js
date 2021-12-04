import {Leave} from "../../modal/index.js";
import {getOnlyRequiredObjectKeyValue} from "../../helperFunction.js";
import responseHandler from "../../responseHandler.js";
import {userApplyToLeaveKeyList} from "../../staticList.js";

const applyToLeave = async (req, res) => {
    try {
        await Leave.create(getOnlyRequiredObjectKeyValue(req.body, userApplyToLeaveKeyList));
        return responseHandler(`succeeds apply to leave`, res);
    } catch (e) {
        console.log(`Error on applyToLeave`);
        return res.status(400).send(`Error on applyToLeave : ${e}`);
    }
};

const getLeaveList = async (req,res)=>{
    try{

    }catch (e) {
        console.log(`Error on getLeaveList`);
        return res.status(400).send(`Error on getLeaveList : ${e}`);
    }
};

export default {applyToLeave};