import React, {useEffect, useState} from 'react';
import {Icon, Stack, Typography} from "@mui/material";
import {getAllEmployeeListForChat} from "../../../../../Store/actions/action";
import {useDispatch, useSelector} from "react-redux";
import UserNameHeader from "./components/UserNameHeader/UserNameHeader";
import {QuickreplyIcon} from "../../../../../HelperFunction/icons";

const ChatUserList = () => {

    const dispatch = useDispatch();

    const employees = useSelector(store => store?.pageData?.chat?.employeesList) || []

    useEffect(() => {
        dispatch(getAllEmployeeListForChat())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Stack
            width={{xs: `100%`, sm: `280px`}}
            gap={1}
            padding={2}
        >
            <Stack direction={"row"} gap={2} alignItems={`center`}>
                <Icon>
                    <QuickreplyIcon sx={{color: `var(--mainBlur)`}}/>
                </Icon>
                <Typography fontSize={`21px`} fontWeight={`550`} sx={{color: `var(--mainBlur)`}}>
                    {`Direct`}
                </Typography>
            </Stack>
            <Stack>
                {
                    Array.isArray(employees) ?
                        employees.map(
                            eachEmployee => <UserNameHeader
                                key={eachEmployee._id}
                                data={eachEmployee}/>
                        ) :
                        <></>
                }
            </Stack>
        </Stack>
    );
};

export default ChatUserList;