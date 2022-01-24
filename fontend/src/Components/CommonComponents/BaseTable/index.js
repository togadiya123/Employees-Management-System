import React from "react";
import {TableContainer, Table} from '@mui/material';
import BaseHeader from "./BaseHeader";
import BaseBody from "./BaseBody";

const BaseTable = ({columns, rows}) => {
    return (
        <TableContainer>
            <Table>
                <BaseHeader columns={columns}/>
                <BaseBody rows={rows}/>
            </Table>
        </TableContainer>
    );
};

export default BaseTable;