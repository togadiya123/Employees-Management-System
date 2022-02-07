import React, {useState} from 'react';
import {IconButton, Stack, styled, TextField} from "@mui/material";

import {SendIcon} from "../../../../../../../../../HelperFunction/icons";

const ChatInputBox = ({data, onSend = e => e}) => {

    const [message, setMessage] = useState({textValue: ``});

    const messageTextOnChangeHandler = (event) => {
        setMessage((message) => ({...message, textValue: event.target.value}))
    };

    const sendClickHandler = () => {
        onSend(message)
        setMessage({textValue: ``});
    };

    return (
        <Stack direction={`row`} gap={1}>
            <Stack flex={1}>
                <TextField
                    sx={{
                        ".MuiOutlinedInput-notchedOutline": {
                            border: `2px solid var(--mainELBlur)`,
                            borderRadius: `8px`,
                        },
                        "& input:valid:focus + fieldset": {
                            border: `2px solid var(--mainELBlur)`,
                            borderRadius: `6px`,
                        },
                        "& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                                border: `2px solid var(--mainELBlur)`,
                                borderRadius: `8px`,
                            }
                        }
                    }}
                    size={`small`}
                    placeholder={`Message to ${data.firstName} ${data.lastName}`}
                    value={message.textValue}
                    onChange={messageTextOnChangeHandler}
                />
            </Stack>
            <Stack>
                <IconButton sx={{color: `var(--mainBlur)`}} onClick={sendClickHandler}>
                    <SendIcon/>
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default ChatInputBox;