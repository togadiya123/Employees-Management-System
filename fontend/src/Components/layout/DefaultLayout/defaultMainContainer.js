import React from "react";
import {Container} from '@mui/material';

import {commonTransition} from "../../../HelperFunction";

const DefaultMainContainer = () => {
    return <Container component={`main`} sx={{height: `100%`, ...(commonTransition(`width`))}}>

    </Container>;
};
export default DefaultMainContainer;