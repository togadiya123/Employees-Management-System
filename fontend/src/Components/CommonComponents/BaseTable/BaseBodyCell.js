import React from "react";
import {TableCell} from "@mui/material";

const BaseBodyCell = ({data}) => {
    return <TableCell>
        {data.value}
    </TableCell>
};
export default BaseBodyCell;