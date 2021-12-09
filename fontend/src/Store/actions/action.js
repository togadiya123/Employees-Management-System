import {APPLY_TO_LEAVE, GET_LEAVE_LIST, GET_USER_INFO, LOGIN_USER, LOGOUT_USER} from "./actionType";

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
    toasterString: `Waiting for User Information.`,
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

export const applyToLeave = payload =>({
    actionType: APPLY_TO_LEAVE,
    toasterString: `Try to apply a leave.`,
    isHttpAction: true,
    url: '/leave/applyToLeave',
    method: 'POST',
    body: payload,
});

export const getLeaveList = payload =>({
    actionType: GET_LEAVE_LIST,
    toasterString: `Try to get leave list.`,
    isHttpAction: true,
    url: '/leave/getLeavesList',
    method: 'POST',
    body: payload,
})