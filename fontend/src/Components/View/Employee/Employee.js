import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getEmployeeInfo, getUsersList} from "../../../Store/actions/action";
import {getRows} from "../Leave/utiles";
import {Card, Container, IconButton, Stack, Typography} from "@mui/material";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import BaseTable from "../../CommonComponents/BaseTable";
import BaseDialog from "../../CommonComponents/BaseDialog";
import {EMPLOYEE_TABLE} from "./utiles";
import EmployeeInformationModalBody from "./EmployeeInformationModalBody";

const Employee = () => {

    const dispatch = useDispatch();
    const employee = useSelector(state => state?.pageData?.employee);

    const [columns, setColumns] = useState(EMPLOYEE_TABLE());
    const [rows, setRows] = useState([]);
    const [modal, setModal] = useState({
        isOpen: false, onClose: () => {
            setModal(e => ({...e, isOpen: false}))
        }
    })

    const actionButtonHandler = (e) => {
        dispatch(getEmployeeInfo({employeeId: e._id || ''})).then((state) => {
            setModal(modal => ({
                ...modal,
                isOpen: true,
                header: `Employee Information`,
                body: <EmployeeInformationModalBody data={state?.pageData?.employee?.specificLeaveInfo || {}}/>
            }))
        });
    };

    useEffect(() => {
        columns.length && employee && employee.data && setRows(() => getRows(columns, employee.data, (e) => {
            return (<IconButton
                sx={{color: `var(--main)`}}
                onClick={() => {
                    actionButtonHandler(e)
                }}
            >
                <ChromeReaderModeIcon/>
            </IconButton>);
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [employee])

    useEffect(() => {
        dispatch(getUsersList({
            sortBy: {
                "updatedAt": -1
            }, limit: 10
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <React.Fragment>
        <Container sx={{py: 2, px: {sm: 0,}}}>
            <Card sx={{
                width: `100%`, maxWidth: `fit-content`, mx: `auto`, p: 3, boxShadow: 3,
            }}>
                <Stack>
                    <Typography variant={`h5`} fontWeight={650} color={`var(--main)`}>Employees</Typography>
                </Stack>
                <Stack padding={2}>
                    <BaseTable columns={columns} rows={rows}/>
                </Stack>
            </Card>
        </Container>
        {
            modal.isOpen && <BaseDialog open={modal.isOpen} {...modal}/>
        }
    </React.Fragment>
        ;
};

export default Employee;