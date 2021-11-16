import React, {useEffect, useState} from "react";

import DefaultHeader from "./defaultHeader";
import DefaultDrawer from "./defaultDrawer";
import DefaultMainContainer from "./defaultMainContainer";
import {useDispatch} from "react-redux";
import {getUserInfo} from "../../../Store/actions/action";

const DefaultLayout = () => {

    const [drawerStatus, setDrawerStatus] = useState({
        isOpen: false,
        isNarrow: false,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
    }, []);

    return <React.Fragment>
        <div className={`flex flexDirectionColumn`}>
            <DefaultHeader setDrawerStatus={setDrawerStatus}/>
            <div className={`flex`}>
                <DefaultDrawer drawerStatus={drawerStatus} setDrawerStatus={setDrawerStatus}/>
                <DefaultMainContainer/>
            </div>
        </div>
    </React.Fragment>;
};

export default DefaultLayout;