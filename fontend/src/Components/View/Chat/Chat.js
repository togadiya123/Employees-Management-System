import React from "react";
import {Button, Card, Container, Stack, Typography} from "@mui/material";
import ChatUserList from "./components/ChatUserList/ChatUserList";
import ChatContainer from "./components/ChatContainer/ChatContainer";

const Chat = () => {



    return (
        <React.Fragment>
            <Container sx={{py: 2, px: {sm: 0}}}>
                <Card
                    sx={{
                        width: `100%`,
                        maxWidth: `1000px`,
                        height: `100%`,
                        mx: `auto`,
                        boxShadow: 3,
                        display: `flex`,
                        flexDirection: `row`
                    }}
                >
                    <ChatUserList/>
                    <ChatContainer/>
                </Card>
            </Container>
        </React.Fragment>
    );
};

export default Chat