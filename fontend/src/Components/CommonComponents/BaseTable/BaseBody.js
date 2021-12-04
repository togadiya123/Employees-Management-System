import React from "react";
import {TableRow} from '@mui/material';
import BaseBodyCell from "./BaseBodyCell";

const BaseBody = ({rows}) => {
    return <React.Fragment>
        {
            rows.map((eachRow, index) => <TableRow key={index}>
                {
                    eachRow.map(eachRowCell => <BaseBodyCell data={eachRowCell} key={eachRowCell.id}/>)
                }
            </TableRow>)
        }
    </React.Fragment>
};

export default BaseBody;