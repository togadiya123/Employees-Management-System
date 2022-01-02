import React from "react";
import {TableCell, Typography, Chip} from "@mui/material";

const BaseBodyCell = ({data}) => {
    return <TableCell>
        {
            data.type === `chip` ?
                <Chip label={data.value} sx={{width: `100%`}} color={data.color || `success`}/> :
                <Typography variant={`subtitle2`} sx={{whiteSpace: `nowrap`}} align={data.align || `left`}>
                    {data.value}
                </Typography>
        }
    </TableCell>
};
export default BaseBodyCell;