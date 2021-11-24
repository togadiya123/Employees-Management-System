import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import PersonIcon from '@mui/icons-material/Person';

import config from "../config";
import {Attendance, Dashboard, Employee, Leave, Salary} from "../Components/View";

export const ROUTE_LIST = () => [
    {
        key: "dashboard",
        textValue: "Dashboard",
        route: '/dashboard',
        exact: true,
        icon: <DashboardIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        component: Dashboard,
    },
    {
        key: "attendance",
        textValue: "Attendance",
        route: '/attendance',
        exact: true,
        icon: <AssessmentIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        component: Attendance,
    },
    {
        key: "leave",
        textValue: "Leave",
        route: '/leave',
        exact: true,
        icon: <WorkOffIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        component: Leave,
    },
    {
        key: "salary",
        textValue: "Salary",
        route: '/salary',
        exact: true,
        icon: <MonetizationOnIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        component: Salary,
    },
    {
        key: "employee",
        textValue: "Employee",
        route: '/employee',
        exact: true,
        icon: <PersonIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: false,
        component: Employee,
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
