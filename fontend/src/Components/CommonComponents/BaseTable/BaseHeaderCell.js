import React from "react";
import {TableCell, Typography} from "@mui/material";

const BaseHeaderCell = ({data, sx = {}}) => {
    return <TableCell sx={sx}>
        <Typography variant={`subtitle1`} sx={{whiteSpace: `nowrap`}} fontWeight={550} color={"#000C"}>
            {data.label}
        </Typography>
    </TableCell>
};
export default BaseHeaderCell;