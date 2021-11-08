import React, {useState} from "react";

import DefaultHeader from "./defaultHeader";
import DefaultDrawer from "./defaultDrawer";
import DefaultMainContainer from "./defaultMainContainer";

const DefaultLayout = () => {

    const [drawerStatus, setDrawerStatus] = useState({
        isOpen: false,
        isNarrow: false,
        drawerWidth: 0,
        drawerHeight: 0,
        appBarWidth: 0,
        appBarHeight: 0,
    });

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