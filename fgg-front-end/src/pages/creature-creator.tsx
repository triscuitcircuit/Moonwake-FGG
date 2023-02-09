import React, { useState } from "react"
import {
    Text,
    NextUIProvider,
    createTheme,
    Container,
    Grid,
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
                    }}
            >
                <Text h1>Creature Creation Page</Text>
            </Container>
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
                        {!isClicked && <StartNew onButtonClick={handleButtonClick} />}
                        {isClicked && <p>Button clicked</p> }
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
        </NextUIProvider>
    );
};

export default CreatureCreator;