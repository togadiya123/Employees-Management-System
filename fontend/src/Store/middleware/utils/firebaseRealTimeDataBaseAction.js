import {getDatabase, ref,onValue} from "firebase/database";
import {toast} from "react-toastify";

import {API_RESPONSES, LOADER_END, LOADER_START} from "../../actions/actionType";

const FirebaseRealTimeDataBaseAction = async ({next, toasterString, collectionName, loader, type}) => {

    const defaultToasterOptions = {
        autoClose: 4000,
        isLoading: false,
        closeButton: true,
    };

    if (loader !== false)
        await next({
            type: `${LOADER_START}`,
            payload: {}
        });

    let toasterId;
    if (toasterString) toasterId = await toast.loading(toasterString || `Waiting for Response`);

    await next({
        type: `${type}_FETCHING`,
        payload: {},
    });

    try {
        const database = await getDatabase();
        const d = await ref(database, collectionName);

        onValue(d, (snapshot) => {
            console.log(snapshot);
            snapshot.forEach((childSnapshot) => {
                // const childKey = childSnapshot.key;
                // const childData = childSnapshot.val();
                // ...

                console.log(childSnapshot);
            });
        }, {
            onlyOnce: true
        });

        console.log({database, d})


        if (toasterId) await toast.update(toasterId, {
            type: 'success',
            render: `File uploaded successfully.` || `Success`, ...defaultToasterOptions
        });

    } catch (e) {

        console.log("Get error in the firebaseRealTimeDataBase : ", e);

        await next({
            type: `${type}_FAILED`,
            payload: {message: e?.response?.data?.message, e}
        });
        await next({
            type: API_RESPONSES,
            actionType: `${type}_FAILED`,
            payload: {message: e?.response?.data, e},
        })

        if (toasterId) await toast.update(toasterId, {
            type: 'error',
            render: e?.response?.data?.message || `Something going wrong !`,
            ...defaultToasterOptions,
        });
    }

    if (loader !== false)
        await next({
            type: `${LOADER_END}`,
            payload: {}
        });
}

export default FirebaseRealTimeDataBaseAction;