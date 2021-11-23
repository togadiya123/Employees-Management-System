import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {styled} from '@mui/material';

const Loader = () => {

    const [isLoading, setIsLoading] = useState(false);

    const loaderStatus = useSelector(state => state.loader.status || false);

    const Container = styled('div')(({theme}) => (
        {
            width: "100vw",
            height: "100vh",
            backgroundColor: "var(--white70)",
            display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: theme.zIndex.tooltip + 500,
            transform: "translate(-50%, -50%)",
            justifyContent: "center",
            alignItems: "center",
        }
    ));

    const Square = styled('div')(() => (
        {
            width: "60px",
            height: "60px",
            display: "flex",
            border: "3px solid var(--main)",
            animation: "rotating 2.3s infinite",
            background: "linear-gradient(to right, var(--main) 50%, var(--white70) 50%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "right bottom",
            transform: "rotate(-90deg)",

            "@keyframes rotating": {
                "0%": {
                    backgroundPosition: "right bottom",
                },
                "30%": {
                    backgroundPosition: "left bottom",
                    transform: "rotate(-90deg)",
                },
                "50%": {
                    backgroundPosition: "left bottom",
                    transform: "rotate(90deg)",
                },
                "80%": {
                    backgroundPosition: "right bottom",
                    transform: "rotate(90deg)",
                },
                "100%": {
                    transform: "rotate(270deg)",
                    backgroundPosition: "right bottom",
                },
            }
        }
    ));

    useEffect(() => {
        setIsLoading(() => loaderStatus);
    }, [loaderStatus]);
    return isLoading ? <Container>
        <Square/>
    </Container> : <></>
};

export default Loader;