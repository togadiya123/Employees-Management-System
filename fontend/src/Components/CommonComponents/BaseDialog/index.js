import React from "react";
import {
    Dialog, DialogTitle, IconButton, DialogContent, DialogActions, Slide, Stack, Typography
} from "@mui/material";

import {HighlightOffIcon} from "../../../HelperFunction/icons";


const BaseDialog = ({open, onClose, header, body, action}) => {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} children={props?.children} {...props} />;
    });

    return (<Dialog
            open={open}
            sx={{
                '.MuiDialog-paper': {
                    borderRadius: 2
                }
            }}
            TransitionComponent={Transition}
            keepMounted
        >
            <DialogTitle>
                <Stack direction={`row`} justifyContent={`space-between`} gap={1}>
                    <Typography variant={`inherit`} sx={{display: `flex`, alignItems: `center`}} fontWeight={550}>
                        {header}
                    </Typography>
                    {onClose &&
                        <IconButton onClick={onClose} color={`error`} sx={{display: `flex`, alignItems: `center`}}>
                            <HighlightOffIcon/>
                        </IconButton>}
                </Stack>
            </DialogTitle>
            <DialogContent>
                {body}
            </DialogContent>
            <DialogActions>
                {action}
            </DialogActions>
        </Dialog>);
};
export default BaseDialog