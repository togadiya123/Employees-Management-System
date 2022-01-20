import React, {useRef} from "react";
import {TextField, Badge, Avatar, IconButton, Stack} from "@mui/material";
import {PhotoCameraIcon} from "../../../../HelperFunction/icons";

const ImageUpload = ({fieldSx = {}, field, id, onFocus, onBlur, onClick, onChange}) => {

    const imageInputUseRef = useRef(null);

    const pictureUploadButtonClickHandler = () => {
        imageInputUseRef.current.click()
    };

    return (
        <React.Fragment>
            <Stack flex={1} justifyContent={`center`} alignItems={`center`}>
                <TextField
                    type={`file`}
                    sx={{display: `none`}}
                    id={id}
                    inputProps={{
                        ref: imageInputUseRef,
                        accept: "image/jpg,image/jpeg,image/png"
                    }}
                    onChange={onChange}
                />
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
                                <IconButton
                                    aria-label="upload picture"
                                    component="span"
                                    size={`small`}
                                    onClick={pictureUploadButtonClickHandler}
                                    sx={{
                                        position: `absolute`,
                                        right: 6,
                                        bottom: 6,
                                        backgroundColor: `var(--main)`,
                                        '&:hover': {
                                            backgroundColor: `var(--mainHover)`,
                                        },
                                        color: `white`,
                                    }}
                                >
                                    <PhotoCameraIcon fontSize={`small`}/>
                                </IconButton>
                            </Stack>
                        </Stack>
                    )
                }
            </Stack>
        </React.Fragment>
    );
}

export default ImageUpload