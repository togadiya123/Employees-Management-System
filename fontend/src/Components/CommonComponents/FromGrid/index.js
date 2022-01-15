import React from "react";
import {Stack, Box, FormControl} from "@mui/material";
import Field from "../Form/Field";

const FromGrid = ({formData, onChange = e => e, onFocus = e => e, onBlur = e => e, onClick = e => e,formSx={}}) => {
    return (
        <React.Fragment>
            <Box sx={{
                display: `grid`,
                gridTemplateColumns: `repeat(12, 1fr)`,
                gap: 2,
                padding: 2,
                ...formSx
            }} component={'form'}>
                {
                    Array.isArray(formData) && formData.map(
                        (eachFromField, index) => <Stack key={index}
                                                         gridColumn={eachFromField.gridColumn}
                                                         gridRow={eachFromField.gridRow}
                        >
                            <FormControl id={`${eachFromField.id}-formControl`}
                                         sx={{
                                             flexDirection: eachFromField.leftSideLabel ? 'row' : 'column',
                                             gap: (theme) => theme.spacing(eachFromField.leftSideLabel ? 2 : 1)
                                         }}>
                                <Field field={eachFromField}
                                       onChange={onChange}
                                       onClick={onClick}
                                       onFocus={onFocus}
                                       onBlur={onBlur}/>
                            </FormControl>
                        </Stack>
                    )
                }
            </Box>
        </React.Fragment>
    )
};

export default FromGrid