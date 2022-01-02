import {Leave} from "../../modal/index.js";
import {getDefinedValuesObject, getOnlyRequiredObjectKeyValue, toObjectId} from "../../helperFunction.js";
import responseHandler from "../../responseHandler.js";
import {
    approveLeaveKeyList,
    cancelLeaveKeyList,
    editLeaveKeyList,
    editLeaveValueKeyList,
    rejectLeaveKeyList,
    userApplyToLeaveKeyList
} from "../../staticList.js";
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
        const {sortBy, limit, userId, taskId} = obj;
        const list = await Leave.aggregate([{
            $match: getDefinedValuesObject({user: userId, _id: taskId})
        }, {
            $sort: sortBy
        }, {
            $limit: limit
        }, {
            $lookup: {
                from: "users", let: {
                    "id": "$user"
                }, pipeline: [{
                    $match: {
                        $expr: {
                            $eq: ["$_id", "$$id"]
                        }
                    }
                }, {
                    $addFields: {
                        "fullName": {
                            $concat: ["$firstName", " ", "$lastName"]
                        }
                    }
                }, {
                    $project: {
                        "_id": 0, "fullName": 1, "firstName": 1, "lastName": 1,
                    }
                }], as: "userDetails",
            }
        }, {
            $addFields: {
                "userFullName": {
                    $first: "$userDetails.fullName"
                },
                "applicationDate": "$createdAt",
                "userFirstName": {$first: "$userDetails.firstName"},
                "userLastName": {$first: "$userDetails.lastName"},
            }
        }, {
            $project: {
                "userDetails": 0,
            }
        }]);
        return responseHandler(`succeeds get to leavesList`, res, list);
    } catch (e) {
        console.log(`Error on getLeaveList`);
        return res.status(400).send(`Error on getLeaveList : ${e}`);
    }
};

const cancelLeave = async (req, res) => {
    try {
        const _id = getOnlyRequiredObjectKeyValue(req.body, cancelLeaveKeyList).leaveApplicationId;

        if (!_id)
            return responseHandler(`undefined leave application id`, res);
        await Leave.updateOne({
            user: toObjectId(req.tokenDecoded.id),
            _id,
            status: `Pending`
        }, {status: `Canceled`, statusDescription: `Canceled by user.`})

        return responseHandler(`succeeds cancel to leave`, res);
    } catch (e) {
        console.log(`Error on applyToLeave`);
        return res.status(400).send(`Error on applyToLeave : ${e}`);
    }
};

const editLeave = async (req, res) => {
    try {
        let {leaveApplicationId: _id, changedValue} = getOnlyRequiredObjectKeyValue(req.body, editLeaveKeyList);

        if (!_id || !changedValue)
            return responseHandler(`undefined leave application id`, res);

        console.log(changedValue);
        changedValue = getOnlyRequiredObjectKeyValue(changedValue, editLeaveValueKeyList);

        console.log(changedValue);

        await Leave.updateOne({
            user: toObjectId(req.tokenDecoded.id),
            _id,
            status: `Pending`
        }, changedValue)

        return responseHandler(`succeeds edit to leave`, res);
    } catch (e) {
        console.log(`Error on applyToLeave`);
        return res.status(400).send(`Error on applyToLeave : ${e}`);
    }
};

const rejectLeave = async (req, res) => {
    try {
        const {leaveApplicationId: _id, userId: user} = getOnlyRequiredObjectKeyValue(req.body, rejectLeaveKeyList);

        if (!_id || !user)
            return responseHandler(`undefined leave application id`, res);
        await Leave.updateOne({
            user: toObjectId(user),
            _id: toObjectId(_id),
            status: `Pending`
        }, {status: `Rejected`, statusDescription: `Rejected by admin.`})

        return responseHandler(`succeeds rejected to leave`, res);
    } catch (e) {
        console.log(`Error on applyToLeave`);
        return res.status(400).send(`Error on applyToLeave : ${e}`);
    }
};

const approveLeave = async (req, res) => {
    try {
        const {leaveApplicationId: _id, userId: user} = getOnlyRequiredObjectKeyValue(req.body, approveLeaveKeyList);

        if (!_id || !user)
            return responseHandler(`undefined leave application id`, res);
        await Leave.updateOne({
            user: toObjectId(user),
            _id: toObjectId(_id),
            status: `Pending`
        }, {status: `Approved`, statusDescription: `Approved by admin.`})

        return responseHandler(`succeeds approved to leave`, res);
    } catch (e) {
        console.log(`Error on applyToLeave`);
        return res.status(400).send(`Error on applyToLeave : ${e}`);
    }
};

export default {applyToLeave, getLeavesList, cancelLeave, editLeave, rejectLeave, approveLeave};