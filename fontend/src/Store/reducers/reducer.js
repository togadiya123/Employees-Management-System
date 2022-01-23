import rootState from "./rootState";
import {
    APPLY_TO_LEAVE,
    GET_LEAVE_LIST,
    GET_LEAVE_INFO,
    GET_USER_INFO,
    LOADER_END,
    LOADER_START,
    LOGIN_USER,
    LOGOUT_USER,
    UPLOAD_IMAGE_PROFILE, UPDATE_PROFILE
} from "../actions/actionType";
import {getFormattedResponse} from "../../HelperFunction";

const reducer = (state = JSON.parse(JSON.stringify(rootState)), {type, payload, actionType}) => {
    switch (type) {
        case `_FETCHING`: {
            return {
                ...state,
            };
        }

        case `_SUCCESS`: {
            return {
                ...payload, ...state,
            }
        }

        case `_FAILED` : {
            return {

                ...state,
            }
        }

        case `API_RESPONSES` : {
            return {
                ...state,
                apiResponses: [...state.apiResponses, getFormattedResponse(actionType, payload)]
            }
        }

        case `${LOGIN_USER}_FETCHING`: {
            return {
                ...state, user: {
                    ...state.user, logInApiFetching: true,
                }
            };
        }

        case `${LOGIN_USER}_SUCCESS`: {
            localStorage.setItem("token", payload.data.token);
            return {
                ...state, user: {
                    ...state.user, logInApiFetching: false, isLogIn: true, ...payload.data
                }
            }
        }

        case `${LOGIN_USER}_FAILED` : {
            return {
                ...state, user: {
                    ...state.user, logInApiFetching: false, isLogIn: false,
                }
            }
        }

        case `${APPLY_TO_LEAVE}_FETCHING`: {
            return state;
        }

        case `${APPLY_TO_LEAVE}_SUCCESS`: {
            return state;
        }

        case `${APPLY_TO_LEAVE}_FAILED` : {
            return state;
        }

        case `${GET_USER_INFO}_FETCHING`: {
            return {
                ...state, user: {
                    ...state.user, fetchingUserInformation: true,
                }
            };
        }

        case `${GET_USER_INFO}_SUCCESS`: {
            return {
                ...state, user: {
                    ...state.user, fetchingUserInformation: false, haveUserInfo: true, ...payload.data
                }
            }
        }

        case `${GET_USER_INFO}_FAILED` : {
            localStorage.removeItem("token");
            return JSON.parse(JSON.stringify(rootState));
        }

        case `${UPLOAD_IMAGE_PROFILE}_SUCCESS`: {
            return {
                ...state,
                pageData: {
                    ...state.pageData,
                    profile: {
                        ...payload
                    }
                }
            }
        }

        case `${UPDATE_PROFILE}_SUCCESS`: {
            return {
                ...state,
                user: {
                    ...state.user,
                    ...payload.data,
                }
            }
        }

        case `${GET_LEAVE_LIST}_FETCHING`: {
            return {
                ...state, pageData: {
                    ...state.pageData, leave: {
                        ...state.pageData.leave, leaveListTableDataFetching: true,
                    }
                }
            };
        }

        case `${GET_LEAVE_LIST}_SUCCESS`: {
            return {
                ...state, pageData: {
                    ...state.pageData, leave: {
                        ...state.pageData.leave, leaveListTableDataFetching: false, data: payload.data,
                    }
                }
            };
        }

        case `${GET_LEAVE_LIST}_FAILED` : {
            return {
                ...state, pageData: {
                    ...state.pageData, leave: {
                        ...state.pageData.leave, leaveListTableDataFetching: false
                    }
                }
            };
        }

        case `${GET_LEAVE_INFO}_FETCHING`: {
            return {
                ...state, pageData: {
                    ...state.pageData, leave: {
                        ...state.pageData.leave, specificLeaveInfoFetching: true,
                    }
                }
            };
        }

        case `${GET_LEAVE_INFO}_SUCCESS`: {
            return {
                ...state, pageData: {
                    ...state.pageData, leave: {
                        ...state.pageData.leave,
                        specificLeaveInfoFetching: false,
                        specificLeaveInfo: payload.data[0] || {},
                    }
                }
            };
        }

        case `${GET_LEAVE_INFO}_FAILED` : {
            return {
                ...state, pageData: {
                    ...state.pageData, leave: {
                        ...state.pageData.leave, specificLeaveInfoFetching: false
                    }
                }
            };
        }

        case `${LOGOUT_USER}_FETCHING`: {
            return {
                ...state, user: {
                    ...state.user, logOutApiFetching: true,
                }
            };
        }

        case `${LOGOUT_USER}_SUCCESS`: {
            localStorage.removeItem("token");
            return JSON.parse(JSON.stringify(rootState));
        }

        case `${LOGOUT_USER}_FAILED` : {
            return {
                ...state, user: {
                    ...state.user, logOutApiFetching: false,
                }
            }
        }

        case `${LOADER_START}`: {
            return {
                ...state, loader: {
                    ...state.loader, status: true
                }
            }
        }

        case `${LOADER_END}`: {
            return {
                ...state, loader: {
                    ...state.loader, status: false
                }
            }
        }

        default : {
            return state;
        }
    }
};

export default reducer;