import React from "react";
import {Box, FormControl, Typography} from "@mui/material";
import Field from "./Field";

const Form = ({formDesign, onChange, onFocus, onBlur, onClick}) => {
    return <React.Fragment>
        <Box sx={{
            display: `flex`,
            gap: 2,
            flexDirection: `column`,
            padding: 2,
        }} component={'form'}>
            {Array.isArray(formDesign) && formDesign.map(eachFormInputItem => <Typography key={eachFormInputItem.id}
                                                                                          component={`div`}
                                                                                          id={`${eachFormInputItem.id}-typography`}>
                <FormControl fullWidth={true}
                             id={`${eachFormInputItem.id}-formControl`}>
                    <Field field={eachFormInputItem}
                           onChange={onChange}
                           onClick={onClick}
                           onFocus={onFocus}
                           onBlur={onBlur}/>
                </FormControl>
            </Typography>)}
        </Box>
    </React.Fragment>;
};

export default Form;