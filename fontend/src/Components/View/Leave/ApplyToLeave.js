import React, {useState} from "react";

import Form from "../../CommonComponents/Form";
import {APPLY_TO_LEAVE_FORM_FIELD} from "../../../HelperFunction/staticList";
import {Card, Container} from "@mui/material";
import {isNullUndefinedEmpty} from "../../../HelperFunction";

const ApplyToLeave = () => {

    const [leaveFormData, setLeaveFormData] = useState(APPLY_TO_LEAVE_FORM_FIELD);

    const getAllFieldRequirementValidation = (data = leaveFormData) => {
        const returnableObj = {isValid: true, errorText: ''};
        const obj = data.find(eachRow => eachRow.forEach(eachField => !getValidationStatus(eachField).isValid));
        if (!isNullUndefinedEmpty(obj)) {
            returnableObj.isValid = obj.isValid;
            returnableObj.errorText = obj.errorText;
        }
        return returnableObj;
    };

    const getValidationStatus = (inputtedObj) => {
        const isValid = true;
        const errorText = '';
        if (inputtedObj.isRequired) {
            if (isNullUndefinedEmpty(inputtedObj.value)) return {isValid: false, errorText: 'Fill the required field.'};
        }
        switch (inputtedObj.validationType) {
            case `email`:
                break;
            case `strongPassword`:
                break;
            default:
                break;
        }
        return {isValid, errorText};
    };

    const onFocusHandler = (e) => {
    };
    const onClickHandler = (e) => {
        console.log(e);
        switch (e.target.id) {
            case ``:
                break;
            case `w`:
                break;
            default:
                break;
        }
    };

    const onChangeHandler = (e) => {
        console.log('e',e);
        const data = JSON.parse(JSON.stringify(leaveFormData));
        const {target: {id}} = e;
        data.forEach(eachRow => eachRow.forEach(eachField => {
            if (`${eachField.id}-${eachField.type}` === id) {
                eachField.value = e.target.value;
                const {isValid, errorText} = getValidationStatus(eachField);
                eachField.isValid = isValid;
                eachField.errorText = errorText;
            }
        }));
        data.forEach(eachRow => eachRow.forEach(eachField => {
            if (`${eachField.id}-${eachField.type}` === 'logIn-button' && !eachField.isInitialValue) {
                const {isValid, errorText} = getAllFieldRequirementValidation(data);
                eachField.isValid = isValid;
                eachField.errorText = errorText;
            }
        }));
        setLeaveFormData(() => data);
    };

    const onBlurHandler = (e) => {
        const data = JSON.parse(JSON.stringify(leaveFormData));
        const {target: {id}} = e;
        data.forEach(eachRow => eachRow.forEach(eachField => {
            if (`${eachField.id}-${eachField.type}` === id) {
                eachField.isInitialValue = false;
            }
        }));
        setLeaveFormData(() => data);
    };

    return <React.Fragment>
        <Container>
            <Card sx={{
                width: `100%`,
                maxWidth: `650px`,
                mx: `auto`,
            }}>
                <Form formDesign={leaveFormData}
                      onFocus={onFocusHandler}
                      onClick={onClickHandler}
                      onChange={onChangeHandler}
                      onBlur={onBlurHandler}/>
            </Card>
        </Container>
    </React.Fragment>;
};

export default ApplyToLeave;