import React, {useEffect} from "react";
import {
    Text,
    NextUIProvider,
    createTheme, Progress, Grid, Card, Container, Row,
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
        const connection = new Connection("http://localhost:8080/api/gasymo_game_system_monster");
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
                        {data.map((item: { GASYMO_ID: React.Key; GASYMO_DISPLAY_NAME: string;
                            GACO_GAME_COMPANY: any; MOAB_MONSTER_ATTRIBUTEs: any}) => (
                            <Grid sm={12} md={5}>
                                <Card css={{ mw: "330px" }} key={item.GASYMO_ID}
                                      variant="bordered" isPressable>
                                    <Card.Header>
                                        <Text b>{item.GASYMO_DISPLAY_NAME}</Text>
                                    </Card.Header>
                                    <Card.Divider />
                                    <Card.Body css={{ py: "$10" }}>
                                        <Text>
                                            {item.MOAB_MONSTER_ATTRIBUTEs.map(
                                                (item_as:{MOAB_ID:React.Key; MOAB_DISPLAY_TEXT: string })=>(
                                               <Text>{item_as.MOAB_DISPLAY_TEXT}</Text>
                                            ))}
                                        </Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row justify="flex-end">
                                            <Text>{item.GACO_GAME_COMPANY.GACO_NAME}</Text>
                                        </Row>
                                    </Card.Footer>
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