import React from 'react';
import {Stack, Typography} from "@mui/material";

import chat from "../../../../../../../images/chat.svg"

const ChatDefaultContainer = ({}) => {
    return (
        <Stack flex={1} position={"relative"} boxShadow={1} sx={{backgroundColor: `var(--mainLBlur)`}}>
            <Stack position={`absolute`} alignItems={`center`} width={`100%`} top={60}>
                <Stack width={`100%`} height={`150px`} top={20}>
                    <img src={chat} alt={``} width={`100%`} height={`100%`}/>
                </Stack>
            </Stack>
            <Stack flex={1} paddingY={4}>
                <Stack gap={17} justifyContent={`flex-end`} alignItems={`center`} flex={1}>
                    <Stack gap={1}>
                        <Typography align={`center`} fontSize={{xs: 28, md: 30}} fontWeight={550} color={`#000A`}
                                    padding={1.5}>
                            Direct : The Chat System
                        </Typography>
                        <Typography align={`center`} fontSize={13} fontWeight={550} color={`#0009`} maxWidth={400}
                                    paddingX={1.5}>
                            Direct is custom chat system to use send messages person to person or group.
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography align={`center`} fontSize={11} fontWeight={550} color={`#0009`} paddingX={1.5}>
                            The BVM Infotech direct chat system
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ChatDefaultContainer;