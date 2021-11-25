import React, {useState} from "react";

import Form from "../../CommonComponents/Form";
import {APPLY_TO_LEAVE_FORM_FIELD} from "../../../HelperFunction/staticList";

const ApplyToLeave = () => {

    const [leaveFormData, setLeaveFormData] = useState(APPLY_TO_LEAVE_FORM_FIELD);

    const onFocusHandler = () => {
    };

    const onClickHandler = () => {
    };

    const onChangeHandler = () => {
    };

    const onBlurHandler = () => {
    };

    return <React.Fragment>
        <Form formDesign={leaveFormData}
              onFocus={onFocusHandler}
              onClick={onClickHandler}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}/>
    </React.Fragment>
};

export default ApplyToLeave;