import React from "react";
import {Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import {DRAWER_LIST_ITEM} from "../../HelperFunction/staticList";

const DefaultDrawer = ({drawerStatus, setDrawerStatus}) => {

    const drawerStatusSetHandler = () => {
        setDrawerStatus(drawerStatus => ({...drawerStatus, isNarrow: !drawerStatus.isNarrow}));
    };

    return <Drawer id={"Drawer"} open={drawerStatus.isOpen} anchor={"left"} onClose={() => {
    }} variant="persistent" sx={{
        "& .MuiDrawer-paper": {
            transitionProperty: `transform, width !important`,
            transitionDuration: "225ms !important",
            transitionTimingFunction: `cubic-bezier(0, 0, 0.2, 1) !important`,
            transitionDelay: `0ms !important`,
            width: (theme) => drawerStatus.isNarrow ? `calc(${theme.spacing(8.6)})` : `200px`,
            overflowX: `hidden`
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
            <IconButton sx={{
                position: `absolute`,
                bottom: 0,
                right: 0,
                margin: `10px`,
                transform: `rotate(${drawerStatus.isNarrow?540:720}deg)`,
                transitionProperty: `transform, width !important`,
                transitionDuration: "225ms !important",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1.0) !important`,
                transitionDelay: `0ms !important`,
            }} size={`large`}
                        onClick={drawerStatusSetHandler}>
                <ArrowBackIosNewIcon/>
            </IconButton>
        </Box>
    </Drawer>;
};
export default DefaultDrawer;