import {GET_USER_INFO, LOGIN_USER} from "./actionType";

export const loginUser = payload => ({
    actionType: LOGIN_USER,
    toasterString: `Waiting for Login Response.`,
    isHttpAction: true,
    url: '/auth/logIn',
    method: 'POST',
    body: payload,
});

export const getUserInfo = payload => ({
    actionType: GET_USER_INFO,
    isHttpAction: true,
    url: '/user/getUserInfo',
    method: 'GET',
    body: payload,
});
