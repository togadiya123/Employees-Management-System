import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import store from "./Store/store";
import login from "./View/login";
import resetPassword from "./View/resetPassword";
import {defaultLayout} from "./layout";

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
                    <RestRoute path="/" name="Home" component={defaultLayout}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
