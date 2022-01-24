import React, {useRef} from "react";
import {TextField, Avatar, IconButton, Stack} from "@mui/material";
import {PhotoCameraIcon} from "../../../../HelperFunction/icons";

const ImageUpload = ({fieldSx = {}, disabled = false, field, id, onChange}) => {

    const imageInputUseRef = useRef(null);

    const pictureUploadButtonClickHandler = () => {
        imageInputUseRef.current.click()
    };

    const onChangeHandler = (e) => {
        onChange({
            target: {
                id: e.target.id,
                value: e.target.files[0],
            }
        })
    };

    return (
        <React.Fragment>
            <Stack flex={1} justifyContent={`center`} alignItems={`center`}>
                {
                    !disabled &&
                    <TextField
                        type={`file`}
                        sx={{display: `none`}}
                        id={id}
                        inputProps={{
                            ref: imageInputUseRef,
                            accept: "image/jpg,image/jpeg,image/png",
                        }}
                        onChange={onChangeHandler}
                    />
                }
                {
                    (fieldSx.type === `profile` || !fieldSx.type) &&
                    (
                        <Stack>
                            <Stack
                                flex={1}
                                sx={{
                                    borderRadius: `50%`,
                                    position: `relative`,
                                    boxShadow: 3,
                                }}
                            >
                                <Avatar
                                    id={id + `-photoView`}
                                    src={field.value}
                                    alt={`Profile`}
                                    variant={`circular`}
                                    sx={{
                                        ...(fieldSx.avatarSx || {})
                                    }}
                                />
                                {
                                    !disabled && <IconButton
                                        aria-label="upload picture"
                                        component="span"
                                        size={`small`}
                                        onClick={pictureUploadButtonClickHandler}
                                        sx={{
                                            position: `absolute`,
                                            right: 9,
                                            bottom: 9,
                                            backgroundColor: `var(--main)`,
                                            '&:hover': {
                                                backgroundColor: `var(--mainHover)`,
                                            },
                                            color: `white`,
                                        }}
                                    >
                                        <PhotoCameraIcon fontSize={`small`}/>
                                    </IconButton>
                                }
                            </Stack>
                        </Stack>
                    )
                }
            </Stack>
        </React.Fragment>
    );
}

export default ImageUpload