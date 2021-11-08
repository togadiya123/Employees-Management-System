import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, CardActions, CardContent, Container, FormControl, TextField, Typography} from "@material-ui/core";

import "./index.scss"
import isEmail from "validator/es/lib/isEmail";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import {loginUser} from "../../Store/actions/action";

const Login = ({history}) => {

    const initialLoginCredentials = {
        emailId: {
            key: "email",
            value: "",
            isInitialValue: true,
            currentlyInputInFocus: false,
            isValid: false,
        },
        password: {
            key: "password",
            value: "",
            isInitialValue: true,
            currentlyInputInFocus: false,
            isValid: false,
        }
    };

    const dispatch = useDispatch();
    const store = useSelector(store=>store);
    const [loginCredentials, setLoginCredentials] = useState(initialLoginCredentials);

    const checkIsValidInput = (e) => {
        let validationStatus = false;
        if (e.target.id === "emailId") {
            validationStatus = isEmail(e.target.value);
        } else if (e.target.id === "password") {
            validationStatus = isStrongPassword(e.target.value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minSymbols: 1
            })
        }
        return validationStatus;
    };

    const inputChangeHandler = (e) => {
        Object.keys(loginCredentials).includes(e.target.id) && setLoginCredentials((loginCredentials) => {
            const validationStatus = checkIsValidInput(e);
            return {
                ...loginCredentials,
                [e.target.id]: {
                    ...loginCredentials[e.target.id],
                    value: e.target.value,
                    currentlyInputInFocus: true,
                    isValid: validationStatus,
                },
            };
        });
    };

    const inputBlurHandler = (e) => {
        Object.keys(loginCredentials).includes(e.target.id) && setLoginCredentials((loginCredentials) => {
            return {
                ...loginCredentials,
                [e.target.id]: {
                    ...loginCredentials[e.target.id],
                    currentlyInputInFocus: false,
                    isInitialValue: false,
                },
            };
        });
    };

    // if (store.user.isLogIn===true) {history.push('/Dashboard');}

    // useEffect(()=>{
    //     if (store.user.isLogIn===true) {history.push('/Dashboard');}
    // },[store]);

    const checkInputHaveError = (e) => {
        let haveError = true;
        if (loginCredentials[e].isValid) {
            return false;
        } else {
            if (loginCredentials[e].isInitialValue) {
                return false;
            } else {
                if (loginCredentials[e].currentlyInputInFocus) {
                    return true;
                }
            }
        }
        return haveError;
    };

    const checkButtonShouldBeDisable = () => {
        return Object.keys(loginCredentials).some(loginCredential => loginCredentials[loginCredential].isValid === false);
    };

    const logInSubmitHandler = () => {
        dispatch(loginUser({emailId: loginCredentials.emailId.value, password: loginCredentials.password.value}));
    };

    return (
        <Container>
            <Card className={"loginBox flex gap-1 flexDirectionColumn p-1 m-2rem my-auto mt-3rem"}>
                <CardContent className={"flex gap-1 flexDirectionColumn"}>
                    <Typography>
                        <FormControl fullWidth={true}>
                            <TextField
                                helperText="Enter Your Email-Id"
                                id="emailId"
                                label="Email Id"
                                type="email"
                                variant="outlined"
                                fullWidth={true}
                                error={checkInputHaveError("emailId")}
                                onChange={(e) => inputChangeHandler(e)}
                                onBlur={(e) => inputBlurHandler(e)}
                            />
                        </FormControl>
                    </Typography>
                    <Typography>
                        <FormControl fullWidth={true}>
                            <TextField
                                helperText="Enter Your Password"
                                id="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth={true}
                                error={checkInputHaveError("password")}
                                onChange={(e) => inputChangeHandler(e)}
                                onBlur={(e) => inputBlurHandler(e)}
                            />
                        </FormControl>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" className={"w-100 bg-main c-white"} size="large"
                            disabled={checkButtonShouldBeDisable()} onClick={() => logInSubmitHandler()}>Log In</Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default Login;