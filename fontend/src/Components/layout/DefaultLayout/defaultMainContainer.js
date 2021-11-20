import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Container, Stack} from '@mui/material';

import {commonTransition} from "../../../HelperFunction";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import Footer from "../../CommonComponents/Footer";

const DefaultMainContainer = ({routeList, history}) => {
    return <Stack component={`main`} sx={{height: `100%`, width: `100%`, ...(commonTransition(`width`))}}>
        <Breadcrumb history={history}/>
        <Container sx={{flex: `auto`, display: `flex`}}>
            <Switch>
                {
                    routeList.map(({key, route, exact, textValue, component}) => <Route key={key}
                                                                                        path={route}
                                                                                        exact={exact}
                                                                                        name={textValue}
                                                                                        component={component}/>)
                }
                <Redirect from="/" to="/dashboard"/>
            </Switch>
        </Container>
        <Footer/>
    </Stack>;
};
export default DefaultMainContainer;