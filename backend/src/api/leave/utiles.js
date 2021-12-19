import {getOnlyRequiredObjectKeyValue, toObjectId} from "../../helperFunction.js";

export const leaveTableHeadingList = [`updatedAt`, `user`, `applicationDate`, `startingDate`, `endingDate`, `type`, `description`, `status`];
export const leaveTableFormatList = [`userId`, `sortBy`, `limit`];

export const getLeaveListTableFormatObject = (req) => {
    const obj = JSON.parse(JSON.stringify(req.body));

    obj.userId = req.user.positionType !== `Admin` ? toObjectId(req.tokenDecoded.id) : undefined;

    if (req.params.taskId) return {
        haveError: false,
        obj: {
            ...obj,
            taskId: toObjectId(req.params.taskId),
            sortBy: {
                'updatedAt': 1
            },
            limit: 1
        }
    }

    getOnlyRequiredObjectKeyValue(obj, leaveTableFormatList);
    if (leaveTableFormatList.sort().join() !== Object.keys(obj).sort().join()) return {haveError: true};

    getOnlyRequiredObjectKeyValue(obj[`sortBy`], leaveTableHeadingList);
    if (Object.keys(obj[`sortBy`]).some(key => obj[`sortBy`][key] !== 1 && obj[`sortBy`][key] !== -1)) return {haveError: true};

    if (isNaN(obj[`limit`]) || obj[`limit`] < 1) return {haveError: true};

    return {haveError: false, obj}
};