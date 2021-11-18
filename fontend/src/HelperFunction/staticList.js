import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import PersonIcon from '@mui/icons-material/Person';
import config from "../config";

export const DRAWER_LIST_ITEM = [
    {
        key: "dashboard",
        textValue: "Dashboard",
        route: '/dashboard',
        icon: <DashboardIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
    },
    {
        key: "attendance",
        textValue: "Attendance",
        route: '/attendance',
        icon: <AssessmentIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
    },
    {
        key: "leave",
        textValue: "Leave",
        route: '/leave',
        icon: <WorkOffIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
    },
    {
        key: "salary",
        textValue: "Salary",
        route: '/salary',
        icon: <MonetizationOnIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
    },
    {
        key: "employee",
        textValue: "Employee",
        route: '/employee',
        icon: <PersonIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: false,
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

export const FOOTER_STRING_ARRAY = [
    `All Copyright are reserved by ${config.APPLICATION_NAME} ${String.fromCharCode(9400)} ${new Date().getFullYear()}.`,
    `Powered by togadiya`];
