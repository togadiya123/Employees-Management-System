import React from "react";
import {TableRow, TableBody} from '@mui/material';
import BaseBodyCell from "./BaseBodyCell";

const BaseBody = ({rows}) => {
    return (
        <TableBody>
            {
                rows.map((eachRow, index) =>
                    <TableRow key={index}>
                        {
                            eachRow.map(eachRowCell => <BaseBodyCell data={eachRowCell} key={eachRowCell.id}/>)
                        }
                    </TableRow>
                )
            }
        </TableBody>
    );
};

export default BaseBody;