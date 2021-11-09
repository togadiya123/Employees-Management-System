export const isNullUndefinedEmpty = (value) => {
    return (value === null || value === undefined || value === ``) ? true : false;
};