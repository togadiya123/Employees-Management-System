import React, {useEffect, useState} from "react";
import {Card, Container} from "@mui/material";

import BaseTable from "../../CommonComponents/BaseTable";
import {LEAVE_TABLE} from "./utiles";
import {getLeaveList} from "../../../Store/actions/action";
import {useDispatch} from "react-redux";


const Leave = () => {

    const [columns, setColumns] = useState(LEAVE_TABLE());
    const [rows, setRows] = useState([
        [
            {
                id: 'e',
                value: '33',
            },
            {
                id: '2',
                value: '33',
            },
            {
                id: 'e3',
                value: '33',
            },
            {
                id: 'e4',
                value: '33',
            },
            {
                id: '554',
                value: '33',
            },
            {
                id: 'e2345',
                value: '33',
            },
            {
                id: '59954',
                value: '33',
            },
            {
                id: 'e230045',
                value: '33',
            },
        ]
    ]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLeaveList(
            {
                sortBy: {
                    "updatedAt": 1
                },
                limit: 10
            }
        ));
    }, [])

    return <React.Fragment>
        <Container sx={{py: 2}}>
            <Card sx={{
                width: `100%`,
                maxWidth: `650px`,
                mx: `auto`,
                boxShadow: 3,
            }}>
                <BaseTable columns={columns} rows={rows}/>
            </Card>
        </Container>
    </React.Fragment>;
};

export default Leave;