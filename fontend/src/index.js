import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from './App';
import store from "./Store/store";
import './index.css';

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

if(navigator.serviceWorker){
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`).then(()=>{
        // console.log('SW registration');
    }).catch(()=>{
        console.log(`Error : Something going wrong in serviceWorker !`);
    })
}