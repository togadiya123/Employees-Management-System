import axios from "axios";
import config from "../config";

const httpActions = () => next => async action => {
    const {
        method = "GET",
        url,
        isHttpAction,
        headers,
        actionType,
        body,
    } = action;

    const authKey = JSON.parse(localStorage.getItem("LOGIN"));

    if (isHttpAction) {
        next({
            type: `${actionType}_FETCHING`,
            payload: {},
        });
        const baseURL = config.BACKEND_BASE_API_URL;
        console.log(baseURL, "baseURL");
        const accessAndContentHeader = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            'Access-Control-Allow-Methods': 'POST, GET',
        };
        try {
            const response = await axios({
                url,
                headers: {
                    Authorization: (authKey && authKey['AUTH']) || '',
                    ...accessAndContentHeader,
                    ...headers,
                },
                baseURL,
                data: body,
                method,
            });
            const {data} = response;
            next({
                type: `${actionType}_SUCCESS`,
                payload: data,
            })
        } catch (e) {
            const {message} = e;
            console.log(e);
            next({
                type: `${actionType}_FAILED`,
                payload: {message, e},
            });
        }
    } else {
        next(action);
    }
};

export default httpActions;