import {Avatar} from "@mui/material";
import moment from "moment";
import config from "../../../config";

export const GET_PROFILE_FORM_DATA = ({
                                          firstName,
                                          lastName,
                                          designation,
                                          qualification,
                                          positionType,
                                          emailId,
                                          phoneNumber,
                                          avatar,
                                          dateOfBirth,
                                          dateOfJoin,
                                          status
                                      }) => [
    {
        id: `firstName`,
        label: ``,
        leftSideLabel: `First Name`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `95px`,
        },
        fullWidth: true,
        value: firstName,
        type: `input`,
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        fieldType: `text`,
        size: `small`,
        gridColumn: `1 / 9`,
        gridRow: `1`,
    },
    {
        id: `avatar`,
        label: ``,
        value: avatar,
        type: `imageUpload`,
        fieldSx: {
            type: `profile`,
            avatarSx: {
                width: `150px`,
                height: `150px`,
            }
        },
        errorText: ``,
        gridColumn: `9 / 13`,
        gridRow: `1 / 4`,
    },
    {
        id: `lastName`,
        label: ``,
        leftSideLabel: `Last Name`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `95px`,
        },
        fullWidth: true,
        value: lastName,
        type: `input`,
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        fieldType: `text`,
        size: `small`,
        gridColumn: `1 / 9`,
        gridRow: `2 / 3`,
    },
    {
        id: `email`,
        label: ``,
        leftSideLabel: `Email Id`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `95px`,
        },
        fullWidth: true,
        value: emailId,
        type: `input`,
        disabled: true,
        sx: {
            ".Mui-disabled": {
                color: `var(--default)`,
                WebkitTextFillColor: `var(--default)`
            }
        },
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        size: `small`,
        gridColumn: `1 / 7`,
        gridRow: `4 / 5`,
    },
    {
        id: `phoneNumber`,
        label: ``,
        leftSideLabel: `Phone Number`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `fit-content`,
        },
        fullWidth: true,
        value: phoneNumber,
        type: `input`,
        disabled: true,
        sx: {
            ".Mui-disabled": {
                color: `var(--default)`,
                WebkitTextFillColor: `var(--default)`
            }
        },
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        size: `small`,
        gridColumn: `7 / 13`,
        gridRow: `4 / 5`,
    },
    {
        id: `dataOfJoin`,
        label: ``,
        leftSideLabel: `Date of Join`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `95px`,
        },
        fullWidth: true,
        value: moment(dateOfJoin).format(config.REGULAR_DATE_FORMAT),
        type: `input`,
        disabled: true,
        sx: {
            ".Mui-disabled": {
                color: `var(--default)`,
                WebkitTextFillColor: `var(--default)`
            }
        },
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        size: `small`,
        gridColumn: `1 / 7`,
        gridRow: `6 / 7`,
    },
    {
        id: `dateOfBirth`,
        label: ``,
        leftSideLabel: `Date of Birth`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `fit-content`,
        },
        fullWidth: true,
        value: moment(dateOfBirth).format(config.REGULAR_DATE_FORMAT),
        type: `input`,
        disabled: true,
        sx: {
            ".Mui-disabled": {
                color: `var(--default)`,
                WebkitTextFillColor: `var(--default)`
            }
        },
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        size: `small`,
        gridColumn: `7 / 13`,
        gridRow: `6 / 7`,
    },
    {
        id: `designation`,
        label: ``,
        leftSideLabel: `Designation`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `95px`,
        },
        fullWidth: true,
        value: designation,
        type: `input`,
        disabled: true,
        sx: {
            ".Mui-disabled": {
                color: `var(--default)`,
                WebkitTextFillColor: `var(--default)`
            }
        },
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        size: `small`,
        gridColumn: `1 / 6`,
        gridRow: `3 / 4`,
    },
    {
        id: `qualification`,
        label: ``,
        leftSideLabel: `Qualification`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `fit-content`,
        },
        fullWidth: true,
        value: qualification,
        type: `input`,
        disabled: true,
        sx: {
            ".Mui-disabled": {
                color: `var(--default)`,
                WebkitTextFillColor: `var(--default)`
            }
        },
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        size: `small`,
        gridColumn: `5 / 10`,
        gridRow: `5 / 6`,
    },
    {
        id: `status`,
        label: ``,
        leftSideLabel: `Status`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `95px`,
        },
        fullWidth: true,
        value: status,
        type: `input`,
        disabled: true,
        sx: {
            ".Mui-disabled": {
                color: `var(--default)`,
                WebkitTextFillColor: `var(--default)`
            }
        },
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        size: `small`,
        gridColumn: `1 / 5`,
        gridRow: `5 / 6`,
    },
    {
        id: `age`,
        label: ``,
        leftSideLabel: `Age`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `fit-content`,
        },
        fullWidth: true,
        value: `20`,
        type: `input`,
        disabled: true,
        sx: {
            ".Mui-disabled": {
                color: `var(--default)`,
                WebkitTextFillColor: `var(--default)`
            }
        },
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        size: `small`,
        gridColumn: `10 / 13`,
        gridRow: `5 / 6`,
    },
    {
        id: `type`,
        label: ``,
        leftSideLabel: `Type`,
        leftSideLabelVariant: `subtitle1`,
        leftSideLabelSx: {
            fontWeight: 550,
            fontSize: `16px`,
            minWidth: `fit-content`,
        },
        fullWidth: true,
        value: positionType,
        type: `input`,
        disabled: true,
        sx: {
            ".Mui-disabled": {
                color: `var(--default)`,
                WebkitTextFillColor: `var(--default)`
            }
        },
        isValid: true,
        isInitialValue: false,
        errorText: ``,
        size: `small`,
        gridColumn: `6 / 9`,
        gridRow: `3 / 4`,
    },
]

export const editableFieldName = () => [`firstName`, `lastName`, `avatar`];