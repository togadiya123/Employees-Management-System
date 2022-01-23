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
                                          status,
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
        gridColumn: {xs: `1 / 13`, md: `1 / 9`, xl: `1 / 9`},
        gridRow: {xs: `4 / 5`, md: `1 / 2`, xl: `1 / 2`},
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
        gridColumn: {xs: `1 / 13`, md: `9 / 13`, xl: `9 / 13`},
        gridRow: {xs: `1 / 4`, md: `1 / 4`, xl: `1 / 4`},
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
        gridColumn: {xs: `1 / 13`, md: `1 / 9`, xl: `1 / 9`},
        gridRow: {xs: `5 / 6`, md: `2 / 3`, xl: `2 / 3`},
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
        gridColumn: {xs: `1 / 13`, md: `1 / 7`, xl: `1 / 7`},
        gridRow: {xs: `8 / 9`, md: `4 / 5`, xl: `4 / 5`},
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
        gridColumn: {xs: `1 / 13`, md: `7 / 13`, xl: `7 / 13`},
        gridRow: {xs: `9 / 10`, md: `4 / 5`, xl: `4 / 5`},
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
        gridColumn: {xs: `1 / 13`, md: `1 / 7`, xl: `1 / 7`},
        gridRow: {xs: `13 / 14`, md: `6 / 7`, xl: `6 / 7`},
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
        gridColumn: {xs: `1 / 13`, md: `7 / 13`, xl: `7 / 13`},
        gridRow: {xs: `14 / 15`, md: `6 / 7`, xl: `6 / 7`},
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
        gridColumn: {xs: `1 / 13`, md: `1 / 6`, xl: `1 / 6`},
        gridRow: {xs: `6 / 7`, md: `3 / 4`, xl: `3 / 4`},
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
        gridColumn: {xs: `1 / 13`, md: `5 / 10`, xl: `5 / 10`},
        gridRow: {xs: `11 / 12`, md: `5 / 6`, xl: `5 / 6`},
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
        gridColumn: {xs: `1 / 13`, md: `1 / 5`, xl: `1 / 5`},
        gridRow: {xs: `10 / 11`, md: `5 / 6`, xl: `5 / 6`},
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
        gridColumn: {xs: `1 / 13`, md: `10 / 13`, xl: `10 / 13`},
        gridRow: {xs: `12 / 13`, md: `5 / 6`, xl: `5 / 6`},
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
        gridColumn: {xs: `1 / 13`, md: `6 / 9`, xl: `6 / 9`},
        gridRow: {xs: `7 / 8`, md: `3 / 4`, xl: `3 / 4`},
    },
]

export const editableFieldName = () => [`firstName`, `lastName`, `avatar`];