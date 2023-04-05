import {Button, Container, Grid, Input, NextUIProvider, Text, Modal, Switch} from "@nextui-org/react";
import './creature-creator.css';
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


// TODO
// clean up the mess I made with addANDorOR, etc
const SearchAndFilter: React.FC = () => {

    // searchQuery that will be passed to creature-database in the modal window
    const [searchQuery, setSearchQuery] = useState('')

    // toggles true or false for when user enables/disables global AND
    const [andToggle, setAndToggle] = useState<boolean>(true);

    // called when user flips the switch on the page (in return body below)
    const changeAnd = () => {
        setAndToggle(!andToggle);
    };

    const [width, setWidth] = React.useState(window.innerWidth * 1.5);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searching, setSearching] = useState(false);

    // called when user selects the Go! button after putting in their search params
    // sets searchQuery to the string of non-empty key value pairs concatenated together
    const openModal = () => {
        let keys = attbValPairs.map(item => item.key);
        const values = attbValPairs.map(item => item.value);

        // m_searchString is monster Search String
        let m_searchString = String("");

        for (let i = 0; i < keys.length; i++) {
            // finds values that aren't empty (i.e, user is looking for them)
            // and appends them to m_searchstring
            if (values[i] !== "" && keys[i][0] !== 'r') {
                keys[i] = '&' + keys[i];        // appends & to front of each key - proper URL syntax
                m_searchString += keys[i] + values[i];
            }
                //TODO
                // Have all ranges keys start with r (and in route as well for simplicity)
                // I foresee an issue if min_health and max_health are not right next to each other
                // delimit on , and check instead of having two vars?!
            else if (keys[i][0] == 'r') {
                console.log("range")
                // append to search string differently, make sure chunk still starts with &
            }
        }

        setSearchQuery(m_searchString.toString());
        setIsModalOpen(true);

    };

    // The list of attributes available to search for and the values the user gives them
    const [attbValPairs, setAVpairs] = useState([
        {key: "gAND=", value: andToggle.toString()},
        {key: "name1=", value: ""},
        {key: "xp_val=", value: ""},
        {key: "m_size=", value: ""},
        {key: "m_ac=", value: ""},
        // ranges need their own seperate string, looping thru and appending won't work
        // needs to look like `minLevel=${minLevel}&maxLevel=${maxLevel}`
        // simplest way I can see is to add R, check for it?
        {key: "rMinAC", value: ""},
        // note we can already add m_ac to the URL, so we don't need to add r versions to route
        {key: "rMaxAC", value: ""},
        {key: "rMin_hp", value: ""},
        {key: "rMax_hp", value: ""},
        {key: "str=", value: ""},
        {key: "dex=", value: ""},
        {key: "con=", value: ""},
        {key: "int=", value: ""},
        {key: "wis=", value: ""},
        {key: "chr=", value: ""},
        {key: "hp=", value: ""}

    ]);

    // updates gAND to t or f
    useEffect(() => {
        handleSpecificValueChange("gAND=", andToggle.toString())
    }, [andToggle]);

    // updates attbValPairs at key: string with string user passes in
    // called in the return statement below whenever we need to get a value the user passes in
    const handleSpecificValueChange = (key: string, newValue: string) => {
        const itemIndex = attbValPairs.findIndex(item => item.key === key);
        if (itemIndex !== -1) {
            const newList = [...attbValPairs];
            newList[itemIndex] = {...newList[itemIndex], value: newValue};
            setAVpairs(newList);
        }
        console.log(attbValPairs);
    };

    // @ts-ignore
    return (
        <NextUIProvider theme={theme}>
            <Container md>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginTop: "5%",
                    }}
                >
                    <Text h1>Database Search & Filter</Text>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        marginTop: "2%",
                        paddingTop: "2%",
                        paddingBottom: "2%",
                        borderTop: "3px solid #fff",
                        borderBottom: "3px solid #fff",
                    }}
                >
                    <Text h3 css={{flex: "1"}}>Creature Name:</Text>
                    <Input
                        css={{flex: "3"}}
                        bordered
                        color="primary"
                        value={attbValPairs.find(item => item.key === "name1=")?.value || ""}
                        onChange={event => handleSpecificValueChange("name1=", event.target.value)}
                        width="50%"
                        size="xl"
                    />
                    <p>Global AND</p>
                    <Switch onChange={changeAnd} checked={andToggle}/>
                    <Button onPress={openModal}>Go!</Button>
                    <Modal width="600px"
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
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Text h3>Tags:</Text>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Text h3>Size, Type, etc.</Text>
                        <Input
                            size="xl"
                            bordered
                            color="primary"
                            width="50%"
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                    <Text h3>Armor Class</Text>
                        <div
                            style={{
                                flex: "4",
                            }}
                        >
                            <HorizontalSlider
                                onChange={event => handleSpecificValueChange("m_ac=", event.toString())}
                            />
                            {/* TODO: this gets the previous value instead of the current one? goes for all sliders*/}
                            {/*Should be fine, other inputs are like that too*/}
                        </div>
                    </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Text h3>Health Points</Text>
                    <div
                        style={{
                            flex: "4",
                        }}
                    >
                        <HorizontalSlider
                            onChange={event => handleSpecificValueChange("hp=", event.toString())}
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
                    </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Text h3>Attributes:</Text>
                </div>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            marginTop: "1%",
                            justifyContent: "center",
                        }}
                    >
                        <Grid.Container gap={1} justify="space-around" css={{width: width > 1500 ? "60%" : "80%"}}>
                            <Grid>
                                <StrengthCard/>
                            </Grid>
                            <Grid>
                                <DexCard/>
                            </Grid>
                            <Grid>
                                <ConCard/>
                            </Grid>
                            <Grid>
                                <IntCard/>
                            </Grid>
                            <Grid>
                                <WisCard/>
                            </Grid>
                            <Grid>
                                <CharCard/>
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
                            <VerticalSlider
                                onChange={event => handleSpecificValueChange("str=", event.toString())}
                            />
                            <VerticalSlider
                                onChange={event => handleSpecificValueChange("dex=", event.toString())}
                            />
                            <VerticalSlider
                                onChange={event => handleSpecificValueChange("con=", event.toString())}
                            />
                            <VerticalSlider
                                onChange={event => handleSpecificValueChange("int=", event.toString())}
                            />
                            <VerticalSlider
                                onChange={event => handleSpecificValueChange("wis=", event.toString())}
                            />
                            <VerticalSlider
                                onChange={event => handleSpecificValueChange("chr=", event.toString())}
                            />
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
            </Container>
        </NextUIProvider>
    );
};

export default SearchAndFilter;