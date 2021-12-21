import React, {useState} from "react";
import {Stack} from "@mui/material";
import {getLeaveInformationModalBodyFormData} from "./utiles";
import Form from "../../CommonComponents/Form";

const LeaveInformationModalBody = ({data}) => {

    const [LeaveInformationFormData, setLeaveInformationFormData] = useState(getLeaveInformationModalBodyFormData(data))

    return (
        <Stack>
            <Stack sx={{overflowX : `auto`}}>
                <Form
                    formDesign={LeaveInformationFormData}
                    onClick={() => {
                    }}
                    onBlur={() => {
                    }}
                    onChange={() => {
                    }}
                    onFocus={() => {
                    }}
                />
            </Stack>
            <Stack>

            </Stack>
        </Stack>
    );
};

export default LeaveInformationModalBody;