import mongoose from 'mongoose';

export const isNullUndefinedEmpty = (value) => {
    return (value === null || value === undefined || value === ``);
};

export const toObjectId = (id) => {
    return new mongoose.Types.ObjectId(id)
};