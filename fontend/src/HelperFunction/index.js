import moment from "moment";

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

export const getRootCSSProperty = (key) => {
    return getComputedStyle(document.querySelector(':root')).getPropertyValue(key);
};

export const checkIsDateObject = (date, format = '') => {
    return moment(date, format).isValid();
};