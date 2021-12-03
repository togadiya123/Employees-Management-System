import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card, Container} from "@mui/material";

import {loginUser} from "../../../Store/actions/action";
import {LOGIN_FORM_FIELD} from "../../../HelperFunction/staticList";
import Form from "../../../Components/CommonComponents/Form";
import {
    commonBlurHandler,
    commonChangeHandler,
    commonSubmitHandler,
    getObjArrayFromObjOfArrayOfArray,
    getObjFromArrayById
} from "../../../HelperFunction";

const Login = ({history}) => {

    const [loginFormFields, setLoginFormFields] = useState(LOGIN_FORM_FIELD);

    const dispatch = useDispatch();
    const {user} = useSelector(store => store);

    const logInSubmitHandler = (e) => {
        commonSubmitHandler(loginFormFields, setLoginFormFields, e, 'logIn', (data) => {
            dispatch(loginUser({
                emailId: getObjFromArrayById(getObjArrayFromObjOfArrayOfArray(data), 'email')?.value,
                password: getObjFromArrayById(getObjArrayFromObjOfArrayOfArray(data), 'password')?.value
            }))
        });
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