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
import { StartNew, Auto } from "../components/creature-creator-cards";

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
                    <Button onClick={handleButtonClick}>Go Back</Button>
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
                            placeholder="Creature Name"
                            size="xl"
                            width="50%"
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
                            <Grid.Container gap={2} justify="space-evenly" css={{ width: "50%"}}>
                                <Grid>
                                    <Dropdown>
                                        <Dropdown.Button flat>STR</Dropdown.Button>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Grid>
                                <Grid>
                                    <Dropdown>
                                        <Dropdown.Button flat>STR</Dropdown.Button>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Grid>
                                <Grid>
                                    <Dropdown>
                                        <Dropdown.Button flat>STR</Dropdown.Button>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Grid>
                                <Grid>
                                    <Dropdown>
                                        <Dropdown.Button flat>STR</Dropdown.Button>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Grid>
                                <Grid>
                                    <Dropdown>
                                        <Dropdown.Button flat>STR</Dropdown.Button>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Grid>
                                <Grid>
                                    <Dropdown>
                                        <Dropdown.Button flat>STR</Dropdown.Button>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                            <Dropdown.Item>Example</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Grid>
                            </Grid.Container>
                        </div>
                    </div>
                </Container>
            }
        </NextUIProvider>
    );
};

export default CreatureCreator;