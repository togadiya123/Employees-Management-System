import {Leave} from "../../modal/index.js";
import {getOnlyRequiredObjectKeyValue} from "../../helperFunction.js";
import responseHandler from "../../responseHandler.js";
import {userApplyToLeaveKeyList} from "../../staticList.js";
import {getLeaveListTableFormatObject} from "./utiles.js";

const applyToLeave = async (req, res) => {
    try {
        await Leave.create(getOnlyRequiredObjectKeyValue(req.body, userApplyToLeaveKeyList));
        return responseHandler(`succeeds apply to leave`, res);
    } catch (e) {
        console.log(`Error on applyToLeave`);
        return res.status(400).send(`Error on applyToLeave : ${e}`);
    }
};

const getLeavesList = async (req, res) => {
    try {
        const {haveError, obj} = getLeaveListTableFormatObject(req);
        if (haveError) return responseHandler(`invalid props`, res);
        const {sortBy, limit, id} = obj;
        const list = await Leave.aggregate([
            {
                $sort: sortBy
            },
            {
                $limit: limit
            }
        ]);
        return responseHandler(`succeeds get to leavesList`, res, list);
    } catch (e) {
        console.log(`Error on getLeaveList ${e}`);
        return res.status(400).send(`Error on getLeaveList : ${e}`);
    }
};

export default {applyToLeave, getLeavesList};