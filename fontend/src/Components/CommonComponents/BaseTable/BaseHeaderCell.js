import React from "react";
import {TableCell} from "@mui/material";

const BaseHeaderCell = ({data,sx={}}) => {
    return <TableCell sx={sx}>
        {data.label}
    </TableCell>
};
export default BaseHeaderCell;