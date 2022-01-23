import {initializeApp} from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {API_RESPONSES, LOADER_END, LOADER_START} from "../actions/actionType";
import {toast} from "react-toastify";

const firebaseBucketAction = e => next => async action => {

    const defaultToasterOptions = {
        isLoading: false,
        autoClose: 4000,
        closeButton: true,
    };

    const {
        type,
        isFirebaseBucketAction,
        toasterString,
        path,
        body,
    } = action;

    if (isFirebaseBucketAction) {

        next({
            type: `${LOADER_START}`,
            payload: {}
        });
        let toasterId;
        toasterString && (toasterId = await toast.loading(toasterString || `Waiting for Response`));
        next({
            type: `${type}_FETCHING`,
            payload: {},
        });

        const firebaseConfig = {
            apiKey: "AIzaSyCPY00eOb4Gi-Tti9BJ_CW6vyH5gLMkjjo",
            authDomain: "employee-management-system-b67.firebaseapp.com",
            projectId: "employee-management-system-b67",
            storageBucket: "employee-management-system-b67.appspot.com",
            messagingSenderId: "576094404869",
            appId: "1:576094404869:web:9c2966f426982974f6b76c",
            measurementId: "G-V17SWQVZYM"
        };

        await initializeApp(firebaseConfig);
        const storage = await getStorage();

        try {
            const storageReference = ref(storage, `${path || `common`}/${body.fileObj.name}`);
            await uploadBytes(storageReference, body.fileObj).then(async (uploadResult) => {
                const fileUrl = await getDownloadURL(ref(storage, uploadResult.metadata.fullPath))

                next({
                    type: `${type}_SUCCESS`,
                    payload: {
                        fileUrl,
                        uploadResult
                    }
                });
                next({
                    type: API_RESPONSES,
                    payload: {
                        fileUrl,
                        uploadResult
                    },
                    actionType: `${type}_SUCCESS`,
                });
                if (toasterId) await toast.update(toasterId, {
                    type: 'success',
                    render: `File uploaded successfully.` || `Success`, ...defaultToasterOptions
                });

            })
        } catch (e) {
            console.log("Get error in the firebaseBucket : ", e)

            next({
                type: `${type}_FAILED`,
                payload: {message: e?.response?.data?.message, e}
            });
            next({
                type: API_RESPONSES,
                payload: {message: e?.response?.data, e},
                actionType: `${type}_FAILED`,
            })
            if (toasterId) await toast.update(toasterId, {
                type: 'error',
                render: e?.response?.data?.message || `Something going wrong !`,
                ...defaultToasterOptions,
            });
        }

        next({
            type: `${LOADER_END}`,
            payload: {}
        });

    } else {
        next(action)
    }

    return e.getState();
};


export default firebaseBucketAction;