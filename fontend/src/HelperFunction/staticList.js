import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export const DRAWER_LIST_ITEM = [
    {
        key: "dashboard",
        textValue: "Dashboard",
        icon: <DashboardIcon/>,
        isButton : true,
    },
    {
        key: "attendance",
        textValue: "Attendance",
        icon: <AssessmentIcon/>,
        isButton : true,
    },
    {
        key: "salary",
        textValue: "Salary",
        icon: <MonetizationOnIcon/>,
        isButton : true,
    },
];


export const LOGIN_FORM_FIELD = [
    {
        id: `email`,
        label: `Email Id`,
        type: `input`,
        fieldType: `email`,
        validationType: `email`,
        required: true,
        value: '',
        helperText: `Enter Your Email-Id`,
        isValid: false,
        isInitialValue: true,
        isCurrentlyInputInFocus: false
    },
    {
        id: `password`,
        label: `Password`,
        type: `input`,
        fieldType: `password`,
        validationType: `strongPassword`,
        required: true,
        value: '',
        helperText: `Enter Your Password`,
        isValid: false,
        isInitialValue: true,
        isCurrentlyInputInFocus: false
    },
    {
        id: `logIn`,
        childText: `Log In`,
        type: `button`,
        fieldType: `button`,
        validationType: `allRequired`,
        color: `white`,
        bgcolor: `var(--main) !important`,
        variant: `contained`,
        size: 'large',
        helperText: ``,
        isValid: false,
        isInitialValue: true,
        isCurrentlyInputInFocus: false
    },
];