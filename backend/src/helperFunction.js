import mongoose from 'mongoose';

export const isNullUndefinedEmpty = (value) => {
    return (value === null || value === undefined || value === ``);
};

export const toObjectId = (id) => {
    return new mongoose.Types.ObjectId(id)
};

export const getOnlyRequiredObjectKeyValue = (obj, keyArray) => {
    if (typeof obj === "object")
        for (const key in obj) {
            !keyArray.some(eachKey => eachKey === key) && (delete obj[key]);
        }
    return obj;
};