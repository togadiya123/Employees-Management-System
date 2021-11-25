import rootState from "./rootState";
import {GET_USER_INFO, LOADER_END, LOADER_START, LOGIN_USER, LOGOUT_USER} from "../actions/actionType";
import {getFormattedResponse} from "../../HelperFunction";

const reducer = (state = JSON.parse(JSON.stringify(rootState)), {type, payload}) => {
    switch (type) {
        case `_FETCHING`: {
            return {
                ...state,
            };
        }

        case `_SUCCESS`: {
            return {
                ...payload,
                ...state,
            }
        }

        case `_FAILED` : {
            return {

                ...state,
            }
        }

        case `${LOGIN_USER}_FETCHING`: {
            return {
                ...state,
                user: {
                    ...state.user,
                    logInApiFetching: true,
                }
            };
        }

        case `${LOGIN_USER}_SUCCESS`: {
            state.apiResponses.push(getFormattedResponse(`${LOGIN_USER}_SUCCESS`, payload));
            localStorage.setItem("token", payload.data.token);
            return {
                ...state,
                user: {
                    ...state.user,
                    logInApiFetching: false,
                    isLogIn: true,
                    ...payload.data
                }
            }
        }

        case `${LOGIN_USER}_FAILED` : {
            state.apiResponses.push(getFormattedResponse(`${LOGIN_USER}_FAILED`, payload));
            return {
                ...state,
                user: {
                    ...state.user,
                    logInApiFetching: false,
                    isLogIn: false,
                }
            }
        }

        case `${GET_USER_INFO}_FETCHING`: {
            return {
                ...state,
                user: {
                    ...state.user,
                    fetchingUserInformation: true,
                }
            };
        }

        case `${GET_USER_INFO}_SUCCESS`: {
            state.apiResponses.push(getFormattedResponse(`${GET_USER_INFO}_SUCCESS`, payload));
            return {
                ...state,
                user: {
                    ...state.user,
                    fetchingUserInformation: false,
                    haveUserInfo: true,
                    ...payload.data
                }
            }
        }

        case `${GET_USER_INFO}_FAILED` : {
            localStorage.removeItem("token");
            return JSON.parse(JSON.stringify(rootState));
        }

        case `${LOGOUT_USER}_FETCHING`: {
            return {
                ...state,
                user: {
                    ...state.user,
                    logOutApiFetching: true,
                }
            };
        }

        case `${LOGOUT_USER}_SUCCESS`: {
            localStorage.removeItem("token");
            return JSON.parse(JSON.stringify(rootState));
        }

        case `${LOGOUT_USER}_FAILED` : {
            state.apiResponses.push(getFormattedResponse(`${LOGOUT_USER}_FAILED`, payload));
            return {
                ...state,
                user: {
                    ...state.user,
                    logOutApiFetching: false,
                }
            }
        }

        case `${LOADER_START}`: {
            return {
                ...state,
                loader: {
                    ...state.loader,
                    status: true
                }
            }
        }

        case `${LOADER_END}`: {
            return {
                ...state,
                loader: {
                    ...state.loader,
                    status: false
                }
            }
        }

        default : {
            return state;
        }
    }
};

export default reducer;