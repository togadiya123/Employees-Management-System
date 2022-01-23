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

export const getObjFromKeyValueObjectArray = (array) => {
    const obj = {};
    Array.isArray(array) && array.forEach(e => {
        if (e.key && e.value) {
            obj[e.key] = e.value;
        }
    });
    return obj;
};

export const getDefinedValuesObject = (obj) => {
    for (const key in obj) {
        if (obj[key] === undefined) delete obj[key];
    }
    return obj;
};