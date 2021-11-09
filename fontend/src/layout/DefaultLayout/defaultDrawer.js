import React from "react";
import {Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText,Toolbar} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import {DRAWER_LIST_ITEM} from "../../HelperFunction/staticList";
import {commonTransition} from "../../HelperFunction";

const DefaultDrawer = ({drawerStatus, setDrawerStatus}) => {

    const drawerStatusSetHandler = () => {
        setDrawerStatus(drawerStatus => ({...drawerStatus, isNarrow: !drawerStatus.isNarrow}));
    };

    return <Drawer id={"Drawer"} open={drawerStatus.isOpen} anchor={"left"} onClose={() => {
    }} variant="persistent" sx={{
        // display: `inline-block`,
        // height: {xs: `calc(100vh - 56px)`, sm: `calc(100vh - 64px)`},
        width: (theme) => drawerStatus.isOpen ? drawerStatus.isNarrow ? `calc(${theme.spacing(8.6)})` : `200px` : `0`,
        ...(commonTransition(`width`)),
        "& .MuiDrawer-paper": {
            ...(commonTransition(`transform, width`)),
            width: (theme) => drawerStatus.isNarrow ? `calc(${theme.spacing(8.6)})` : `200px`,
            // width: `100%`,
            // top: (theme) => {console.log(theme); return 0},
            overflowX: `hidden`,
            // position: `unset`,
            // display: `inline-block`,
        },
    }}>
        <Toolbar/>
        <Box>
            <List>
                {DRAWER_LIST_ITEM.map(eachListItem => <ListItem key={eachListItem.key} button={eachListItem.isButton}
                                                                sx={{padding: "10px 22px"}}>
                        <ListItemIcon sx={{minWidth: "46px"}}>{eachListItem.icon}</ListItemIcon>
                        <ListItemText primary={eachListItem.textValue}/>
                    </ListItem>
                )}
            </List>
            <List sx={{
                padding: 0,
                position: `absolute`,
                bottom: 0,
                right: 0,
                overflow: `hidden`
            }}>
                <ListItem sx={{padding: 0}} button={false}>
                    <IconButton sx={{
                        margin: `5px 10px`,
                        transform: `rotate(${drawerStatus.isNarrow ? 540 : 720}deg)`,
                        transitionProperty: `transform !important`,
                        transitionDuration: "225ms !important",
                        transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1.0) !important`,
                        transitionDelay: `0ms !important`,
                    }} size={`large`} onClick={drawerStatusSetHandler}>
                        <ArrowBackIosNewIcon/>
                    </IconButton>
                </ListItem>
            </List>
        </Box>
    </Drawer>;
};
export default DefaultDrawer;