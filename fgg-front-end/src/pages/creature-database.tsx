import React, {useEffect} from "react";
import {
    Text,
    NextUIProvider,
    createTheme, Progress, Grid, Card, Container,
} from "@nextui-org/react";
import {Connection} from "../Database/Connection";

const theme = createTheme({
    type: "dark",
});

const CreatureDatabase = () => {

    const [data, setData] = React.useState<any>(null);

    useEffect(() => {
        // any localhost connection should work, try different ones. make sure the keys work
        // Establishes connection to database, in this case the largest table - only an example
        const connection = new Connection("http://localhost:8080/api/modi_monster_display");
        connection.getData().then(data => setData(data));
    }, []);

    return (
        <NextUIProvider theme={theme}>
            <Container justify="center">
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
            </Container>
            <div>
                {data ? (
                    <Grid.Container gap={2} justify="center">
                        {/* .map pulls the information out the table established above in connection */}
                        {data.map((item: { MODI_ID: React.Key; MODI_TEXT: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; MODI_HTML_TAGGED_TEXT: any; }) => (
                            <Grid sm={12} md={5}>
                                <Card css={{ mw: "330px" }} key={item.MODI_ID}>
                                    <Card.Header>
                                        <Text b>{item.MODI_TEXT}</Text>
                                    </Card.Header>
                                    <Card.Divider />
                                    <Card.Body css={{ py: "$10" }}>
                                        <Text>
                {<div dangerouslySetInnerHTML={{ __html: item.MODI_HTML_TAGGED_TEXT }} />}
                                        </Text>
                                    </Card.Body>
                                    <Card.Divider />

                                </Card>
                            </Grid>
                        ))}
                    </Grid.Container>
                ) : (
                    <div>
                        <Grid.Container xs={12} sm={6} gap={2}>
                        <Grid>
                            <Progress
                                indeterminated
                                value={50}
                                color="secondary"
                                status="secondary"
                            />
                        </Grid>
                    </Grid.Container>
                    </div>
                )}
            </div>
        </NextUIProvider>
    );
};

export default CreatureDatabase;