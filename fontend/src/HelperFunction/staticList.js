import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import PersonIcon from '@mui/icons-material/Person';

import config from "../config";
import {ApplyToLeave, Attendance, Dashboard, Employee, Leave, Salary} from "../Components/View";

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
        subRoute: [
            {
                key: "applyToLeave",
                textValue: "applyToLeave",
                route: '/leave/applyToLeave',
                exact: true,
                icon: <WorkOffIcon/>,
                isButton: true,
                haveAdminView: false,
                haveUserView: true,
                component: ApplyToLeave,
            }
        ]
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
    [{
        id: `email`,
        label: `Email Id`,
        type: `input`,
        fieldType: `email`,
        validationType: `email`,
        required: true,
        value: '',
        fullWidth: true,
        helperText: `Enter Your Email-Id`,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `password`,
        label: `Password`,
        type: `input`,
        fieldType: `password`,
        validationType: `strongPassword`,
        required: true,
        value: '',
        fullWidth: true,
        helperText: `Enter Your Password`,
        isValid: false,
        isInitialValue: true,
    }],
    [{
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
        fullWidth:true,
        isValid: false,
        isInitialValue: true,
    }],
];

export const APPLY_TO_LEAVE_FORM_FIELD = [
    [{
        id: `leaveType`,
        label: ``,
        type: `input`,
        fieldType: `select`,
        topSideLabel: `Leave Type`,
        fullWidth: true,
        validationType: ``,
        required: true,
        value: '',
        size: 'small',
        sx: {
            maxWidth: '210px',
        },
        helperText: `Select a leave type`,
        option: [
            {
                id: `Privilege Leave`,
                label: `Privilege Leave`,
                value: `Privilege Leave`,
            },
            {
                id: `Sick Leave`,
                label: `Sick Leave`,
                value: `Sick Leave`,
            },
            {
                id: `Compensatory Leave`,
                label: `Compensatory Leave`,
                value: `Compensatory Leave`,
            },
            {
                id: `Less of pay Leave`,
                label: `Less of pay Leave`,
                value: `Less of pay Leave`,
            },
        ],
        isValid: false,
        isInitialValue: true,
    }],
    [
        {
            id: `startingDate`,
            label: ``,
            type: `input`,
            fieldType: `datetime-local`,
            topSideLabel: `Leave Starting Date`,
            fullWidth: false,
            validationType: [{type: `less than to`, validateWith: `id`, id: `endingDate`}],
            required: true,
            value: '',
            size: 'small',
            sx: {
                maxWidth: '250px',
            },
            helperText: `Select a leave stating date and time.`,
            isValid: false,
            isInitialValue: true,
        },
        {
            id: `endingDate`,
            label: ``,
            type: `input`,
            fieldType: `datetime-local`,
            topSideLabel: `Leave Ending Date`,
            fullWidth: false,
            validationType: [{type: `grater than to`, validateWith: `id`, id: `startingDate`}],
            required: true,
            value: '',
            size: 'small',
            sx: {
                maxWidth: '250px',
            },
            helperText: `Select a leave ending date and time.`,
            isValid: false,
            isInitialValue: true,
        }
    ],
    [{
        id: `leaveDescription`,
        label: ``,
        type: `input`,
        fieldType: `text`,
        multiline: true,
        topSideLabel: `Description`,
        fullWidth: true,
        validationType: ``,
        required: true,
        value: '',
        size: 'small',
        helperText: `fill a leave description`,
        isValid: false,
        isInitialValue: true,
    }],
];

export const FOOTER_STRING_ARRAY = [
    `All Copyright are reserved by ${config.APPLICATION_NAME} ${String.fromCharCode(9400)} ${new Date().getFullYear()}.`,
    `Powered by togadiya`];
