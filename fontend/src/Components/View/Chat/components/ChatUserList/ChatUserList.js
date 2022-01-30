import React, {useEffect, useState} from 'react';
import {Stack} from "@mui/material";
import {getAllEmployeeListForChat} from "../../../../../Store/actions/action";
import {useDispatch} from "react-redux";

const ChatUserList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEmployeeListForChat())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Stack
            width={{xs: `100%`, md: `280px`}}
            backgroundColor={`red`}
        >

        </Stack>
    );
};

export default ChatUserList;