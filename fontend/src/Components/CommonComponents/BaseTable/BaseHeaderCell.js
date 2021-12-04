import React from "react";
import {TableCell} from "@mui/material";

const BaseHeaderCell = ({data}) => {
    return <TableCell>
        {data.label}
    </TableCell>
};
export default BaseHeaderCell;