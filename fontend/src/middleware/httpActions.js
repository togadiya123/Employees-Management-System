import axios from "axios";

const httpActions = () => next => async action => {
    const {
        method = "GET",
        url,
        entity,
        headers,
        actionType,
        body,
    } = action;

    const authKey = JSON.parse(localStorage.getItem("LOGIN"));

    if (entity === `httpAction`) {
        next({
            type: `${actionType}_FETCHING`,
            payload: {},
        });
        const baseURL = process.env.BACKEND_BASE_API_URL;
        const accessAndContentHeader = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        };
        try {
            const response = await axios({
                url,
                headers: {
                    Authorization: authKey['AUTH'] || '',
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