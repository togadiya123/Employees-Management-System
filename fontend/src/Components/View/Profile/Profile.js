import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Card, Container, Stack, Typography} from "@mui/material";

import HorizontalLine from "../../CommonComponents/HorizontalLine";
import FromGrid from "../../CommonComponents/FromGrid";
import {editableFieldName, GET_PROFILE_FORM_DATA} from "./Profile.utiles";
import {getUserInfo, uploadImageProfile} from "../../../Store/actions/action";
import {commonBlurHandler, commonChangeHandler} from "../../CommonComponents/Form/utiles";

const Profile = () => {

    const dispatch = useDispatch();

    const [profile, setProfile] = useState([]);
    const [changedProfileData, setChangedProfileData] = useState({changedValue: [], originalData: {}})

    const onChangeHandler = (e) => commonChangeHandler(profile, setProfile, e, ``, true, (formData, id) => {

        console.log(formData.find(e => e.id === `avatar`).value);

        if (id === `avatar-imageUpload`)
            dispatch(uploadImageProfile({
                fileObj: formData.find(e => e.id === `avatar`).value,
                userId: changedProfileData.originalData._id
            }))
        setChangedProfileData((e) => ({
            ...e,
            changedValue: formData.filter(
                eachField => (editableFieldName().includes(eachField.id) && eachField.value !== e.originalData[eachField.id])).map(
                e => ({
                    key: e.id,
                    value: e.value,
                }))
        }))
        return formData;
    });
    const onBlurHandler = (e) => commonBlurHandler(profile, setProfile, e, ``, true);

    useEffect(() => {

        // dispatch(uploadImageProfile());

        dispatch(getUserInfo()).then(({user}) => {
            if (user.haveUserInfo) {
                setProfile(() => GET_PROFILE_FORM_DATA(user))
                setChangedProfileData((e) => ({...e, originalData: user}))
            }
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
                    <FromGrid
                        formData={profile}
                        formSx={{rowGap: 3}}
                        onBlur={onBlurHandler}
                        onChange={onChangeHandler}
                    />
                    <Button>
                        Save
                    </Button>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default Profile;