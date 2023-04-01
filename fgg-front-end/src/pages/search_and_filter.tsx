import {Button, Container, Grid, Input, NextUIProvider, Text, Modal, Switch} from "@nextui-org/react";
// @ts-ignore
import {HorizontalSlider, VerticalSlider} from "../components/Sliders";
import {CharCard, ConCard, DexCard, IntCard, StrengthCard, WisCard} from "../components/creature-creator-cards";
import React, {useEffect, useState} from "react";
import {createTheme} from "@nextui-org/react";
import CreatureDatabase from "../pages/creature-database";
import {add} from "husky";

const theme = createTheme({
    type: "dark",
});


const SearchAndFilter: React.FC = () => {

    // searchQuery that will be passed to creature-database in the modal window
    const [searchQuery, setSearchQuery] = useState('')

    const [andToggle, setAndToggle] = useState<boolean>(true);
    const changeAnd = () => {
        setAndToggle(!andToggle);
    };

    // will be appended to the keys in the key-value list below to make
    // global and AND and OR work
    // TODO
    // doing it this way (for OR) makes the entire database appear
    // because everything is being ORed
    // need some way to check if only one key has a non-empty string val (in OpenModal)
    const [addANDorOR, setAddANDorOR] = useState<string>("&");

    const [width, setWidth] = React.useState(window.innerWidth * 1.5);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searching,setSearching] = useState(false);

    const openModal = () => {
        // TODO
        // Create a string like ?name=val etc based off attbValPairs and set searchQuery to it
        let keys = attbValPairs.map(item => item.key);
        const values = attbValPairs.map(item => item.value);
        let count = 0;

        // m_searchString is monster Search String
        let m_searchString = new String("");
        for (let i = 0; i < keys.length; i++) {
                    // finds values that aren't empty (i.e, user is looking for them)
                    // and appends them to searchstring
                    if (values[i]!=="" && keys[i][0]!=='r') {
                        console.log("hi",keys[i], i);
                        // the following if forces & onto the first item the user searches for
                        // so that if global OR is enabled it won't fetch the whole database
                        if (count == 0){
                            console.log("triggered");
                            keys[i] = keys[i].substring(0, 0) + '&' + keys[i].substring(0 + 1);
                            //keys[i] = keys[i].substring(0, 1) + '' + keys[i].substring(1 + 1); //only needed if OR is ||*
                        }
                        m_searchString += keys[i] + values[i];
                        console.log("eeeeee",m_searchString);
                        count = count + 1;
                    }
                    //TODO
                        // Have all ranges keys start with r (and in route as well for simplicity)
                        // I foresee an issue if min_health and max_health are not right next to each other
                        // (which they should be)
                    else if (keys[i][0]=='r'){
                        console.log("range")
                        // append to search string differently, make sure chunk still starts with &
                    }
            }

            setSearchQuery(m_searchString.toString());
            setIsModalOpen(true);

    };

    // changes addANDorOR to match global AND or global OR
    // depending on the value the user selects for andToggle (true or false)
    useEffect(() => {
        if (andToggle) {
            setAddANDorOR("&");
        } else {
            setAddANDorOR("|"); // is it | or ||?
        }
    }, [andToggle]);

    // The list of attributes and the values the user gives them
    const [attbValPairs, setAVpairs] = useState([
        { key: addANDorOR+"name=", value: ""},
        { key: addANDorOR+"xp_val=", value: ""},
        { key: addANDorOR+"m_size=", value: ""},
        { key: addANDorOR+"m_ac=", value: ""},
        // ranges need their own seperate string, looping thru and appending won't work
        // needs to look like `minLevel=${minLevel}&maxLevel=${maxLevel}`
        // simplest way I can see is to add R, check for it?
        { key: addANDorOR+"rMinAC", value: ""},
        // note we can already add m_ac to the URL, so we don't need to add r versions to route
        { key: addANDorOR+"rMaxAC", value: ""},
        { key: addANDorOR+"rMin_hp", value: ""},
        { key: addANDorOR+"rMax_hp", value: ""}
    ]);

    // updates the prefix for the keys to match the current setting for global AND or OR
    useEffect( () => {
        setAVpairs(
            [{ key: addANDorOR+"name=", value: ""},
            { key: addANDorOR+"xp_val=", value: ""},
            { key: addANDorOR+"m_size=", value: ""},
            { key: addANDorOR+"m_ac=", value: ""},
            // ranges need their own seperate string, looping thru and appending won't work
            // needs to look like `minLevel=${minLevel}&maxLevel=${maxLevel}`
            // simplest way I can see is to add R, check for it?
            { key: addANDorOR+"rMinAC", value: ""},
            // note we can already add m_ac to the URL, so we don't need to add r versions to route
            { key: addANDorOR+"rMaxAC", value: ""},
            { key: addANDorOR+"rMin_hp", value: ""},
            { key: addANDorOR+"rMax_hp", value: ""}]
        )
    },[addANDorOR]);

    // updates attbValPairs at key: string with string user passes in (called below in an Input)
    const handleSpecificValueChange = (key: string, newValue: string) => {
        const itemIndex = attbValPairs.findIndex(item => item.key === key);
        if (itemIndex !== -1) {
            const newList = [...attbValPairs];
            newList[itemIndex] = { ...newList[itemIndex], value: newValue };
            setAVpairs(newList);
        }
    };

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
                        value={attbValPairs.find(item => item.key === addANDorOR+"name=")?.value || ""}
                        onChange={event => handleSpecificValueChange(addANDorOR+"name=", event.target.value)}
                        width="50%"
                        placeholder="Creature Name"
                        size="xl"
                    />
                    <p>Global AND</p>
                    <Switch onChange={changeAnd} checked={andToggle}/>
                    <Button onPress={openModal}>Go!</Button>
                    <Modal         width="600px"
                                   open={isModalOpen} onClose={() => {
                        setSearching(false);
                        setIsModalOpen(false)
                    }}>
                        <CreatureDatabase searchQuery={searchQuery}/>
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
                                value={attbValPairs.find(item => item.key === addANDorOR+"m_ac=")?.value || ""}
                                onChange=
                                    {event => handleSpecificValueChange(addANDorOR+"m_ac=", event.target.value)}
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
                                <HorizontalSlider

                                />
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