import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseBucketAction = e => next => async action => {

    const {
        isFirebaseBucketAction,
        body,
    } = action;

    if (isFirebaseBucketAction) {

        const firebaseConfig = {
            apiKey: "AIzaSyCPY00eOb4Gi-Tti9BJ_CW6vyH5gLMkjjo",
            authDomain: "employee-management-system-b67.firebaseapp.com",
            projectId: "employee-management-system-b67",
            storageBucket: "employee-management-system-b67.appspot.com",
            messagingSenderId: "576094404869",
            appId: "1:576094404869:web:9c2966f426982974f6b76c",
            measurementId: "G-V17SWQVZYM"
        };

        initializeApp(firebaseConfig);
        const storage = getStorage()

        try {
            const action = storage.ref(`profile/${body.useId || `common`}/${body.fileObj.name}`).put(body.fileObj);
            action.on(
                "upload profile picture",
                () => {
                },
                error => {
                    console.log(error)
                },
                response =>{
                    console.log(response)
                }
            );
        } catch (e) {
            console.log("Get error in the firebaseBucket : ", e)
        }

        await next(action)

    } else {
        await next(action)
    }

    return e.getState();
};


export default firebaseBucketAction;