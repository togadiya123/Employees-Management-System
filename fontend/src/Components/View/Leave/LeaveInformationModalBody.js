import React, {useState} from "react";
import {useSelector} from "react-redux";

import {Button, Stack} from "@mui/material";
import {actionButton, getLeaveInformationModalBodyFormData} from "./utiles";
import Form from "../../CommonComponents/Form";

const LeaveInformationModalBody = ({data}) => {

    const [LeaveInformationFormData, setLeaveInformationFormData] = useState(getLeaveInformationModalBodyFormData(data))
    const userType = useSelector(store => store.user.positionType);

    const onCancelHandler = () => {
        setLeaveInformationFormData([])
    };
    const onEditHandler = () => {

    };
    const onRejectHandler = () => {

    };
    const onApproveHandler = () => {

    };

    return (
        <Stack gap={1}>
            <Stack sx={{overflowX: `auto`}}>
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
            <Stack direction={`row`} gap={2} paddingX={3}>
                {
                    actionButton({
                        ...data,
                        userType,
                        onCancelHandler,
                        onEditHandler,
                        onRejectHandler,
                        onApproveHandler
                    }).filter(eachButton => eachButton.showAbleValidation).map(({id, label, color, icon}) => <Button
                            id={id}
                            key={id}
                            startIcon={icon}
                            variant={`contained`}
                            color={color}
                            sx={{flex: 1}}>
                            {label}
                        </Button>
                    )
                }
            </Stack>
        </Stack>
    );
};

export default LeaveInformationModalBody;