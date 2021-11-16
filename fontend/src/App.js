import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import store from "./Store/store";
import login from "./Components/View/Login";
import resetPassword from "./Components/View/ForgotPassword";
import {DefaultLayout} from "./Components/layout";
import 'react-toastify/dist/ReactToastify.css';

const SignInRoute = ({ component: Component }) => (
    <Route
        render={(props) =>
            localStorage.getItem("token") ? (
                <Redirect to="/dashboard" />
            ) : (
                <Component {...props} />
            )
        }
    />
);

const RestRoute = ({ component: Component }) => (
    <Route
        render={(props) =>
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/resetPassword" name="Reset Password" component={resetPassword}/>
                    <SignInRoute exact path="/login" name="Login" component={login}/>
                    <RestRoute path="/" name="Home" component={DefaultLayout}/>
                </Switch>
            </BrowserRouter>
            <ToastContainer position={"bottom-right"} autoClose={5000} limit={4}/>
        </Provider>
    );
};

export default App;
