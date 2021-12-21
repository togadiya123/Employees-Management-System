import React, {useEffect, useState} from "react";
import {Card, Container, IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';

import BaseTable from "../../CommonComponents/BaseTable";
import {LEAVE_TABLE, getRows} from "./utiles";
import {getLeaveInfo, getLeaveList} from "../../../Store/actions/action";
import config from "../../../config";
import BaseDialog from "../../CommonComponents/BaseDialog";
import LeaveInformationModalBody from "./LeaveInformationModalBody";

const Leave = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state?.user);
    const leave = useSelector(state => state?.pageData?.leave);

    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const [modal, setModal] = useState({
        isOpen: false, onClose: () => {
            setModal(e => ({...e, isOpen: false}))
        }
    })

    const actionButtonHandler = (e) => {
        dispatch(getLeaveInfo({taskId: e._id || ''})).then((state) => {
            setModal(modal => ({
                ...modal,
                isOpen: true,
                header: `Leave Information`,
                body: <LeaveInformationModalBody data={state?.pageData?.leave?.specificLeaveInfo || {}}/>
            }))
        });
    };

    useEffect(() => {
        columns.length && leave && leave.data && setRows(() => getRows(columns, leave.data, (e) => {
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
    }, [leave])

    useEffect(() => {
        dispatch(getLeaveList({
            sortBy: {
                "updatedAt": 1
            }, limit: 10
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        user && user.positionType && setColumns(() => LEAVE_TABLE().filter(eachColumn => (user.positionType === config.POSITION_TYPE_I && eachColumn.adminView) || (user.positionType === config.POSITION_TYPE_II && eachColumn.userView)))
    }, [user]);

    return <React.Fragment>
        <Container sx={{py: 2, px: {sm: 0,}}} id={"234567"}>
            <Card sx={{
                width: `100%`, maxWidth: `fit-content`, mx: `auto`, p: `1rem`, boxShadow: 3,
            }}>
                <BaseTable columns={columns} rows={rows}/>
            </Card>
        </Container>
        {modal.isOpen && <BaseDialog open={modal.isOpen} {...modal}/>}
    </React.Fragment>;
};

export default Leave;