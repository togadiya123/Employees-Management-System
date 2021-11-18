import React, {useEffect, useState} from "react";
import { Stack } from '@mui/material';

import DefaultHeader from "./defaultHeader";
import DefaultDrawer from "./defaultDrawer";
import DefaultMainContainer from "./defaultMainContainer";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../../../Store/actions/action";

const DefaultLayout = ({history}) => {

    const [drawerStatus, setDrawerStatus] = useState({
        isOpen: false,
        isNarrow: false,
    });

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        !user.isLogIn && history.replace('/');
    }, [user,history]);

    useEffect(() => {
        dispatch(getUserInfo());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <React.Fragment>
        <Stack sx={{height:`100vh`}}>
            <DefaultHeader setDrawerStatus={setDrawerStatus}/>
            <Stack sx={{flex:'auto'}} direction={`row`}>
                <DefaultDrawer drawerStatus={drawerStatus} setDrawerStatus={setDrawerStatus}/>
                <DefaultMainContainer/>
            </Stack>
        </Stack>
    </React.Fragment>;
};

export default DefaultLayout;