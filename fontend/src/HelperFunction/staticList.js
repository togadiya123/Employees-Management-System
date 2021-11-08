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