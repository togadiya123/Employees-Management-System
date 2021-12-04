import React from "react";
import {Card, Container} from "@mui/material";

import Table from "../../CommonComponents/Tabel";

const Leave = () => {
    return <React.Fragment>
        <Container sx={{py: 2}}>
            <Card sx={{
                width: `100%`,
                maxWidth: `650px`,
                mx: `auto`,
                boxShadow: 3,
            }}>
                <Table/>
            </Card>
        </Container>
    </React.Fragment>;
};

export default Leave;