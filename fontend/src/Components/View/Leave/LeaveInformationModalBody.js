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
import {approveLeave, cancelLeave, editLeave, getLeaveInfo, rejectLeave} from "../../../Store/actions/action";

const LeaveInformationModalBody = ({data}) => {

    /**
     *      after the edit or cancel leave new data is not updating, I have created a commonMethod to get data but still new data is not update.
     *      may be after the change button option will not change.
     *
     *
     * **/

    const [leaveInformationFormData, setLeaveInformationFormData] = useState(getLeaveInformationModalBodyFormData(data))
    const [leaveModal, setLeaveModal] = useState({mode: ``, childModal: {isOpen: false}});
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const onChangeHandler = (e) => commonChangeHandler(leaveInformationFormData, setLeaveInformationFormData, e, ``, (formData, id) => {
        if (id === `startingDate-input`) formData = minAndMaxDateSet(formData);
        if (id === `endingDate-input`) formData = minAndMaxDateSet(formData);
        setLeaveModal(e => JSON.parse(JSON.stringify({
            ...e, changedValue: checkChangedDataValue(formData, data)
        })))
        return formData;
    });
    const onBlurHandler = (e) => commonBlurHandler(leaveInformationFormData, setLeaveInformationFormData, e, ``);

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

    /** Common Actions **/

        // get updated leave data after the action
    const getUpdatedLeaveData = () => {
            dispatch(getLeaveInfo({taskId: data._id || ''})).then((state) => {
                    setLeaveInformationFormData(() => getLeaveInformationModalBodyFormData(state?.pageData?.leave?.specificLeaveInfo || {}))
                }
            );
        };

    const commonCloseChildModalAction = () => {
        setLeaveModal({mode: ``, childModal: {isOpen: false}});
    };
    const commonCancelEditAction = () => {
        setLeaveInformationFormData(getLeaveInformationModalBodyFormData(data));
        setLeaveModal(e => JSON.parse(JSON.stringify({...e, mode: ``})));
    }

    /** Cancel Action **/

    const onCancelHandler = () => {
        setChildModal(`cancelLeave`, commonCloseChildModalAction, () => {
            dispatch(cancelLeave({leaveApplicationId: data._id})).then(() => {
                commonCloseChildModalAction()
                getUpdatedLeaveData()
            })
        })
    };

    /** Edit Actions **/

    const onEditHandler = (event) => {
        setLeaveModal(e => JSON.parse(JSON.stringify({...e, mode: event.target.id})));
        setLeaveInformationFormData((data) => setLeaveModalDataToEditForm(data))
    };

    const onEditCancelHandler = () => {
        leaveModal?.changedValue?.isChanged ? setChildModal(`cancelLeaveEdit`, commonCloseChildModalAction, commonCancelEditAction) : commonCancelEditAction();
    }
    const onEditSaveHandler = () => {
        leaveModal?.changedValue?.isChanged ? setChildModal(`saveLeaveEdit`, commonCloseChildModalAction, () => {
            dispatch(editLeave({
                leaveApplicationId: data._id,
                changedValue: leaveModal?.changedValue?.formattedChangedValue
            })).then(() => {
                commonCloseChildModalAction()
                getUpdatedLeaveData()
            })
        }) : toast.info(`First you required some changes on leave application`);
    }

    /** Reject Action **/

    const onRejectHandler = () => {
        setChildModal(`rejectLeaveApplication`, commonCloseChildModalAction, () => {
            dispatch(rejectLeave({leaveApplicationId: data._id, userId: data.user})).then(() => {
                getUpdatedLeaveData()
                commonCloseChildModalAction()
            })
        })
    };

    /** Approve Action **/

    const onApproveHandler = () => {
        setChildModal(`approveLeaveApplication`, commonCloseChildModalAction, () => {
            dispatch(approveLeave({leaveApplicationId: data._id, userId: data.user})).then(() => {
                commonCloseChildModalAction()
                getUpdatedLeaveData()
            })
        })
    };

    return (<React.Fragment>
        <Stack gap={1}>
            <Stack sx={{overflowX: `auto`}}>
                <Form
                    formDesign={leaveInformationFormData}
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