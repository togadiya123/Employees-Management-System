import React from "react";
import {
    Button,
    FormControlLabel,
    FormHelperText,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import {isNullUndefinedEmpty} from "../../../HelperFunction";

const Field = ({field, onChange, onBlur, onFocus, onClick}) => {

    const error = (field) => {
        let haveError = true;
        if (field.isValid || field.isInitialValue)
            return false;
        return haveError;
    };

    const id = isNullUndefinedEmpty(field.id) ? `` : `${field.id}-${field.type}`;
    const label = isNullUndefinedEmpty(field.label) ? '' : field.label;
    const leftSideLabel = isNullUndefinedEmpty(field.leftSideLabel) ? '' : field.leftSideLabel;
    const topSideLabel = isNullUndefinedEmpty(field.topSideLabel) ? '' : field.topSideLabel;
    const helperText = isNullUndefinedEmpty(field.helperText) ? '' : field.helperText;
    const childText = isNullUndefinedEmpty(field.childText) ? '' : field.childText;
    const minDate = isNullUndefinedEmpty(field.minDate) ? '' : field.minDate;
    const maxDate = isNullUndefinedEmpty(field.maxDate) ? '' : field.maxDate;
    const fieldType = isNullUndefinedEmpty(field.fieldType) ? 'text' : field.fieldType;
    const align = isNullUndefinedEmpty(field.align) ? '' : field.align;
    const errorText = isNullUndefinedEmpty(field.errorText) ? '' : field.errorText;
    const size = isNullUndefinedEmpty(field.size) ? '' : field.size;
    const variant = isNullUndefinedEmpty(field.variant) ? `outlined` : field.variant;
    const fullWidth = isNullUndefinedEmpty(field.fullWidth) ? false : field.fullWidth;
    const multiline = isNullUndefinedEmpty(field.multiline) ? false : field.multiline;
    const gutterBottom = isNullUndefinedEmpty(field.gutterBottom) ? false : field.gutterBottom;
    const color = isNullUndefinedEmpty(field.color) ? '' : field.color;
    const bgcolor = isNullUndefinedEmpty(field.bgcolor) ? '' : field.bgcolor;
    const value = isNullUndefinedEmpty(field.value) ? '' : field.value;
    const option = Array.isArray(field.option) ? field.option : [];
    const sx = isNullUndefinedEmpty(field.sx) ? {} : field.sx;
    const select = field.fieldType === "select";

    color && (sx.color = color);
    bgcolor && (sx.bgcolor = bgcolor);

    return <React.Fragment>

        {
            field.type === `text` && <Typography id={`${id}-text`}
                                                 variant={variant}
                                                 sx={sx}
                                                 align={align}
                                                 gutterBottom={gutterBottom}>
                {label}
            </Typography>
        }
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
                                             color: (theme) => error(field) ? theme.palette.error.main : 'inherit',
                                             display: `flex`,
                                             alignItems: 'center'
                                         }}>
                {topSideLabel}
            </Typography>
        }
        {
            field.type === `input` && <TextField id={id}
                                                 name={id}
                                                 helperText={!field.isInitialValue && errorText ? errorText : (label || fieldType !== 'text') ? helperText : ''}
                                                 label={label}
                                                 autoComplete={''}
                                                 type={fieldType}
                                                 select={select}
                                                 value={value}
                                                 size={size}
                                                 multiline={multiline}
                                                 minRows={2}
                                                 inputProps={{
                                                     min: minDate,
                                                     max: maxDate,
                                                 }}
                                                 placeholder={helperText}
                                                 variant={variant}
                                                 fullWidth={fullWidth}
                                                 error={error(field)}
                                                 sx={sx}
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