import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Container, Stack} from '@mui/material';

import {commonTransition} from "../../../HelperFunction";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import Footer from "../../CommonComponents/Footer";

const DefaultMainContainer = ({routeList, history}) => {

    const formatRouteList = (routeList) => {
        const generateList = (list, newList) => {
            list.forEach(eachListItem => {
                    newList.push(eachListItem);
                    Array.isArray(eachListItem.subRoute) && eachListItem.subRoute.length && generateList(eachListItem.subRoute, newList)
                }
            );
        };
        const list = [];
        generateList(routeList, list);
        return list;
    };

    return <Stack component={`main`}
                  sx={{height: `100%`, width: `100%`, overflowY: `auto`, ...(commonTransition(`width`))}}>
        <Breadcrumb history={history}/>
        <Container sx={{flex: `auto`, display: `flex`, py: {xs: 0, sm: 3}, px: {xs: 0, sm: 3}}}>
            <Switch>
                {
                    formatRouteList(routeList).map(({key, route, exact, textValue, component}) => <Route key={key}
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