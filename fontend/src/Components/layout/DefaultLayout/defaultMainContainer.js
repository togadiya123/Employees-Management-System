import React from "react";
import {Container, Stack} from '@mui/material';

import {commonTransition} from "../../../HelperFunction";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import Footer from "../../CommonComponents/Footer";

const DefaultMainContainer = ({history}) => {
    return <Stack component={`main`} sx={{height: `100%`, width: `100%`, ...(commonTransition(`width`))}}>
        <Breadcrumb history={history}/>
        <Container sx={{flex: `auto`, display: `flex`}}>

        </Container>
        <Footer/>
    </Stack>;
};
export default DefaultMainContainer;