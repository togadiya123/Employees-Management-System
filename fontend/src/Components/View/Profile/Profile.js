import React, {useState} from "react";
import {Card, Container, Stack, Typography} from "@mui/material";

import HorizontalLine from "../../CommonComponents/HorizontalLine";
import FromGrid from "../../CommonComponents/FromGrid";
import {GET_PROFILE_FORM_DATA} from "./Profile.utiles";

const Profile = () => {

    const [profile, seProfile] = useState(GET_PROFILE_FORM_DATA);


    return (
        <React.Fragment>
            <Container sx={{py: 2, px: {sm: 0}}}>
                <Card
                    sx={{
                        width: `100%`, maxWidth:`800px`,mx: `auto`, p: 3, boxShadow: 3, gap: 1, display: `flex`, flexDirection: `column`
                    }}
                >
                    <Stack>
                        <Typography variant={`h5`}
                                    fontWeight={650}
                                    color={`var(--main)`}
                                    align={`center`}>
                            Profile
                        </Typography>
                    </Stack>
                    <HorizontalLine/>
                    <FromGrid formData={profile}/>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default Profile;