import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Card, Container, Stack, Typography} from "@mui/material";

import HorizontalLine from "../../CommonComponents/HorizontalLine";
import FromGrid from "../../CommonComponents/FromGrid";
import {GET_PROFILE_FORM_DATA} from "./Profile.utiles";
import {getUserInfo, uploadImageProfile} from "../../../Store/actions/action";

const Profile = () => {

    const dispatch = useDispatch();

    const [profile, setProfile] = useState([]);

    useEffect(() => {

        dispatch(uploadImageProfile());

        dispatch(getUserInfo()).then(({user}) => {
            user.haveUserInfo &&
            setProfile(() => GET_PROFILE_FORM_DATA(user))
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <Container sx={{py: 2, px: {sm: 0}}}>
                <Card
                    sx={{
                        width: `100%`,
                        maxWidth: `800px`,
                        mx: `auto`,
                        p: 3,
                        boxShadow: 3,
                        gap: 1,
                        display: `flex`,
                        flexDirection: `column`
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
                    <FromGrid formData={profile} formSx={{rowGap: 3}}/>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default Profile;