import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card, Container} from "@mui/material";

import {loginUser} from "../../../Store/actions/action";
import {LOGIN_FORM_FIELD} from "../../../HelperFunction/staticList";
import Form from "../../../Components/CommonComponents/Form";
import {
    commonBlurHandler,
    commonChangeHandler,
    getAllFieldRequirementValidation,
    getObjArrayFromArrayOfArrayById,
    getObjFromArrayById,
    setAllFieldValidation
} from "../../../HelperFunction";

const Login = ({history}) => {

    const [loginFormFields, setLoginFormFields] = useState(LOGIN_FORM_FIELD);

    const dispatch = useDispatch();
    const {user} = useSelector(store => store);

    const logInSubmitHandler = (e) => {
        let data = JSON.parse(JSON.stringify(loginFormFields));
        data = setAllFieldValidation(data);
        data.forEach(eachRow => eachRow.forEach(eachField => {
            if (`${eachField.id}-${eachField.type}` === e.target.id) {
                const {isValid, errorText} = getAllFieldRequirementValidation(data);
                eachField.isValid = isValid;
                eachField.errorText = errorText;
                eachField.isInitialValue = false;
            }
        }));
        setLoginFormFields(() => data);
        getObjFromArrayById(getObjArrayFromArrayOfArrayById(data), 'logIn')?.isValid && dispatch(loginUser({
            emailId: getObjFromArrayById(getObjArrayFromArrayOfArrayById(data), 'email')?.value,
            password: getObjFromArrayById(getObjArrayFromArrayOfArrayById(data), 'password')?.value
        }));
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
        commonChangeHandler(loginFormFields, setLoginFormFields, e, `logIn-button`);
    };
    const onBlurHandler = (e) => {
        commonBlurHandler(loginFormFields, setLoginFormFields, e);
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