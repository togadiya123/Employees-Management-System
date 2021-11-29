import React from "react";
import {
    Button,
    FormHelperText,
    TextField,
    MenuItem,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@mui/material";
import {isNullUndefinedEmpty} from "../../../HelperFunction";

const Field = ({field, onChange, onBlur, onFocus, onClick}) => {

    const error = (field) => {
        let haveError = true;
        if (field.isValid || field.isInitialValue)
            return false;
        else if (field.currentlyInputInFocus)
            return true;
        return haveError;
    };

    const id = isNullUndefinedEmpty(field.id) ? Math.random() : `${field.id}-${field.type}`;
    const label = isNullUndefinedEmpty(field.label) ? '' : field.label;
    const leftSideLabel = isNullUndefinedEmpty(field.leftSideLabel) ? '' : field.leftSideLabel;
    const topSideLabel = isNullUndefinedEmpty(field.topSideLabel) ? '' : field.topSideLabel;
    const helperText = isNullUndefinedEmpty(field.helperText) ? '' : field.helperText;
    const childText = isNullUndefinedEmpty(field.childText) ? '' : field.childText;
    const errorText = isNullUndefinedEmpty(field.errorText) ? '' : field.errorText;
    const fieldType = isNullUndefinedEmpty(field.fieldType) ? 'text' : field.fieldType;
    const variant = isNullUndefinedEmpty(field.variant) ? `outlined` : field.variant;
    const fullWidth = isNullUndefinedEmpty(field.fullWidth) ? false : field.fullWidth;
    const size = isNullUndefinedEmpty(field.size) ? '' : field.size;
    const color = isNullUndefinedEmpty(field.color) ? '' : field.color;
    const bgcolor = isNullUndefinedEmpty(field.bgcolor) ? '' : field.bgcolor;
    const value = isNullUndefinedEmpty(field.value) ? '' : field.value;
    const option = Array.isArray(field.option) ? field.option : [];
    const select = field.fieldType === "select";

    const sx = {};
    color && (sx.color = color);
    bgcolor && (sx.bgcolor = bgcolor);

    return <React.Fragment>
        {
            leftSideLabel && <Typography id={`${id}-leftSideLabel`}
                                         sx={{
                                             display: `flex`,
                                             alignItems: 'center'
                                         }}>
                {leftSideLabel}
            </Typography>
        }
        {
            topSideLabel && <Typography id={`${id}-topSideLabel`}
                                         sx={{
                                             display: `flex`,
                                             alignItems: 'center'
                                         }}>
                {topSideLabel}
            </Typography>
        }
        {
            field.type === `input` && <TextField id={id}
                                                 helperText={errorText || helperText}
                                                 label={label}
                                                 autoComplete={''}
                                                 type={fieldType}
                                                 select={select}
                                                 value={value}
                                                 size={size}
                                                 variant={variant}
                                                 fullWidth={fullWidth}
                                                 error={error(field)}
                                                 sx={{...sx, flex: 1,minWidth:'fitContent'}}
                                                 onFocus={onFocus}
                                                 onChange={onChange}
                                                 onBlur={onBlur}>
                {option.map(eachOption => <MenuItem key={eachOption.id}
                                                    value={eachOption.value}>
                    {eachOption.label}
                </MenuItem>)}
            </TextField>
        }
        {
            field.type === `radio` && <RadioGroup id={id}
                                                  row
                                                  variant={variant}
                                                  sx={{...sx, flex: 1}}
                                                  onFocus={onFocus}
                                                  onChange={onChange}
                                                  onBlur={onBlur}>
                {
                    option.map(({id, value, label}) => <FormControlLabel control={<Radio/>}
                                                                         value={value} key={id}
                                                                         label={label}/>)
                }
            </RadioGroup>
        }
        {
            field.type === `button` && <Button id={id}
                                               sx={sx}
                                               size={size}
                                               variant={variant}
                                               fullWidth={fullWidth}
                                               onFocus={onFocus}
                                               onBlur={onBlur}
                                               onClick={onClick}>
                {childText}
            </Button>
        }
        {
            (field.type === `button`) && error(field) && errorText && <FormHelperText id={`${id}-errorHelperText`}
                                                                                      error={true}>
                {errorText}
            </FormHelperText>
        }
    </React.Fragment>
};

export default Field