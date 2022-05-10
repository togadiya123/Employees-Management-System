import React from 'react';
import {Stack} from "@mui/material";
import {useSelector} from "react-redux";

import ChatBoxContainer from "./components/chatBoxContainer/chatBoxContainer";
import ChatDefaultContainer from "./components/chatDefaultContainer/chatDefaultContainer";

const ChatContainer = () => {

    const chatSelected = useSelector(store => store.pageData.chat.chatSelected);

    return (
        <Stack
            flex={2}
        >
            {
                chatSelected ?
                    <ChatBoxContainer/> :
                    <ChatDefaultContainer/>
            }
        </Stack>
    );
};

export default ChatContainer;