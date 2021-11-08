import rootState from "./rootState";
import {LOGIN_USER} from "../actions/actionType";
import {getFormattedResponse} from "../../HelperFunction";

const reducer = (state = rootState, {type, payload }) => {
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
            localStorage.setItem("token",payload.token);
            return {
                ...state,
                user: {
                    logInApiFetching: false,
                    isLogIn: true,
                    ...payload
                }
            }
        }

        case `${LOGIN_USER}_FAILED` : {
            state.apiResponses.push(getFormattedResponse(`${LOGIN_USER}_FAILED`, payload));
            return {
                ...state,
                user: {
                    logInApiFetching: false,
                    isLogIn: false,
                    ...payload
                }
            }
        }

        default : {
            return state;
        }
    }
};

export default reducer;