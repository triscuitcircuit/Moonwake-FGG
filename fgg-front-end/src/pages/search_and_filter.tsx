import {Button, Container, Grid, Input, NextUIProvider, Text, Modal} from "@nextui-org/react";
// @ts-ignore
import {HorizontalSlider, VerticalSlider} from "../components/Sliders";
import {CharCard, ConCard, DexCard, IntCard, StrengthCard, WisCard} from "../components/creature-creator-cards";
import React, {useEffect, useState} from "react";
import {createTheme} from "@nextui-org/react";
import CreatureDatabase from "../pages/creature-database";

const theme = createTheme({
    type: "dark",
});


const SearchAndFilter: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth * 1.5);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        // TODO
        // Create a string like ?name=val etc based off attbValPairs and set searchQuery to it
        const keys = attbValPairs.map(item => item.key);
        const values = attbValPairs.map(item => item.value);
        // have some kind of loop for this to get everything?
        setSearchQuery(keys[0]+values[0]);
        setIsModalOpen(true);
    };

    // The list of attributes and the values the user gives them
    const [attbValPairs, setAVpairs] = useState([
        { key: "?name=", value: ""},
        { key: "?xp_val=", value: ""},
        { key: "?m_size=", value:""},
        { key: "?m_ac=", value:""}
    ]);

    // updates attbValPairs at key: string with string user passes in (called below in an Input)
    const handleSpecificValueChange = (key: string, newValue: string) => {
        const itemIndex = attbValPairs.findIndex(item => item.key === key);
        if (itemIndex !== -1) {
            const newList = [...attbValPairs];
            newList[itemIndex] = { ...newList[itemIndex], value: newValue };
            setAVpairs(newList);
        }
    };

    // searchQuery that will be passed to creature-database in the modal window
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <NextUIProvider theme={theme}>
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
                        value={attbValPairs.find(item => item.key === "?name=")?.value || ""}
                        onChange={event => handleSpecificValueChange("?name=", event.target.value)}
                        width="50%"
                        placeholder="Creature Name"
                        size="xl"
                    />
                    <Button onPress={openModal}>Go!</Button>
                    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <CreatureDatabase searchQuery={searchQuery} />
                    </Modal>
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
                                value={attbValPairs.find(item => item.key === "?m_ac=")?.value || ""}
                                onChange={event => handleSpecificValueChange("?m_ac=", event.target.value)}
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
                                // create a responsive width for the cards
                                width: width > 1500 ? "60%" : "80%",
                                border: "1px solid white",
                                marginTop: "1%",
                                justifyContent: "center",
                                alignItems: "center",
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
                                width: width > 1500 ? "60%" : "80%",
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
                                width: width > 1500 ? "60%" : "80%",
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
                        <Grid.Container gap={1} justify="space-around" css={{ width: width > 1500 ? "60%" : "80%" }}>
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
                                width: width > 1500 ? "60%" : "80%",
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
                            display: "flex",
                            width: "100%",
                            border: "1px solid white",
                        }}
                    >

                    </div>
                </div>
            </Container>
        </NextUIProvider>
    );
};

export default SearchAndFilter;