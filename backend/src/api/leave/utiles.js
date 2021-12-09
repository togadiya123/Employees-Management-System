import {getOnlyRequiredObjectKeyValue, toObjectId} from "../../helperFunction.js";

export const leaveTableHeadingList = [`updatedAt`, `user`, `applicationDate`, `startingDate`, `endingDate`, `type`, `description`, `status`];
export const leaveTableFormatList = [`sortBy`, `limit`];

export const getLeaveListTableFormatObject = (req) => {
    const obj = JSON.parse(JSON.stringify(req.body));

    getOnlyRequiredObjectKeyValue(obj, leaveTableFormatList);
    if (leaveTableFormatList.sort().join() !== Object.keys(obj).sort().join()) return {haveError: true};

    getOnlyRequiredObjectKeyValue(obj[`sortBy`], leaveTableHeadingList);
    if (Object.keys(obj[`sortBy`]).some(key => obj[`sortBy`][key] !== 1 && obj[`sortBy`][key] !== -1)) return {haveError: true};

    req.user.positionType !== `Admin` && (obj.id=toObjectId(req.tokenDecoded.id))

    if (isNaN(obj[`limit`]) || obj[`limit`] < 1) return {haveError: true};

    return {haveError: false, obj}
};