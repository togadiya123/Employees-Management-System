import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {Button, Stack} from "@mui/material";

import BaseDialog from "../../CommonComponents/BaseDialog";
import {BodyOfSimpleModal} from "../../CommonComponents/BaseDialog/utiles";
import Form from "../../CommonComponents/Form";
import {
    actionButton,
    checkChangedDataValue,
    getLeaveInformationModalBodyFormData,
    minAndMaxDateSet,
    setLeaveModalDataToEditForm,
} from "./utiles";
import {commonBlurHandler, commonChangeHandler} from "../../CommonComponents/Form/utiles";
import {LEAVE_ACTION_MODAL_BODY} from "./staticList";
import {approveLeave, cancelLeave, editLeave, rejectLeave} from "../../../Store/actions/action";

const LeaveInformationModalBody = ({data}) => {

    const [LeaveInformationFormData, setLeaveInformationFormData] = useState(getLeaveInformationModalBodyFormData(data))
    const [leaveModal, setLeaveModal] = useState({mode: ``, childModal: {isOpen: false}});
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const onChangeHandler = (e) => commonChangeHandler(LeaveInformationFormData, setLeaveInformationFormData, e, ``,false, (formData, id) => {
        if (id === `startingDate-input`) formData = minAndMaxDateSet(formData);
        if (id === `endingDate-input`) formData = minAndMaxDateSet(formData);
        setLeaveModal(e => JSON.parse(JSON.stringify({
            ...e, changedValue: checkChangedDataValue(formData, data)
        })))
        return formData;
    });
    const onBlurHandler = (e) => commonBlurHandler(LeaveInformationFormData, setLeaveInformationFormData, e, ``);

    const setChildModal = (id, negativeOnClick, positiveOnClick) => {
        const obj = LEAVE_ACTION_MODAL_BODY(id, negativeOnClick, positiveOnClick, user.firstName, data.userFullName)
        setLeaveModal(e => ({
            ...e, childModal: {
                isOpen: true,
                header: obj?.header,
                body: <BodyOfSimpleModal bodyText={obj?.bodyText} buttons={obj?.button}/>
            }
        }));
    };

    const commonCloseChildModalAction = () => {
        setLeaveModal(e => JSON.parse(JSON.stringify({...e, childModal: {...e.childModal, isOpen: false}})));
    };
    const commonCancelEditAction = () => {
        setLeaveInformationFormData(getLeaveInformationModalBodyFormData(data));
        setLeaveModal(e => JSON.parse(JSON.stringify({...e, mode: ``})));
    }

    const onCancelHandler = () => {
        setChildModal(`cancelLeave`, commonCloseChildModalAction, () => {
            dispatch(cancelLeave({leaveApplicationId: data._id}))
        })
    };
    const onEditHandler = (event) => {
        setLeaveModal(e => JSON.parse(JSON.stringify({...e, mode: event.target.id})));
        setLeaveInformationFormData((data) => setLeaveModalDataToEditForm(data))
    };
    const onEditCancelHandler = () => {
        leaveModal?.changedValue?.isChanged ? setChildModal(`cancelLeaveEdit`, commonCloseChildModalAction, commonCancelEditAction) : commonCancelEditAction();
    }
    const onEditSaveHandler = () => {
        leaveModal?.changedValue?.isChanged ? setChildModal(`saveLeaveEdit`, commonCloseChildModalAction, () => {
            dispatch(editLeave({leaveApplicationId: data._id, changedValue: leaveModal?.changedValue?.formattedChangedValue}))
        }) : toast.info(`First you required some changes on leave application`);
    }

    const onRejectHandler = () => {
        setChildModal(`rejectLeaveApplication`, commonCloseChildModalAction, () => {
            dispatch(rejectLeave({leaveApplicationId: data._id, userId: data.user}))
        })
    };
    const onApproveHandler = () => {
        setChildModal(`approveLeaveApplication`, commonCloseChildModalAction, () => {
            dispatch(approveLeave({leaveApplicationId: data._id, userId: data.user}))
        })
    };

    return (<React.Fragment>
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
                {actionButton({
                    ...data,
                    openActionMode: leaveModal.mode || ``,
                    userType: user.positionType,
                    onCancelHandler,
                    onEditHandler,
                    onEditCancelHandler,
                    onEditSaveHandler,
                    onRejectHandler,
                    onApproveHandler
                }).filter(eachButton => eachButton.showAbleValidation).map(({
                                                                                id, label, color, icon, onClick
                                                                            }) => <Button
                    id={id}
                    key={id}
                    startIcon={icon}
                    variant={`contained`}
                    color={color}
                    sx={{flex: 1}}
                    onClick={onClick}
                >
                    {label}
                </Button>)}
            </Stack>
        </Stack>
        {leaveModal.childModal.isOpen && <BaseDialog open={leaveModal.childModal.isOpen} {...leaveModal.childModal}/>}
    </React.Fragment>);
};

export default LeaveInformationModalBody;