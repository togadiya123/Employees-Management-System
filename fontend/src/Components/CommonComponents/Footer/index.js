import React from "react";
import {Stack, Typography} from "@mui/material";
import {FOOTER_STRING_ARRAY} from "../../../HelperFunction/staticList";

const Footer = () => {

    return <React.Fragment>
        <Stack direction={`row`} sx={{
            padding: 2,
            justifyContent: `space-between`,
            flexWrap: `wrap`,
            gap: 0.5
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