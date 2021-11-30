import React from "react";
import {Box, FormControl, Stack} from "@mui/material";
import Field from "./Field";

const Form = ({formDesign, onChange, onFocus, onBlur, onClick}) => {
    return <React.Fragment>
        <Box sx={{
            display: `flex`,
            gap: 2,
            flexDirection: `column`,
            padding: 2,
        }} component={'form'}>
            {Array.isArray(formDesign) && formDesign.map((eachFormRowItem, index) =>
                <Stack direction={"row"}
                       sx={{flexWrap: `wrap`, gap: (theme) => theme.spacing(2)}}
                       id={`${index}-row`}
                       key={`${index}-row-key`}>
                    {eachFormRowItem.map(eachFormInputItem => <Stack key={eachFormInputItem.id}
                                                                     component={`div`}
                                                                     sx={{width: eachFormInputItem.fullWidth ? "100%" : "auto"}}
                                                                     id={`${eachFormInputItem.id}-typography`}>
                        <FormControl id={`${eachFormInputItem.id}-formControl`}
                                     sx={{
                                         flexDirection: eachFormInputItem.leftSideLabel ? 'row' : 'column',
                                         gap: (theme) => theme.spacing(eachFormInputItem.leftSideLabel ? 2 : 1)
                                     }}>
                            <Field field={eachFormInputItem}
                                   onChange={onChange}
                                   onClick={onClick}
                                   onFocus={onFocus}
                                   onBlur={onBlur}/>
                        </FormControl>
                    </Stack>)}
                </Stack>)}
        </Box>
    </React.Fragment>;
};

export default Form;