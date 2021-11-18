import React from "react";
import {Stack, Typography} from "@mui/material";
import {FOOTER_STRING_ARRAY} from "../../../HelperFunction/staticList";

const Footer = () => {

    return <React.Fragment>
        <Stack direction={`row`}
               sx={{
                   boxShadow: 10,
                   px: {xs: 1, sm: 2},
                   py: {xs: 0.5, sm: 1.5},
                   justifyContent: `space-between`,
                   flexWrap: `wrap`,
               }}>
            {FOOTER_STRING_ARRAY.map((eachString, index) => <Typography id={`footerString${index}`}
                                                                        key={`footerString${index}`}
                                                                        variant={`subtitle1`}
                                                                        sx={{display: `flex`}}>
                    {eachString}
                </Typography>
            )}
        </Stack>
    </React.Fragment>;
};

export default Footer;