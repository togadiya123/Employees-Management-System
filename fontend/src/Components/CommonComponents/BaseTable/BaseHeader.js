import React from "react";
import {TableHead, TableRow} from "@mui/material";
import BaseHeaderCell from "./BaseHeaderCell";

const BaseHeader = ({columns}) => {
    return <TableHead>
        <TableRow>
            {
                columns.map(eachColumnCell => <BaseHeaderCell data={eachColumnCell} key={eachColumnCell.id}/>)
            }
        </TableRow>
    </TableHead>;
};

export default BaseHeader;