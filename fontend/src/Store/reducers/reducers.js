import rootState from "./rootState";

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
        default : {
            return state;
        }
    }
}

export default reducer;