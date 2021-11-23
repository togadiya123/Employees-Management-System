import axios from "axios";
import config from "../../config";
import {toast} from "react-toastify";
import {LOADER_END, LOADER_START} from "../actions/actionType";

const defaultToasterOptions = {
    isLoading: false,
    autoClose: 4000,
    closeButton: true,
};

const httpActions = () => next => async action => {
    const {
        method = "GET",
        toasterString,
        url,
        isHttpAction,
        headers,
        actionType,
        body,
    } = action;
    const authKey = localStorage.getItem("token");

    next({
        type : `${LOADER_START}`,
        payload : {}
    });

    if (isHttpAction) {
        let toasterId;
        toasterString && (toasterId = await toast.loading(toasterString || `Waiting for Response`));
        next({
            type: `${actionType}_FETCHING`,
            payload: {},
        });
        const baseURL = config.BACKEND_BASE_API_URL;
        const accessAndContentHeader = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            'Access-Control-Allow-Methods': 'POST, GET',
        };
        try {
            const response = await axios({
                url,
                headers: {
                    Authorization: authKey || '',
                    ...accessAndContentHeader,
                    ...headers,
                },
                baseURL,
                data: body,
                method,
            });
            const {data} = response;
            toasterId && await toast.update(toasterId, {type: 'success', render: data.message || `Success`, ...defaultToasterOptions});
            next({
                type: `${actionType}_SUCCESS`,
                payload: data,
            })
        } catch (e) {
            const {response: {data: {message}}} = e;
            console.log('Error : got in https action\n', e, e.response);
            toasterId && await toast.update(toasterId, {
                type: 'error',
                render: message || `Something going wrong !`,
                ...defaultToasterOptions,
            });
            next({
                type: `${actionType}_FAILED`,
                payload: {message, e},
            });
        }
    } else {
        next(action);
    }

    next({
        type : `${LOADER_END}`,
        payload : {}
    });
};

export default httpActions;