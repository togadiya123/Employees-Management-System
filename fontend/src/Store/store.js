import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import reducer from "./reducers/reducer";
import httpActions from "./middleware/httpActions";
import firebaseAction from "./middleware/firebaseAction";


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, firebaseAction, httpActions))
);

export default store;