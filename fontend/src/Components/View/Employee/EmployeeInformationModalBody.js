import React from "react";
import {Stack} from "@mui/material";

import FromGrid from "../../CommonComponents/FromGrid";
import {GET_EMPLOYEE_FORM_DATA} from "./utiles";

const EmployeeInformationModalBody = ({data}) => {

    return (
        <React.Fragment>
            <Stack gap={1}>
                <Stack sx={{overflowX: `auto`}}>
                    <FromGrid formData={GET_EMPLOYEE_FORM_DATA(data)}
                    />
                </Stack>
            </Stack>
        </React.Fragment>
    );
};

export default EmployeeInformationModalBody;