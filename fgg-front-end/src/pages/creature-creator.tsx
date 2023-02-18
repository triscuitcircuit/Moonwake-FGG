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
import { StartNew, Auto, StrengthCard, ConCard, CharCard, DexCard, WisCard, IntCard } from "../components/creature-creator-cards";
// The sliders come from a package that is imported in the Sliders.jsx file.
// @ts-ignore
import { HorizontalSlider, VerticalSlider } from "../components/Sliders.jsx";
import {Connection} from "../Database/Connection";

const theme = createTheme({
    type: "dark",
});

interface StartNewProps {
    onButtonClick: () => void;
}

const CreatureCreator: React.FC = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [selectedSize, setSelectedSize] = useState(new Set(["Size"]));
    const [selectedType, setSelectedType] = useState(new Set(["Type"]));
    const [selectedSubtype, setSelectedSubtype] = useState(new Set(["Subtype"]));
    const [selectedAlignment, setSelectedAlignment] = useState(new Set(["Alignment"]));
    const [selectedArmorClassValue, setSelectedArmorClassValue] = useState("----");
    const [selectedArmorType, setSelectedArmorType] = useState(new Set(["Armor Type"]));
    const [numHitDice, setNumHitDice] = useState(0);
    const [hitDiceSize, setHitDiceSize] = useState(0);

    const [sizeData, setSizeData] = useState<any>(null);
    const [typeData, setTypeData] = useState<any>(null);
    const [subtypeData, setSubtypeData] = useState<any>(null);
    const [alignmentData, setAlignmentData] = useState<any>(null);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {

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
        { key: "Light", name: "Light" },
        { key: "Medium", name: "Medium" },
        { key: "Heavy", name: "Heavy" },
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

    const selectedSizeItem = sizeItems.find((item: { key: string; }) => item.key === selectedSizeValue);
    const hitDiceValue = selectedSizeItem?.hitDiceValue;

    const hitDiceSizeChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumHitDice(Number(event.target.value));
    };

    // @ts-ignore
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
            {/*Conditionally renders the cards depending on whether the button is clicked*/}
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
            {/* If the button is clicked, then the creature creation form is shown */}
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
                                placeholder="Creature Name"
                                size="md"
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
                                    <Text h3 css={{ margin: "0", border: "1px solid white" }}>Tags:</Text>
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
                                    flex: "1",
                                    margin: "10px",
                                    }}
                            >
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
                                    flex: "1",
                                    margin: "10px",
                                    }}
                            >
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
                                    flex: "1",
                                    margin: "10px",
                                    }}
                            >
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
                                    flex: "1",
                                    margin: "10px",
                                    }}
                            >
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
                            <Text css={{ flex: "1", margin: "10px" }}>Armor Class</Text>
                            <Dropdown>
                                <Dropdown.Button flat css={{ flex: "1", margin: "10px" }}>
                                    {selectedArmorClassValue}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Armor Class dropdown menu"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    // @ts-ignore
                                    onSelectionChange={setSelectedArmorClassValue}
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
                            <Text css={{ flex: "1", margin: "10px" }}>Hit Points</Text>
                            <Input
                                bordered
                                type="number"
                                color="primary"
                                labelPlaceholder={"No. of Hit Dice"}
                                size="lg"
                                width="100%"
                                css={{ flex: "2", margin: "10px" }}
                                // @ts-ignore
                                onChange={hitDiceSizeChange}
                            />
                            {/* Total HP is No. of Hit Dice x Hit Dice size + Con Mod*/}
                            <Text css={{ flex: "2", margin: "10px" }}>Total HP: {numHitDice}d({hitDiceValue}) + "con mod" </Text>
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