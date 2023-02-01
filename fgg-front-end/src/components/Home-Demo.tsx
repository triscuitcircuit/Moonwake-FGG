import React from "react";
import {
    Avatar,
    Collapse,
    Container,
    Grid,
    NextUIProvider,
    createTheme,
    Pagination
} from "@nextui-org/react";
import {Card1, Card2, Card3} from "../Display/Card";

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
            <Container justify="center">
                <Collapse.Group>
                    <Collapse
                        title="Recently Created Creatures"
                        subtitle="Logged in User"
                        contentLeft={
                            <Avatar
                                size="lg"
                                color="secondary"
                                text="User"
                                bordered
                                squared
                            />
                        }
                        expanded
                    >
                        <Grid.Container gap={2} justify="center">
                            <Grid xs={12} sm={4}>
                                <Card3 />
                            </Grid>
                            <Grid>
                                <Container justify="flex-end">
                                    <Pagination total={14} initialPage={6} />
                                </Container>
                            </Grid>
                        </Grid.Container>
                    </Collapse>
                </Collapse.Group>
            </Container>
        </NextUIProvider>
    )
}

export default HomeDemo;