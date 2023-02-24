// ------------------------------------------------------------------
// Written by: Landon Thibodeau
// Description: This page allows the user to create a new creature.
// ------------------------------------------------------------------

import React, {useEffect, useMemo, useState} from "react"
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
import {
    StartNew,
    Auto,
    SpeedInput,
    AttributeInput,
} from "../components/creature-creator-cards";
import {Connection} from "../Database/Connection";

const theme = createTheme({
    type: "dark",
});

const CreatureCreator: React.FC = () => {

    /* --------------------------- */
    /* Creature creation variables */
    /* --------------------------- */

    const [isClicked, setIsClicked] = useState(false);
    const [selectedSize, setSelectedSize] = useState(new Set(["----"]));
    const [selectedType, setSelectedType] = useState(new Set(["----"]));
    const [selectedSubtype, setSelectedSubtype] = useState(new Set(["----"]));
    const [selectedAlignment, setSelectedAlignment] = useState(new Set(["----"]));
    const [selectedArmorClass, setSelectedArmorClass] = useState(new Set(["----"]));
    const [selectedArmorType, setSelectedArmorType] = useState(new Set(["----"]));
    const [numHitDice, setNumHitDice] = useState(1);
    const [baseSpeed, setBaseSpeed] = useState(0);
    const [flySpeed, setFlySpeed] = useState(0);
    const [swimSpeed, setSwimSpeed] = useState(0);
    const [climbSpeed, setClimbSpeed] = useState(0);
    const [burrowSpeed, setBurrowSpeed] = useState(0);

    /* ------------------------- */
    /* Data connection variables */
    /* ------------------------- */

    const [sizeData, setSizeData] = useState<any>(null);
    const [typeData, setTypeData] = useState<any>(null);
    const [subtypeData, setSubtypeData] = useState<any>(null);
    const [alignmentData, setAlignmentData] = useState<any>(null);

    /* -------------------------------- */
    /* Attribute and Modifier Variables */
    /* -------------------------------- */

    const [strength, setStrength] = useState<string>("0")
    const [strengthMod, setStrengthMod] = useState<string>("Str Mod")
    const [dexterity, setDexterity] = useState<string>("0")
    const [dexterityMod, setDexterityMod] = useState<string>("Dex Mod")
    const [constitution, setConstitution] = useState<string>("0")
    const [constitutionMod, setConstitutionMod] = useState<string>("Con Mod")
    const [intelligence, setIntelligence] = useState<string>("0")
    const [intelligenceMod, setIntelligenceMod] = useState<string>("Int Mod")
    const [wisdom, setWisdom] = useState<string>("0")
    const [wisdomMod, setWisdomMod] = useState<string>("Wis Mod")
    const [charisma, setCharisma] = useState<string>("0")
    const [charismaMod, setCharismaMod] = useState<string>("Cha Mod")

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };

    /* ---------------------------------------------------------------------------------- */
    /* setSetters is called by the attributeInput component to set the value and modifier */
    /* ---------------------------------------------------------------------------------- */

    const setSetters = (attribute: number, setter: (value: (((prevState: string) => string) | string)) => void, modifier: (value: (((prevState: string) => string) | string)) => void) => {
        setter(attribute.toString());
        modifier(Math.floor((attribute - 10) / 2).toString());
    }

    useEffect(() => {

        /* ------------------------ */
        /* Populate data connection */
        /* ------------------------ */

        const sizeConnection = new Connection("http://localhost:8080/api/sz_size");
        sizeConnection.getData().then(sizeData => setSizeData(sizeData));

        const typeConnection = new Connection("http://localhost:8080/api/moty_monster_type");
        typeConnection.getData().then(typeData => setTypeData(typeData));

        const subtypeConnection = new Connection("http://localhost:8080/api/DATY_DAMAGE_TYPE");
        subtypeConnection.getData().then(subtypeData => setSubtypeData(subtypeData));

        const alignmentConnection = new Connection("http://localhost:8080/api/AL_ALIGNMENT");
        alignmentConnection.getData().then(alignmentData => setAlignmentData(alignmentData));

    }, []);

    //  Construct sizeItems from sizeData
    const sizeItems = sizeData ? sizeData.map((item: { SZ_ID: React.Key; SZ_NAME: string; SZ_DISPLAY_NAME: string; SZ_HIT_DICE_VALUE: number }) => (
        { key: item.SZ_NAME, name: item.SZ_DISPLAY_NAME, hitDiceValue: item.SZ_HIT_DICE_VALUE }
    )) : [];

    //  Construct typeItems from typeData
    const typeItems = typeData ? typeData.map((item: { MOTY_ID: React.Key; MOTY_NAME: string; MOTY_DISPLAY_NAME: string; }) => (
        { key: item.MOTY_NAME, name: item.MOTY_DISPLAY_NAME }
    )) : [];

    //  Construct subtypeItems from subtypeData
    const subtypeItems = subtypeData ? subtypeData.map((item: { DATY_ID: React.Key; DATY_NAME: string; DATY_DISPLAY_NAME: string; }) => (
        { key: item.DATY_NAME, name: item.DATY_DISPLAY_NAME }
    )) : [];

    //  Construct alignmentItems from alignmentData
    const alignmentItems = alignmentData ? alignmentData.map((item: { AL_ID: React.Key; AL_NAME: string; AL_DISPLAY_NAME: string; }) => (
        { key: item.AL_NAME, name: item.AL_DISPLAY_NAME }
    )) : [];

    const armorItems = [
        { key: "Light", name: "Light"},
        { key: "Medium", name: "Medium"},
        { key: "Heavy", name: "Heavy"},
    ];

    const selectedSizeValue = useMemo(
        () => Array.from(selectedSize).join(", ").replaceAll("_", " "),
        [selectedSize]
    );

    const selectedTypeValue = useMemo(
        () => Array.from(selectedType).join(", ").replaceAll("_", " "),
        [selectedType]
    );

    const selectedSubtypeValue = useMemo(
        () => Array.from(selectedSubtype).join(", ").replaceAll("_", " "),
        [selectedSubtype]
    );

    const selectedAlignmentValue = useMemo(
        () => Array.from(selectedAlignment).join(", ").replaceAll("_", " "),
        [selectedAlignment]
    );

    const selectedArmorClassValue = useMemo(
        () => Array.from(selectedArmorClass).join(", ").replaceAll("_", " "),
    [selectedArmorClass]
    );

    const selectedSizeItem = sizeItems.find((item: { key: string; }) => item.key === selectedSizeValue);
    const hitDiceValue = selectedSizeItem?.hitDiceValue;

    const hitDiceSizeChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumHitDice(Number(event.target.value));
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
                        border: "1px solid white",
                        marginTop: "5%",
                        }}
                >
                    <Text h1>Creature Creation Page</Text>
                </div>
            </Container>

            {/* ------------------------------------------------------------------------ */}
            {/*Conditionally renders the cards depending on whether the button is clicked*/}
            {/* ------------------------------------------------------------------------ */}

            {!isClicked &&
                <Container md>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            border: "1px solid white",
                            marginTop: "5%",
                            }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flex: "1",
                                marginRight: "5%",
                                }}
                        >
                            <StartNew onButtonClick={handleButtonClick} />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flex: "1",
                                marginLeft: "5%",
                                }}
                        >
                            <Auto />
                        </div>
                    </div>
                </Container>
            }

            {/* ------------------------------------------------------------------ */}
            {/* If the button is clicked, then the creature creation form is shown */}
            {/* ------------------------------------------------------------------ */}

            {isClicked &&
                <Container md>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            border: "1px solid white",
                            }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                border: "1px solid white",
                                }}
                        >
                            <Text h2>Enter Creature Information</Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "60%",
                                }}
                        >
                            <Input
                                bordered
                                color="primary"
                                placeholder="Creature Name"
                                size="lg"
                                width="100%"
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                border: "1px solid white",
                                }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "60%",
                                    alignItems: "center",
                                }}
                            >
                                    <Text h3 css={{ margin: "10px", border: "1px solid white" }}>Tags:</Text>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "60%",
                                border: "1px solid white",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    margin: "10px",
                                    alignItems: "center",
                                    }}
                            >

                                {/* --------------------------- */}
                                {/* Dropdown for selecting size */}
                                {/* --------------------------- */}

                                <Text h5>Size</Text>
                                <Dropdown>
                                    <Dropdown.Button flat css={{ tt: "capitalize", width: "100%" }}>
                                        {selectedSizeValue + (sizeItems.find((item: { key: string; }) => item.key === selectedSizeValue)?.hitDiceValue ?
                                            " (d" + sizeItems.find((item: { key: string; }) => item.key === selectedSizeValue)?.hitDiceValue + ")" : "")}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Size dropdown menu"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        items={sizeItems}
                                        selectedKeys={selectedSize}
                                        // @ts-ignore
                                        onSelectionChange={setSelectedSize}
                                    >
                                        {/*@ts-ignore*/}
                                        {({key, name}) => (
                                            <Dropdown.Item key={key}>
                                                {name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    margin: "10px",
                                    alignItems: "center",
                                    }}
                            >

                                {/* ------------------------------- */}
                                {/* Dropdown for selecting the type */}
                                {/* ------------------------------- */}

                                <Text h5>Type</Text>
                                <Dropdown>
                                    <Dropdown.Button flat css={{ tt: "capitalize", width: "100%" }}>
                                        {selectedTypeValue}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Type dropdown menu"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        items={typeItems}
                                        selectedKeys={selectedType}
                                        // @ts-ignore
                                        onSelectionChange={setSelectedType}
                                        css={{ maxHeight: "400px", overflow: "auto" }}
                                    >
                                        {/*@ts-ignore*/}
                                        {({key, name}) => (
                                            <Dropdown.Item key={key}>
                                                {name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    margin: "10px",
                                    alignItems: "center",
                                    }}
                            >

                                {/* ---------------------------------- */}
                                {/* Dropdown for selecting the subtype */}
                                {/* ---------------------------------- */}

                                <Text h5>Subtype</Text>
                                <Dropdown>
                                    <Dropdown.Button flat css={{ tt: "capitalize", width: "100%" }}>
                                        {selectedSubtypeValue}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Subtype dropdown menu"
                                        selectionMode="single"
                                        items={subtypeItems}
                                        selectedKeys={selectedSubtype}
                                        // @ts-ignore
                                        onSelectionChange={setSelectedSubtype}
                                        css={{ maxHeight: "400px", overflow: "auto" }}
                                    >
                                        {/*@ts-ignore*/}
                                        {({key, name}) => (
                                            <Dropdown.Item key={key}>
                                                {name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    margin: "10px",
                                    alignItems: "center",
                                    }}
                            >

                                {/* ------------------------------------ */}
                                {/* Dropdown for selecting the alignment */}
                                {/* ------------------------------------ */}

                                <Text h5>Alignment</Text>
                                <Dropdown>
                                    <Dropdown.Button flat css={{ tt: "capitalize", width: "100%" }}>
                                        {selectedAlignmentValue}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Alignment dropdown menu"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        items={alignmentItems}
                                        selectedKeys={selectedAlignment}
                                        // @ts-ignore
                                        onSelectionChange={setSelectedAlignment}
                                        css={{ maxHeight: "400px", overflow: "auto" }}
                                    >
                                        {/*@ts-ignore*/}
                                        {({key, name}) => (
                                            <Dropdown.Item key={key}>
                                                {name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "60%",
                                border: "1px solid white",
                            }}
                        >

                            {/* ---------------------------------------- */}
                            {/* Dropdown to select the armor class value */}
                            {/* ---------------------------------------- */}

                            <Text h5 css={{ flex: "1", margin: "10px" }}>Armor Class</Text>
                            <Dropdown>
                                <Dropdown.Button flat css={{ flex: "1", margin: "10px" }}>
                                    {selectedArmorClassValue + " + (" + dexterityMod + ")"}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Armor Class dropdown menu"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    // @ts-ignore
                                    onSelectionChange={setSelectedArmorClass}
                                    css={{ maxHeight: "400px", overflow: "auto" }}
                                >
                                    {/* loop 30 times creating a new dropdown item with the values 1-30*/}
                                    {[...Array(30)].map((x, i) => (
                                        <Dropdown.Item key={i + 1}>
                                            {i + 1}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* --------------------------------------- */}
                            {/* Dropdown to select the armor type value */}
                            {/* --------------------------------------- */}

                            <Text css={{ flex: "1", margin: "10px" }}>Armor Type</Text>
                            <Dropdown>
                                <Dropdown.Button flat css={{ flex: "1", margin: "10px" }}>
                                    {selectedArmorType}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Armor Type dropdown menu"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    items={armorItems}
                                    selectedKeys={selectedArmorType}
                                    // @ts-ignore
                                    onSelectionChange={setSelectedArmorType}
                                    css={{ maxHeight: "400px", overflow: "auto" }}
                                >
                                    {/*@ts-ignore*/}
                                    {({key, name}) => (
                                        <Dropdown.Item key={key}>
                                            {name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "60%",
                                marginTop: "2%",
                                border: "1px solid white",
                            }}
                        >
                            <Text h5 css={{ flex: "1", margin: "10px" }}>Hit Points</Text>
                            <Input
                                bordered
                                type="number"
                                color="primary"
                                labelPlaceholder={"No. of Hit Dice"}
                                value={numHitDice}
                                size="lg"
                                width="100%"
                                css={{ flex: "2", margin: "10px" }}
                                // @ts-ignore
                                onChange={hitDiceSizeChange}
                            />
                            {/* Total HP is No. of Hit Dice x Hit Dice size + Con Mod*/}
                            <Text css={{ flex: "2", margin: "10px" }}>Total HP: {numHitDice}d({hitDiceValue}) + {constitutionMod} </Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "column",
                                width: "60%",
                                marginTop: "2%",
                                border: "1px solid white",
                            }}
                        >
                            <Text h3 css={{ margin: "10px", border: "1px solid white" }}>Speed:</Text>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    width: "100%",
                                    border: "1px solid white",
                                }}
                            >
                                <SpeedInput name={"Base"} />
                                <SpeedInput name={"Swim"} />
                                <SpeedInput name={"Fly"} />
                                <SpeedInput name={"Climb"} />
                                <SpeedInput name={"Burrow"} />
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "column",
                                width: "60%",
                                marginTop: "2%",
                                border: "1px solid white",
                            }}
                        >
                            <Text h3 css={{ margin: "10px", border: "1px solid white" }}>Attributes:</Text>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    width: "100%",
                                    border: "1px solid white",
                                }}
                            >
                                <Grid.Container justify="center">
                                    <Grid sm={4}>
                                        <AttributeInput name={"Strength"} value={strength} setValue={(value) => {
                                            setSetters(parseInt(value), setStrength, setStrengthMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Dexterity"} value={dexterity} setValue={(value) => {
                                            setSetters(parseInt(value), setDexterity, setDexterityMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Constitution"} value={constitution} setValue={(value) => {
                                            setSetters(parseInt(value), setConstitution, setConstitutionMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Intelligence"} value={intelligence} setValue={(value) => {
                                            setSetters(parseInt(value), setIntelligence, setIntelligenceMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Wisdom"} value={wisdom} setValue={(value) => {
                                            setSetters(parseInt(value), setWisdom, setWisdomMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Charisma"} value={charisma} setValue={(value) => {
                                            setSetters(parseInt(value), setCharisma, setCharismaMod)
                                        }} />
                                    </Grid>
                                </Grid.Container>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            border: "1px solid white",
                            }}
                    >
                        <Button onClick={handleButtonClick}>Go Back</Button>
                    </div>
                </Container>
            }
        </NextUIProvider>
    );
};

export default CreatureCreator;