import React from "react";
import {Button, FormHelperText, TextField} from "@mui/material";
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
    const helperText = isNullUndefinedEmpty(field.helperText) ? '' : field.helperText;
    const childText = isNullUndefinedEmpty(field.childText) ? '' : field.childText;
    const errorText = isNullUndefinedEmpty(field.errorText) ? '' : field.errorText;
    const fieldType = isNullUndefinedEmpty(field.fieldType) ? 'text' : field.fieldType;
    const variant = isNullUndefinedEmpty(field.variant) ? `outlined` : field.variant;
    const fullWidth = isNullUndefinedEmpty(field.fullWidth) ? false : field.fullWidth;
    const size = isNullUndefinedEmpty(field.size) ? false : field.size;
    const color = isNullUndefinedEmpty(field.color) ? '' : field.color;
    const bgcolor = isNullUndefinedEmpty(field.bgcolor) ? '' : field.bgcolor;

    const sx = {};
    color && (sx.color = color);
    bgcolor && (sx.bgcolor = bgcolor);

    return <React.Fragment>
        {
            field.type === `input` && <TextField id={id}
                                                 helperText={errorText || helperText}
                                                 label={label}
                                                 autoComplete={''}
                                                 type={fieldType}
                                                 variant={variant}
                                                 fullWidth={fullWidth}
                                                 error={error(field)}
                                                 sx={sx}
                                                 onFocus={onFocus}
                                                 onChange={onChange}
                                                 onBlur={onBlur}/>
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