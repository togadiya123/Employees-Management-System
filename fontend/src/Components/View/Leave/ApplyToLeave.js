import React, {useState} from "react";

import Form from "../../CommonComponents/Form";
import {APPLY_TO_LEAVE_FORM_FIELD} from "../../../HelperFunction/staticList";
import {Card, Container} from "@mui/material";
import {commonBlurHandler, commonChangeHandler, commonSubmitHandler} from "../../../HelperFunction";

const ApplyToLeave = () => {

    const [leaveFormData, setLeaveFormData] = useState(APPLY_TO_LEAVE_FORM_FIELD);

    const applyLeaveSubmitHandler = (e) => {
        commonSubmitHandler(leaveFormData, setLeaveFormData, e, 'submit', (data) => {
            console.log(data);
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

    const onChangeHandler = (e) => {
        commonChangeHandler(leaveFormData, setLeaveFormData, e, `submit-button`);
    };

    const onBlurHandler = (e) => {
        commonBlurHandler(leaveFormData, setLeaveFormData, e, `submit-button`);
    };

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