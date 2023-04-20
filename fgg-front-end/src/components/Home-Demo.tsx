// Defines the look and style of the home page

import React from "react";
import {
    Container,
    Grid,
    NextUIProvider,
    createTheme,
    Text,
} from "@nextui-org/react";
import {Card1, Card2} from "../Display/Card";

const theme = createTheme({
    type: "dark",
});

interface DataTestIDProps {
    'data-testid'?: string;
}

interface HomeDemoProps extends DataTestIDProps {}

const HomeDemo: React.FC<HomeDemoProps> = ({'data-testid': testID}) => {
    return (
        <NextUIProvider theme={theme}>
            <Container justify="center" data-testid={testID}>
                <Text h1 css={{ textAlign: "center" }}>Welcome to M3</Text>
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