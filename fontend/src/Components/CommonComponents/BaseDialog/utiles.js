import React from "react";
import {Button, Stack, Typography} from "@mui/material";

export const BodyOfSimpleModal = ({bodyText, buttons = []}) => {
    return (
        <Stack gap={2} paddingX={1}>
            <Stack>
                <Typography>
                    {bodyText}
                </Typography>
            </Stack>
            {
                buttons.length && <Stack direction={`row`} paddingX={2} gap={2}>
                    {
                        buttons.map(
                            (eachButton) => (
                                <Button
                                    {...eachButton.buttonProps}
                                    key={eachButton.id}
                                    sx={{flex: `auto`}}
                                >
                                    {eachButton.text}
                                </Button>
                            )
                        )
                    }
                </Stack>
            }
        </Stack>
    )
}