import React from 'react';
import {Stack} from "@mui/material";
import UserNameHeader from "../../../ChatUserList/components/UserNameHeader/UserNameHeader";
import {useSelector} from "react-redux";
import ChatInputBox from "./components/ChatInputBox/ChatInputBox";

const ChatBoxContainer = ({}) => {

    const selectedChat = useSelector(store => store.pageData.chat.selectedChat) || {}

    return (
        <Stack flex={1}>
            <Stack boxShadow={1} sx={{backgroundColor: `var(--mainLBlur)`}}>
                <UserNameHeader data={selectedChat}
                                padding={`9.75px 20px`}
                                sx={{
                                    imageWidth: `40px`,
                                    imageHeight: `40px`
                                }}
                />
            </Stack>
            <Stack flex={1}>

            </Stack>
            <Stack sx={{backgroundColor: `var(--mainLBlur)`}} padding={`8px 20px`}>
                <ChatInputBox data={selectedChat}/>
            </Stack>
        </Stack>
    );
};

export default ChatBoxContainer;