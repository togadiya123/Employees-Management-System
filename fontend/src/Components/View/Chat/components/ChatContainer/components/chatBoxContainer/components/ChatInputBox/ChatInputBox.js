import React from 'react';
import {IconButton, Stack, styled} from "@mui/material";

import {SendIcon} from "../../../../../../../../../HelperFunction/icons";

const ChatInputBox = ({data}) => {

    const Input = styled('input')(({}) => (
        {
            fontSize: 16,
            padding: `10px`,
            backgroundColor: `#0000`,
            borderRadius: `8px`,
            border: `2px solid var(--mainELBlur)`,
            outline: `none`,
        }
    ));

    return (
        <Stack direction={`row`} gap={1}>
            <Stack flex={1}>
                <Input placeholder={`Message to ${data.firstName} ${data.lastName}`}/>
            </Stack>
            <Stack>
                <IconButton sx={{color: `var(--mainBlur)`}}>
                    <SendIcon/>
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default ChatInputBox;