import React, { useState } from "react"
import {
    Text,
    NextUIProvider,
    createTheme,
    Container,
    Grid,
    Button,
    Input,
    Card,
    Dropdown,
} from "@nextui-org/react";

import { StartNew, Auto, StrengthCard, ConCard, CharCard, DexCard, WisCard, IntCard } from "../components/creature-creator-cards";
import VerticalRangeSlider from "../components/VerticalRangeSlider";

// @ts-ignore
import { HorizontalSlider, VerticalSlider } from "../components/Sliders.jsx";

const theme = createTheme({
    type: "dark",
});

interface StartNewProps {
    onButtonClick: () => void;
}

const CreatureCreator: React.FC = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <NextUIProvider theme={theme}>
            <Container
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    border: "1px solid white",
                    marginTop: "5%",
                    }}
            >
                <Text h1>Creature Creation Page</Text>
            </Container>
            {isClicked &&
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        border: "1px solid white",
                        marginTop: "5%",
                        }}
                >
                    <Grid.Container
                        gap={2}
                        justify="center"
                        alignItems="center"
                    >
                        <Grid xs={12} sm={4}>
                            <StartNew onButtonClick={handleButtonClick} />
                        </Grid>
                        <Text
                            h2
                            style={{
                                    margin: "5%",
                                }}
                        >
                            OR
                        </Text>
                        <Grid xs={12} sm={4}>
                            <Auto />
                        </Grid>
                    </Grid.Container>
                </Container>
            }
            {!isClicked &&
                <Container>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            border: "1px solid white",
                            justifyContent: "center",
                            alignItems: "center",
                            }}
                    >

                        <Input
                            width="50%"
                            placeholder="Creature Name"
                            size="xl"
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "100%",
                            border: "1px solid white",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                width: "50%",
                                border: "1px solid white",
                                justifyContent: "flex-end",
                                marginTop: "1%",
                                }}
                        >
                            <Input
                                placeholder="Tags (Size, Type, etc.)"
                                size="xl"
                                width="50%"
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "50%",
                                justifyContent: "flex-start",
                                marginTop: "1%",
                                border: "1px solid white"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "50%",
                                    border: "1px solid white",
                                    justifyContent: "space-evenly",
                                    }}
                            >
                                <Input
                                    placeholder="Armor Class"
                                    size="xl"
                                    width="40%"
                                />
                                <Input
                                    placeholder="Health Points"
                                    size="xl"
                                    width="40%"
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                border: "1px solid white",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1%",
                                }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "50%",
                                    border: "1px solid white",
                                    marginTop: "1%",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <div
                                    style={{
                                        flex: "1",
                                        border: "1px solid white",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                    }}
                                >
                                    <Text h3>Armor Class: </Text>
                                </div>
                                <div
                                    style={{
                                        flex: "4",
                                    }}
                                >
                                    <HorizontalSlider />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                border: "1px solid white",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "50%",
                                    border: "1px solid white",
                                    marginTop: "1%",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <div
                                    style={{
                                        flex: "1",
                                        border: "1px solid white",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                    }}
                                >
                                    <Text h3>Health Points: </Text>
                                </div>
                                <div
                                    style={{
                                        flex: "4",
                                    }}
                                >
                                    <HorizontalSlider />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                marginTop: "1%",
                                justifyContent: "center",
                                border: "1px solid white"
                            }}
                        >
                            <div
                                style={{
                                    width: "50%"
                                }}
                            >
                                <Text h3>Attributes</Text>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                marginTop: "1%",
                                justifyContent: "center",
                                border: "1px solid white"
                            }}
                        >
                            <Grid.Container gap={2} justify="space-around" css={{ width: "50%"}}>
                                <Grid>
                                    <StrengthCard />
                                </Grid>
                                <Grid>
                                    <DexCard />
                                </Grid>
                                <Grid>
                                    <ConCard />
                                </Grid>
                                <Grid>
                                    <IntCard />
                                </Grid>
                                <Grid>
                                    <WisCard />
                                </Grid>
                                <Grid>
                                    <CharCard />
                                </Grid>
                            </Grid.Container>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                border: "1px solid white",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "50%",
                                    height: "100%",
                                    border: "1px solid white",
                                    marginTop: "1%",
                                    justifyContent: "space-around",
                                    alignItems: "center"
                                }}
                            >
                                <VerticalSlider />
                                <VerticalSlider />
                                <VerticalSlider />
                                <VerticalSlider />
                                <VerticalSlider />
                                <VerticalSlider />
                            </div>
                        </div>
                        <div
                            style={{
                                width: "100%"
                            }}
                        >
                            <Button onClick={handleButtonClick}>Go Back</Button>
                        </div>
                    </div>
                </Container>
            }
        </NextUIProvider>
    );
};

export default CreatureCreator;