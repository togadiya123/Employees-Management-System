export const getFormattedResponse = (key, response) => {
    return {
        key,
        message: response.message,
        technicalMessage: response.technicalMessage,
        statusCode: response.statusCode,
    };
};

export const commonTransition = (property = '') => ({
    transitionProperty: `${property} !important`,
    transitionDuration: "225ms !important",
    transitionTimingFunction: `cubic-bezier(0, 0, 0.2, 1) !important`,
    transitionDelay: `0ms !important`,
});

export const isNullUndefinedEmpty = (value) => {
    return (value === null || value === undefined || value === ``);
};

export const getObjFromArrayById = (array, objId) => {
    return Array.isArray(array) ? array.find(obj => obj.id === objId) : {}
};

export const getObjArrayFromArrayOfArrayById = (array, objId) => {
    const data = [];
    array?.forEach(eachArray => eachArray?.forEach(obj => {
        data.push(obj)
    }));
    return data;
};

export const getRootCSSProperty = (key) => {
    return getComputedStyle(document.querySelector(':root')).getPropertyValue(key);
};