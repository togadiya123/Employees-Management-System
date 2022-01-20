import {Stack} from "@mui/material";

const HorizontalLine = () => {
    return (
        <Stack>
            <Stack height={`2px`} width={`100%`} backgroundColor={`var(--mainBlur)`} my={1} borderRadius={`30px`}/>
        </Stack>
    )
}

export default HorizontalLine;