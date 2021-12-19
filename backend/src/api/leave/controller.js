import {Leave} from "../../modal/index.js";
import {getDefinedValuesObject, getOnlyRequiredObjectKeyValue} from "../../helperFunction.js";
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
        const {sortBy, limit, userId, taskId} = obj;
        const list = await Leave.aggregate([
            {
                $match: getDefinedValuesObject({user: userId, _id: taskId})
            },
            {
                $sort: sortBy
            },
            {
                $limit: limit
            },
            {
                $lookup: {
                    from: "users",
                    let: {
                        "id": "$user"
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$_id", "$$id"]
                                }
                            }
                        },
                        {
                            $addFields: {
                                "fullName": {
                                    $concat: ["$firstName", " ", "$lastName"]
                                }
                            }
                        },
                        {
                            $project: {
                                "_id": 0,
                                "fullName": 1,
                                "firstName": 1,
                                "lastName": 1,
                            }
                        }
                    ],
                    as: "userDetails",
                }
            },
            {
                $addFields: {
                    "userFullName": {
                        $first: "$userDetails.fullName"
                    },
                    "applicationDate": "$createdAt",
                    "userFirstName": {$first: "$userDetails.firstName"},
                    "userLastName": {$first: "$userDetails.lastName"},
                }
            },
            {
                $project: {
                    "userDetails": 0,
                }
            }
        ]);
        return responseHandler(`succeeds get to leavesList`, res, list);
    } catch (e) {
        console.log(`Error on getLeaveList`);
        return res.status(400).send(`Error on getLeaveList : ${e}`);
    }
};

export default {applyToLeave, getLeavesList};