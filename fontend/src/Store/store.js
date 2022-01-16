import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import reducer from "./reducers/reducer";
import httpActions from "./middleware/httpActions";
import firebaseBucketAction from "./middleware/firebaseBucketAction";


const store = createStore(
    reducer,
    // composeWithDevTools(applyMiddleware(ReduxThunk, firebaseBucketAction, httpActions))
    composeWithDevTools(applyMiddleware(ReduxThunk, httpActions))
);

export default store;