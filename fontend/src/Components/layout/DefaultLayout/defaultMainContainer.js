import React from "react";
import {commonTransition} from "../../../HelperFunction";

const DefaultMainContainer = () => {
    return <main style={{width:`100%`,height:`100%`,...(commonTransition(`width`))}}>
    </main>;
};
export default DefaultMainContainer;