import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Stack} from "@mui/material";

import {
    actionButton, checkChangedDataValue,
    getLeaveInformationModalBodyFormData,
    minAndMaxDateSet,
    setLeaveModalDataToEditForm,
} from "./utiles";
import Form from "../../CommonComponents/Form";
import {
    commonBlurHandler,
    commonChangeHandler,
} from "../../CommonComponents/Form/utiles";
import {toast} from "react-toastify";

const LeaveInformationModalBody = ({data}) => {

    const [LeaveInformationFormData, setLeaveInformationFormData] = useState(getLeaveInformationModalBodyFormData(data))
    const [leaveModal, setLeaveModal] = useState({mode: ``,});
    const dispatch = useDispatch();
    const userType = useSelector(store => store.user.positionType);

    const onChangeHandler = (e) => commonChangeHandler(LeaveInformationFormData, setLeaveInformationFormData, e, ``, (formData, id) => {
        if (id === `startingDate-input`) formData = minAndMaxDateSet(formData);
        if (id === `endingDate-input`) formData = minAndMaxDateSet(formData);
        setLeaveModal(e => JSON.parse(JSON.stringify({
            ...e, changedValue: checkChangedDataValue(formData, data)
        })))
        return formData;
    });
    const onBlurHandler = (e) => commonBlurHandler(LeaveInformationFormData, setLeaveInformationFormData, e, ``);

    const onCancelHandler = () => {

    };

    const onEditHandler = (event) => {
        setLeaveModal((e) => ({...e, mode: event.target.id}));
        setLeaveInformationFormData((data) => setLeaveModalDataToEditForm(data))
    };
    const onEditCancelHandler = () => {
        setLeaveInformationFormData(getLeaveInformationModalBodyFormData(data));
        setLeaveModal((e) => ({...e, mode: ``}));
    }
    const onEditSaveHandler = (e) => {
        if (leaveModal.changedValue && leaveModal.changedValue.isChanged && leaveModal.changedValue.changedValue.length) {
            setLeaveInformationFormData(getLeaveInformationModalBodyFormData(data));
            setLeaveModal((e) => ({...e, mode: ``}));
        } else
            toast.info(`First you required some changes on leave application`);
    }

    const onRejectHandler = () => {

    };
    const onApproveHandler = () => {

    };

    return (
        <Stack gap={1}>
            <Stack sx={{overflowX: `auto`}}>
                <Form
                    formDesign={LeaveInformationFormData}
                    onBlur={onBlurHandler}
                    onChange={onChangeHandler}
                />
            </Stack>
            <Stack>
            </Stack>
            <Stack direction={`row`} gap={2} paddingX={3}>
                {
                    actionButton({
                        ...data,
                        openActionMode: leaveModal.mode || ``,
                        userType,
                        onCancelHandler,
                        onEditHandler,
                        onEditCancelHandler,
                        onEditSaveHandler,
                        onRejectHandler,
                        onApproveHandler
                    }).filter(eachButton => eachButton.showAbleValidation).map(({id, label, color, icon, onClick}) =>
                        <Button
                            id={id}
                            key={id}
                            startIcon={icon}
                            variant={`contained`}
                            color={color}
                            sx={{flex: 1}}
                            onClick={onClick}
                        >
                            {label}
                        </Button>
                    )
                }
            </Stack>
        </Stack>
    );
};

export default LeaveInformationModalBody;