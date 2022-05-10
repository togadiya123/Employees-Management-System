import fireBaseBucketAction from "./utils/fireBaseBucketAction";
import firebaseRealTimeDataBaseAction from "./utils/firebaseRealTimeDataBaseAction";

const firebaseAction = e => next => async action => {

    const {
        isFirebaseBucketAction,
        isFirebaseRealTimeDataBaseAction,
    } = action;

    if (isFirebaseBucketAction) {

        await fireBaseBucketAction({...action, next});

    } else if (isFirebaseRealTimeDataBaseAction) {

        await firebaseRealTimeDataBaseAction({...action, next});

    } else {
        await next(action)
    }

    return e.getState();
};


export default firebaseAction;