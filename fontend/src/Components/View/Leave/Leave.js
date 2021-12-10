import React, {useEffect, useState} from "react";
import {Card, Container} from "@mui/material";

import BaseTable from "../../CommonComponents/BaseTable";
import {LEAVE_TABLE, getRows} from "./utiles";
import {getLeaveList} from "../../../Store/actions/action";
import {useDispatch, useSelector} from "react-redux";
import config from "../../../config";


const Leave = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state?.user);
    const leave = useSelector(state => state?.pageData?.leave);

    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        console.log("leave", leave);
        columns.length && leave && leave.data && setRows(()=>getRows(columns,leave.data))
    }, [leave])

    useEffect(() => {
        dispatch(getLeaveList(
            {
                sortBy: {
                    "updatedAt": 1
                },
                limit: 10
            }
        ))
    }, []);

    useEffect(() => {
        console.log("user");
        user && user.positionType && setColumns(() => LEAVE_TABLE().filter(eachColumn => (user.positionType === config.POSITION_TYPE_I && eachColumn.adminView) || (user.positionType === config.POSITION_TYPE_II && eachColumn.userView)))
    }, [user]);


    return <React.Fragment>
        <Container sx={{py: 2, px: {sm: 0,}}} id={"234567"}>
            <Card sx={{
                width: `100%`,
                maxWidth : `fit-content`,
                mx: `auto`,
                p: `1rem`,
                boxShadow: 3,
            }}>
                wertyhj
                <BaseTable columns={columns} rows={rows}/>
            </Card>
        </Container>
    </React.Fragment>;
};

export default Leave;