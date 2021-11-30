import React, {useState} from "react";

import Form from "../../CommonComponents/Form";
import {APPLY_TO_LEAVE_FORM_FIELD} from "../../../HelperFunction/staticList";
import {Card, Container} from "@mui/material";
import {commonBlurHandler, commonChangeHandler} from "../../../HelperFunction";

const ApplyToLeave = () => {

    const [leaveFormData, setLeaveFormData] = useState(APPLY_TO_LEAVE_FORM_FIELD);

    const onFocusHandler = (e) => {
    };
    const onClickHandler = (e) => {
        switch (e.target.id) {
            case ``:
                break;
            case `w`:
                break;
            default:
                break;
        }
    };

    const onChangeHandler = (e) => {
        commonChangeHandler(leaveFormData, setLeaveFormData, e);
    };

    const onBlurHandler = (e) => {
        commonBlurHandler(leaveFormData, setLeaveFormData, e);
    };

    return <React.Fragment>
        <Container>
            <Card sx={{
                width: `100%`,
                maxWidth: `650px`,
                mx: `auto`,
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