import React from "react";
import {TableCell, Typography, Chip, Stack, Avatar} from "@mui/material";

const BaseBodyCell = ({data}) => {
    return <TableCell>
        {
            data.type === `chip` ?
                <Chip label={data.value} sx={{width: `100%`}} color={data.color || `success`}/> :
                data.type === `image` ?
                    <Stack>
                        <Avatar src={data.value}/>
                    </Stack> :
                    <Typography variant={`subtitle2`} sx={{whiteSpace: `nowrap`}} align={data.align || `left`}>
                        {data.value}
                    </Typography>
        }
    </TableCell>
};
export default BaseBodyCell;