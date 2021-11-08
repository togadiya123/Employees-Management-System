import React, {useState} from "react";
import DefaultHeader from "./defaultHeader";
import DefaultDrawer from "./defaultDrawer";
import {Box} from "@mui/material";

const DefaultLayout = () => {

    const [drawerStatus, setDrawerStatus] = useState({isOpen: false, isNarrow: false,width: 0});

    // const setDrawerWidth = () => {
    //     const drawerWidth = document.getElementById("Drawer")?.childNodes[0]?.offsetWidth;
    // };

    return <Box sx={{display: 'flex'}}>
        <DefaultHeader setDrawerStatus={setDrawerStatus}/>
        <DefaultDrawer drawerStatus={drawerStatus} setDrawerStatus={setDrawerStatus}/>
    </Box>;
};

export default DefaultLayout;