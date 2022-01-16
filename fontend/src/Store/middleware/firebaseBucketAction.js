import { getApp,initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseBucketAction = e => next =>async action => {

    const {
        method = "GET",
        toasterString,
        url,
        isHttpAction,
        isFirebaseBucketAction,
        headers,
        type,
        body,
    } = action;

    if (isFirebaseBucketAction) {

        // const firebaseConfig = {
        //     apiKey: 'AIzaSyCPY00eOb4Gi-Tti9BJ_CW6vyH5gLMkjjo',
        //     // authDomain: '<your-auth-domain>',
        //     // databaseURL: '<your-database-url>',
        //     storageBucket: 'gs://employee-management-system-b67.appspot.com/'
        // }

        // const initializeAppData = initializeApp(firebaseConfig)
        // const firebaseApp = getApp();
        // const storage = getStorage();

        // console.log({storage});

        next(action)

    } else {
        next(action)
    }

    return e.getState();
};


export default firebaseBucketAction;