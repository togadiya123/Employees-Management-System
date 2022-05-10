import {getDownloadURL, ref, getStorage, uploadBytes} from "firebase/storage";
import {toast} from "react-toastify";

import {API_RESPONSES, LOADER_END, LOADER_START} from "../../actions/actionType";

const FireBaseBucketAction = async ({next, toasterString, path, body, type}) => {

    const defaultToasterOptions = {
        isLoading: false,
        autoClose: 4000,
        closeButton: true,
    };

    await next({
        type: `${LOADER_START}`,
        payload: {}
    });

    let toasterId;
    toasterString && (toasterId = await toast.loading(toasterString || `Waiting for Response`));
    await next({
        type: `${type}_FETCHING`,
        payload: {},
    });

    try {
        const storage = await getStorage();
        const storageReference = ref(storage, `${path || `common`}/${body.fileObj.name}`);
        await uploadBytes(storageReference, body.fileObj).then(async (uploadResult) => {
            const fileUrl = await getDownloadURL(ref(storage, uploadResult.metadata.fullPath))

            await next({
                type: `${type}_SUCCESS`,
                payload: {
                    fileUrl,
                    uploadResult
                }
            });
            await next({
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

        await next({
            type: `${type}_FAILED`,
            payload: {message: e?.response?.data?.message, e}
        });
        await next({
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

    await next({
        type: `${LOADER_END}`,
        payload: {}
    });
}

export default FireBaseBucketAction;