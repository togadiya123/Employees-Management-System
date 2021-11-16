import React from "react";
import {Box, FormControl, Typography} from "@mui/material";
import Field from "./Field";

const Form = ({formDesign, onChange, onFocus, onBlur, onClick}) => {
    return <React.Fragment>
        <Box className={"flex gap-1 flexDirectionColumn p-1"}>
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