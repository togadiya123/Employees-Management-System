import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import {ForgotPassword, Login} from "./Components/View";
import {DefaultLayout} from "./Components/layout";
import Loader from "./Components/CommonComponents/Loader/Loader";

const SignInRoute = ({component: Component}) => (
    <Route
        render={(props) =>
            localStorage.getItem("token") ? (
                <Redirect to="/dashboard"/>
            ) : (
                <Component {...props} />
            )
        }
    />
);

const RestRoute = ({component: Component}) => (
    <Route
        render={(props) =>
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login"/>
            )
        }
    />
);

const App = () => {
    return <React.Fragment>
        <BrowserRouter>
            <Switch>
                <Route exact path="/resetPassword" name="Reset Password" component={ForgotPassword}/>
                <SignInRoute exact path="/login" name="Login" component={Login}/>
                <RestRoute component={DefaultLayout}/>
            </Switch>
        </BrowserRouter>
        <Loader/>
        <ToastContainer position={"bottom-right"} autoClose={5000} limit={4}/>
    </React.Fragment>;
};

export default App;
