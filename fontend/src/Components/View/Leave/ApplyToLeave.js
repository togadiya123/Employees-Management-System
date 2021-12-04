import React, {useState} from "react";
import moment from "moment";
import {useDispatch} from "react-redux";
import {Card, Container} from "@mui/material";

import Form from "../../CommonComponents/Form";
import {APPLY_TO_LEAVE_FORM_FIELD, userApplyToLeaveKeyList} from "../../../HelperFunction/staticList";
import {
    commonBlurHandler,
    commonChangeHandler,
    commonSubmitHandler,
    getFormObjectFromFormDataArray
} from "../../../HelperFunction";
import config from "../../../config";
import {applyToLeave} from "../../../Store/actions/action";

const ApplyToLeave = ({history}) => {

    const [leaveFormData, setLeaveFormData] = useState(APPLY_TO_LEAVE_FORM_FIELD);
    const dispatch = useDispatch();

    const applyLeaveSubmitHandler = (e) => {
        commonSubmitHandler(leaveFormData, setLeaveFormData, e, 'submit', (data) => {
            dispatch(applyToLeave(getFormObjectFromFormDataArray(data, userApplyToLeaveKeyList))).then(() => history.replace(`/leave`));
        });
    };

    const onFocusHandler = (e) => {
    };
    const onClickHandler = (e) => {
        switch (e.target.id) {
            case `submit-button`:
                applyLeaveSubmitHandler(e);
                break;
            case ``:
                break;
            default:
                break;
        }
    };

    const onChangeHandler = (e) => commonChangeHandler(leaveFormData, setLeaveFormData, e, `submit-button`, (data, id) => {
        if (id === `startingDate-input`) data = minAndMaxDateSet(data);
        if (id === `endingDate-input`) data = minAndMaxDateSet(data);
        return data;
    });

    const onBlurHandler = (e) => commonBlurHandler(leaveFormData, setLeaveFormData, e, `submit-button`);

    return <React.Fragment>
        <Container sx={{py: 2}}>
            <Card sx={{
                width: `100%`,
                maxWidth: `650px`,
                mx: `auto`,
                boxShadow: 3,
            }}>
                <Form formDesign={leaveFormData}
                      onFocus={onFocusHandler}
                      onClick={onClickHandler}
                      onChange={onChangeHandler}
                      onBlur={onBlurHandler}/>
            </Card>
        </Container>
    </React.Fragment>;
};

export default ApplyToLeave;

const minAndMaxDateSet = (data) => {
    data.forEach(eachRow => eachRow.forEach((eachField) => {
        if (eachField.id === `startingDate`) {
            eachField.minDate = moment().format(config.DEFAULT_DATE_FORMAT);
            eachField.maxDate = document.getElementById(`endingDate-input`)?.value;
        } else if (eachField.id === `endingDate`) {
            eachField.minDate = document.getElementById(`startingDate-input`)?.value;
        }
    }));
    return data;
};