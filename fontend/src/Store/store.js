import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import reducer from "./reducers/reducers";
import httpActions from "../middleware/httpActions";


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, httpActions))
);

export default store;