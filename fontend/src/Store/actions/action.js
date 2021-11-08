import {LOGIN_USER} from "./actionType";

export const loginUser = payload => ({
    actionType: LOGIN_USER,
    isHttpAction : true,
    url: '/auth/logIn',
    method: 'post',
    body:payload,
});
