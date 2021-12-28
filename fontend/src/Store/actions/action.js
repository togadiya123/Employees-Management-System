import {
    APPLY_TO_LEAVE, APPROVE_LEAVE,
    CANCEL_LEAVE, EDIT_LEAVE,
    GET_LEAVE_INFO,
    GET_LEAVE_LIST,
    GET_USER_INFO,
    LOGIN_USER,
    LOGOUT_USER, REJECT_LEAVE
} from "./actionType";

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

export const applyToLeave = payload => ({
    actionType: APPLY_TO_LEAVE,
    toasterString: `Try to apply a leave.`,
    isHttpAction: true,
    url: '/leave/applyToLeave',
    method: 'POST',
    body: payload,
});

export const getLeaveList = payload => ({
    actionType: GET_LEAVE_LIST,
    toasterString: `Try to get leave list.`,
    isHttpAction: true,
    url: '/leave/getLeavesList',
    method: 'POST',
    body: payload,
});

export const getLeaveInfo = payload => ({
    actionType: GET_LEAVE_INFO,
    toasterString: `Try to get leave Information.`,
    isHttpAction: true,
    url: `/leave/getLeavesList/${payload.taskId || 0}`,
    method: 'POST',
    body: payload,
})

export const cancelLeave = payload => ({
    actionType: CANCEL_LEAVE,
    toasterString: `Try to cancel leave application.`,
    isHttpAction: true,
    url: '/leave/cancelLeave',
    method: 'POST',
    body: payload,
});

export const editLeave = payload => ({
    actionType: EDIT_LEAVE,
    toasterString: `Try to changes on leave application.`,
    isHttpAction: true,
    url: `/leave/editLeave`,
    method: 'POST',
    body: payload,
})

export const rejectLeave = payload => ({
    actionType: REJECT_LEAVE,
    toasterString: `Try to reject a leave application.`,
    isHttpAction: true,
    url: '/leave/rejectLeave',
    method: 'POST',
    body: payload,
});

export const approveLeave = payload => ({
    actionType: APPROVE_LEAVE,
    toasterString: `Try to approve a leave application.`,
    isHttpAction: true,
    url: `/leave/approveLeave`,
    method: 'POST',
    body: payload,
})