import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card, Container} from "@mui/material";
import isEmail from "validator/es/lib/isEmail";

import isStrongPassword from "validator/es/lib/isStrongPassword";
import {loginUser} from "../../../Store/actions/action";
import {LOGIN_FORM_FIELD} from "../../../HelperFunction/staticList";
import Form from "../../../Components/CommonComponents/Form";
import {getObjFromArrayById, isNullUndefinedEmpty} from "../../../HelperFunction";

const Login = ({history}) => {

    const [loginFormFields, setLoginFormFields] = useState(LOGIN_FORM_FIELD);

    const dispatch = useDispatch();
    const {user} = useSelector(store => store);

    const logInSubmitHandler = (e) => {
        let data = JSON.parse(JSON.stringify(loginFormFields));
        data = setAllFieldValidation(data);
        data.forEach(eachField => {
            if (`${eachField.id}-${eachField.type}` === e.target.id) {
                const {isValid, errorText} = getAllFieldRequirementValidation(data);
                eachField.isValid = isValid;
                eachField.errorText = errorText;
                eachField.isInitialValue = false;
            }
        });
        setLoginFormFields(() => data);
        getObjFromArrayById(data, 'logIn')?.isValid && dispatch(loginUser({
            emailId: getObjFromArrayById(data, 'email')?.value,
            password: getObjFromArrayById(data, 'password')?.value
        }));
    };

    const setAllFieldValidation = (data = loginFormFields) => {
        data.forEach(eachField => {
            const {isValid, errorText} = getValidationStatus(eachField);
            eachField.isValid = isValid;
            eachField.errorText = errorText;
            eachField.isInitialValue = false;
        });
        return data;
    };

    const getAllFieldRequirementValidation = (data = loginFormFields) => {
        const returnableObj = {isValid: true, errorText: ''};
        const obj = data.find(eachField => !getValidationStatus(eachField).isValid);
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
                if (!isEmail(inputtedObj.value)) return {isValid: false, errorText: 'Fill the valid email id.'};
                break;
            case `strongPassword`:
                if (!isStrongPassword(inputtedObj.value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minSymbols: 1
                })) return {isValid: false, errorText: `Fill the strong password.`};
                break;
            default:
                break;
        }
        return {isValid, errorText};
    };

    const onFocusHandler = (e) => {
    };
    const onClickHandler = (e) => {
        switch (e.target.id) {
            case `logIn-button`:
                logInSubmitHandler(e);
                break;
            case ``:
                break;
            default:
                break;
        }
    };
    const onChangeHandler = (e) => {
        const data = JSON.parse(JSON.stringify(loginFormFields));
        const {target: {id}} = e;
        data.forEach(eachField => {
            if (`${eachField.id}-${eachField.type}` === id) {
                eachField.value = e.target.value;
                const {isValid, errorText} = getValidationStatus(eachField);
                eachField.isValid = isValid;
                eachField.errorText = errorText;
            }
        });
        data.forEach(eachField => {
            if (`${eachField.id}-${eachField.type}` === 'logIn-button' && !eachField.isInitialValue) {
                const {isValid, errorText} = getAllFieldRequirementValidation(data);
                eachField.isValid = isValid;
                eachField.errorText = errorText;
            }
        });
        setLoginFormFields(() => data);
    };
    const onBlurHandler = (e) => {
        const data = JSON.parse(JSON.stringify(loginFormFields));
        const {target: {id}} = e;
        data.forEach(eachField => {
            if (`${eachField.id}-${eachField.type}` === id) {
                eachField.isInitialValue = false;
            }
        });
        setLoginFormFields(() => data);
    };

    useEffect(() => {
        user.isLogIn && history.replace(`/`);
    }, [user,history]);


    return <React.Fragment>
        <Container>
            <Card sx={{
                width: `100%`,
                maxWidth: `400px`,
                mx: `auto`,
                my: `5rem`
            }}>
                <Form formDesign={loginFormFields}
                      onFocus={onFocusHandler}
                      onClick={onClickHandler}
                      onChange={onChangeHandler}
                      onBlur={onBlurHandler}/>
            </Card>
        </Container>
    </React.Fragment>
};

export default Login;