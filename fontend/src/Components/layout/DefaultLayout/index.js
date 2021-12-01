import React, {useEffect, useState} from "react";
import {Stack} from '@mui/material';

import DefaultHeader from "./defaultHeader";
import DefaultDrawer from "./defaultDrawer";
import DefaultMainContainer from "./defaultMainContainer";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../../../Store/actions/action";
import {ROUTE_LIST} from "../../../HelperFunction/staticList";
import config from "../../../config";

const DefaultLayout = ({history}) => {

    const [drawerStatus, setDrawerStatus] = useState({
        isOpen: false,
        isNarrow: false,
    });
    const [routeList, setRouteList] = useState([]);

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const getRoutes = (routeList) => routeList.map(eachListItem => {
        const isDisplay = (user.positionType === config.POSITION_TYPE_I && eachListItem.haveAdminView) || (user.positionType === config.POSITION_TYPE_II && eachListItem.haveUserView);
        Array.isArray(eachListItem.subRoute) && eachListItem.subRoute.length > 0 && (eachListItem.subRoute = getRoutes(eachListItem.subRoute));
        return isDisplay ? eachListItem : undefined
    }).filter(eachListItem => undefined !== eachListItem);

    useEffect(() => {
        !localStorage.getItem('token') && history.replace('/');
        user.haveUserInfo && setRouteList(() => getRoutes(ROUTE_LIST()));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, history]);

    useEffect(() => {
        dispatch(getUserInfo());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <React.Fragment>
        {routeList.length ? <Stack sx={{height: `100vh`}}>
            <DefaultHeader setDrawerStatus={setDrawerStatus}/>
            <Stack sx={{flex: 'auto',overflow:`auto`}}
                   direction={`row`}>
                <DefaultDrawer routeList={routeList}
                               drawerStatus={drawerStatus}
                               setDrawerStatus={setDrawerStatus}
                               history={history}/>
                <DefaultMainContainer routeList={routeList}
                                      history={history}/>
            </Stack>
        </Stack> : <></>}
    </React.Fragment>;
};

export default DefaultLayout;