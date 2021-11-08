import React from "react";
import {commonTransition} from "../../HelperFunction";

const DefaultMainContainer = () => {
    return <main style={{width:`100px`,height:`200px`,...(commonTransition(`width`))}}>
    </main>;

    // return <Box sx={{
    //     position: `absolute`,
    //     width:`100vw`,
    //     height:`100vh`,
    //     maxWidth : `calc(100vw - ${drawerWidth}px)`,
    //     maxHeight : `calc(100vh - ${appBarHeight}px)`,
    //     bottom : `0px`,
    //     right : `0px`
    // }}>
    // </Box>;
};
export default DefaultMainContainer;