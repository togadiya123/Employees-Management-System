import React, {useEffect, useState} from 'react';
import {Icon, Stack, Typography} from "@mui/material";
import {chatSelection, getAllEmployeeListForChat} from "../../../../../Store/actions/action";
import {useDispatch, useSelector} from "react-redux";
import UserNameHeader from "./components/UserNameHeader/UserNameHeader";
import {QuickreplyIcon} from "../../../../../HelperFunction/icons";

const ChatUserList = () => {

    const dispatch = useDispatch();

    const employees = useSelector(store => store?.pageData?.chat?.employeesList) || []
    const selectedChat = useSelector(store => store?.pageData?.chat?.selectedChat) || []

    const userSelection = (data) => {
        dispatch(chatSelection(data))
    };

    useEffect(() => {
        dispatch(getAllEmployeeListForChat())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Stack
            width={{xs: `100%`, sm: `280px`}}
            boxShadow={2}
        >
            <Stack direction={"row"} gap={2} alignItems={`center`} sx={{backgroundColor: `var(--mainXBlur)`}}
                   padding={`14px 14px`} boxShadow={2}>
                <Icon>
                    <QuickreplyIcon sx={{color: `var(--mainBlur)`}}/>
                </Icon>
                <Typography fontSize={`21px`} fontWeight={`550`} sx={{color: `var(--mainBlur)`}}>
                    {`Direct`}
                </Typography>
            </Stack>
            <Stack padding={`8px 0`} sx={{backgroundColor: `var(--mainLBlur)`}} flex={1}>
                {
                    Array.isArray(employees) ?
                        employees.map(
                            eachEmployee => <UserNameHeader
                                onClick={userSelection}
                                padding={`5px 12px`}
                                isSelected={selectedChat._id === eachEmployee._id}
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