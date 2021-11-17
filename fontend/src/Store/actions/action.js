import {GET_USER_INFO, LOGIN_USER, LOGOUT_USER} from "./actionType";

export const loginUser = payload => ({
    actionType: LOGIN_USER,
    toasterString: `Waiting for Login Response.`,
    isHttpAction: true,
    url: '/auth/logIn',
    method: 'POST',
    body: payload,
});

export const getUserInfo = () => ({
    actionType: GET_USER_INFO,
    isHttpAction: true,
    url: '/user/getUserInfo',
    method: 'GET',
});

export const logOutUser = () => ({
    actionType: LOGOUT_USER,
    toasterString: `Waiting for Logout Response.`,
    isHttpAction: true,
    url: '/user/logOut',
    method: 'GET',
});
