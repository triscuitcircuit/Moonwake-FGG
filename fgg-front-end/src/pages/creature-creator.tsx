import React from "react"
import {
    Text,
    NextUIProvider,
    createTheme,
} from "@nextui-org/react";

const theme = createTheme({
    type: "dark",
});

const CreatureCreator = () => {
    return (
        <NextUIProvider theme={theme}>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    marginLeft: "50"
                }}
                weight="bold"
            >
                Creature Creation Page
            </Text>
        </NextUIProvider>
    );
};

export default CreatureCreator;