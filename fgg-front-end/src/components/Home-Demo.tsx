// Defines the look and style of the home page

import React from "react";
import {
    Container,
    Grid,
    NextUIProvider,
    createTheme,
} from "@nextui-org/react";
import {Card1, Card2} from "../Display/Card";

const theme = createTheme({
    type: "dark",
});

const HomeDemo = () => {
    return (
        <NextUIProvider theme={theme}>
            <Container justify="center">
                <Grid.Container gap={2} justify="center">
                    <Grid xs={12} sm={4}>
                        <Card1 />
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <Card2 />
                    </Grid>
                </Grid.Container>
            </Container>
        </NextUIProvider>
    )
}

export default HomeDemo;