import React from "react";
import {
    Text,
    NextUIProvider,
    createTheme,
} from "@nextui-org/react";

const theme = createTheme({
    type: "dark",
});

const CreatureDatabase = () => {
    return (
        <NextUIProvider theme={theme}>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                Creature Database Page
            </Text>
        </NextUIProvider>
    );
};

export default CreatureDatabase;