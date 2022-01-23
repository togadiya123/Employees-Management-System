import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Card, Container, Stack, Typography} from "@mui/material";

import HorizontalLine from "../../CommonComponents/HorizontalLine";
import FromGrid from "../../CommonComponents/FromGrid";
import {editableFieldName, GET_PROFILE_FORM_DATA} from "./Profile.utiles";
import {getUserInfo, updateProfile, uploadImageProfile} from "../../../Store/actions/action";
import {commonBlurHandler, commonChangeHandler} from "../../CommonComponents/Form/utiles";

const Profile = () => {

    const dispatch = useDispatch();

    const [profile, setProfile] = useState([]);
    const [changedProfileData, setChangedProfileData] = useState({changedValue: [], originalData: {}})

    const updateUserProfile = async () => {
        await dispatch(updateProfile({obj: changedProfileData.changedValue})).then((state) => {
            setChangedProfileData(() => ({
                changedValue: [],
                originalData: state?.user
            }));
        })
    };

    const onChangeHandler = (e) => commonChangeHandler(profile, setProfile, e, ``, true, async (formData, id) => {
        if (id === `avatar-imageUpload`)
            await dispatch(uploadImageProfile({
                fileObj: formData.find(e => e.id === `avatar`).value,
                userId: changedProfileData.originalData._id
            })).then((state) => {
                formData = formData.map(e => e.id === `avatar` ? {...e, value: state?.pageData?.profile?.fileUrl} : e);
            })
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
                        p: {xs: 1, sm: 3},
                        boxShadow: 3,
                        gap: 1.5,
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
                    <Button
                        variant="contained"
                        disabled={changedProfileData.changedValue.length === 0}
                        sx={{
                            width: `250px`,
                            maxWidth: `100%`,
                            backgroundColor: `var(--main)`,
                            alignSelf: `center`,
                            "&:hover": {
                                backgroundColor: `var(--mainHover)`,
                            },
                            "&:disabled": {
                                color: `white`,
                                backgroundColor: `var(--mainBlur)`,
                            }
                        }}
                        onClick={updateUserProfile}
                    >
                        Save
                    </Button>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default Profile;