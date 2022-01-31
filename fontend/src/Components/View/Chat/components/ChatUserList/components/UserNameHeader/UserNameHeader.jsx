import React from "react";
import {Avatar, Stack, Typography} from "@mui/material";

const UserNameHeader = ({data}) => {
    return (
        <Stack direction={`row`} gap={1.5} padding={1} sx={{cursor: "pointer"}}>
            <Stack>
                <Stack width={`40px`} height={`40px`} borderRadius={`50%`} boxShadow={3}>
                    <Avatar
                        id={data._id + `-photoView`}
                        src={data.avatar}
                        alt={`Profile`}
                        variant={`circular`}
                        sx={{width: `100%`, height: `100%`}}
                    />
                </Stack>
            </Stack>
            <Stack flex={1}>
                <Typography fontSize={`16px`} fontWeight={`550`} color={`#000B`}>
                    {`${data.firstName || ``} ${data.lastName || ``}`}
                </Typography>
                <Typography fontSize={`10px`} fontWeight={`550`} color={`#000A`}>
                    {`${data.designation || `designation`}, ${data.positionType || ``}`}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default UserNameHeader;