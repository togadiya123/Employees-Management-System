import moment from "moment";
import isEmail from "validator/es/lib/isEmail";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import {checkIsDateObject, isNullUndefinedEmpty} from "../../../HelperFunction";
import config from "../../../config";

export const commonBlurHandler = (state, setState, e, allFieldRequirementButtonId = null) => {
    const data = JSON.parse(JSON.stringify(state));
    const {target: {id, name}} = e;
    data.forEach(eachRow => eachRow.forEach(eachField => {
        if (`${eachField.id}-${eachField.type}` === (id || name)) {
            eachField.isInitialValue = false;
            const {isValid, errorText} = getValidationStatus(eachField);
            eachField.isValid = isValid;
            eachField.errorText = errorText;
        }
    }));
    setState(() => commonValidationForSubmitButton(data, allFieldRequirementButtonId));
};

export const commonChangeHandler = (state = [], setState = (e) => e, e = {}, allFieldRequirementButtonId = null, callback = (e) => e) => {
    let data = JSON.parse(JSON.stringify(state));
    const {target: {id, name}} = e;
    data.forEach(eachRow => eachRow.forEach(eachField => {
        if (`${eachField.id}-${eachField.type}` === (id || name)) {
            eachField.value = e.target.value;
            const {isValid, errorText} = getValidationStatus(eachField);
            eachField.isValid = isValid;
            eachField.errorText = errorText;
        }
    }));
    data = callback(data, id || name);
    setState(() => commonValidationForSubmitButton(data, allFieldRequirementButtonId));
};

export const commonSubmitHandler = (state, setState, e, allFieldRequirementButtonId = null, callback = () => {
}) => {
    let data = JSON.parse(JSON.stringify(state));
    data = setAllFieldValidation(data);
    data.forEach(eachRow => eachRow.forEach(eachField => {
        if (`${eachField.id}-${eachField.type}` === e.target.id) {
            const {isValid, errorText} = getAllFieldRequirementValidation(data);
            eachField.isValid = isValid;
            eachField.errorText = errorText;
            eachField.isInitialValue = false;
        }
    }));
    setState(() => data);
    allFieldRequirementButtonId && getObjFromArrayById(getObjArrayFromObjOfArrayOfArray(data), allFieldRequirementButtonId)?.isValid && callback(data);
};

export const setAllFieldValidation = (data) => {
    data.forEach(eachRow => eachRow.forEach(eachField => {
        const {isValid, errorText} = getValidationStatus(eachField);
        eachField.isValid = isValid;
        eachField.errorText = errorText;
        eachField.isInitialValue = false;
    }));
    return data;
};

export const getValidationStatus = (inputtedObj) => {
    const isValid = true;
    const errorText = '';
    if (inputtedObj.required) {
        if (isNullUndefinedEmpty(inputtedObj.value)) return {isValid: false, errorText: 'Fill the required field.'};
    }
    switch (inputtedObj.validationType) {
        case `email`:
            if (!isEmail(inputtedObj.value)) return {isValid: false, errorText: 'Fill the valid email id.'};
            break;
        case `strongPassword`:
            if (!isStrongPassword(inputtedObj.value, {
                minLength: 8, minLowercase: 1, minUppercase: 1, minSymbols: 1
            })) return {isValid: false, errorText: `Fill the strong password.`};
            break;
        case `date`:
            return checkIsValidDate(inputtedObj.value, inputtedObj.minDate, inputtedObj.maxDate);
        case `stringLength`:
            return checkStringLength(inputtedObj.value, inputtedObj.minChar, inputtedObj.maxChar);
        default:
            break;
    }
    return {isValid, errorText};
};

export const commonValidationForSubmitButton = (data, allFieldRequirementButtonId) => {
    allFieldRequirementButtonId && data.forEach(eachRow => eachRow.forEach(eachField => {
        if (`${eachField.id}-${eachField.type}` === allFieldRequirementButtonId && !eachField.isInitialValue) {
            const {isValid, errorText} = getAllFieldRequirementValidation(data);
            eachField.isValid = isValid;
            eachField.errorText = errorText;
        }
    }));
    return data;
};

export const getFormObject = (data, id) => getObjFromArrayById(getObjArrayFromObjOfArrayOfArray(data), id);

export const getAllFieldRequirementValidation = (data) => {
    const returnableObj = {isValid: true, errorText: ''};
    const obj = getObjArrayFromObjOfArrayOfArray(data).find(eachField => !getValidationStatus(eachField).isValid);
    if (!isNullUndefinedEmpty(obj)) {
        returnableObj.isValid = obj.isValid;
        returnableObj.errorText = obj.errorText;
    }
    return returnableObj;
};

export const checkIsValidDate = (date, min, max) => {
    if (!checkIsDateObject(date, config.DEFAULT_DATE_FORMAT)) return {
        isValid: false, errorText: 'Fill the valid date.'
    };
    if (min && checkIsDateObject(min, config.DEFAULT_DATE_FORMAT) && moment(min, config.DEFAULT_DATE_FORMAT) >= moment(date, config.DEFAULT_DATE_FORMAT)) return {
        isValid: false, errorText: 'Fill the later datetime of minimum dateTime.'
    };
    if (max && checkIsDateObject(min, config.DEFAULT_DATE_FORMAT) && moment(max, config.DEFAULT_DATE_FORMAT) < moment(date, config.DEFAULT_DATE_FORMAT)) return {
        isValid: false, errorText: 'Fill the earlier datetime of maximum dateTime.'
    };
    return {isValid: true, errorText: ``};
};

export const checkStringLength = (string, min, max) => {
    if (string.trim().length < min) return {isValid: false, errorText: `Fill a minimum ${min} character.`};
    if (string.trim().length > max) return {isValid: false, errorText: `Fill a maximum ${max} character.`};
    return {isValid: true, errorText: ``};
};

export const getObjFromArrayById = (array, objId) => {
    return Array.isArray(array) ? array.find(obj => obj.id === objId) : {}
};

export const getObjArrayFromObjOfArrayOfArray = (array) => {
    const data = [];
    array?.forEach(eachArray => eachArray?.forEach(obj => {
        data.push(obj)
    }));
    return data;
};

export const getFormObjectFromFormDataArray = (array, keyList) => {
    const obj = {};
    getObjArrayFromObjOfArrayOfArray(array).forEach(eachField => {
        if (keyList.includes(eachField.id)) (obj[eachField.id] = eachField.value)
    });
    return obj;
};