import React, {useEffect, useState} from "react";

import {
    Text,
    NextUIProvider,
    createTheme, Progress, Grid, Card, Container, Row, Badge, Pagination, Loading,
} from "@nextui-org/react";
import {Connection} from "../Database/Connection";

const theme = createTheme({
    type: "dark",
});

const baseURL = "http://localhost:8080/api/gasymo_game_system_monster";
const connection = new Connection(baseURL);


const CreatureDatabase = () => {
    const [data, setData] = React.useState<any>(null);
    const [pageCount, setPageCount] = useState(1);
    const [page, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchPage = async (page: React.SetStateAction<number>) =>{
        setLoading(true);
        const res = await fetch(baseURL+"?page="+page);
        const data = await res.json();
        setData(data);
        setCurrentPage(page);
        setLoading(false);
    }



    useEffect(() => {
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
                        {data.monsters.map((item:{GASYMO_ID: React.Key; GASYMO_DISPLAY_NAME: string;
                            GACO_GAME_COMPANY: any; MOAB_MONSTER_ATTRIBUTEs: any; GASYMO_ARMOR_CLASS: number;
                            GASYMO_HIT_DICE_TYPE: number; GASYMO_HIT_DICE_NUM: number; GASYMO_XP_VALUE: number
                            GASYMO_AC_TYPE_DETAIL: string; SZ_SIZE: any; MOTY_MONSTER_TYPE: any})=>(
                                <Grid sm={12} md={5}>
                                        <Card css={{ mw: "330px" }} key={item.GASYMO_ID}
                                          variant="bordered" isPressable>
                                        <Card.Header>
                                            <Text b>{item.GASYMO_DISPLAY_NAME}</Text><br></br>
                                        </Card.Header>
                                         <Card.Divider />
                                        <Card.Body css={{ py: "$10" }}>
                                            <Text>
                                                {item.MODI_MONSTER_DISPLAYs.map(
                                                    (item_as:{GASYMO_ID:React.Key; MODI_HTML_TAGGED_TEXT: string })=>(
                                                        <Text>{<div dangerouslySetInnerHTML={{ __html: item_as.MODI_HTML_TAGGED_TEXT }} />}</Text>
                                                ))}
                                            </Text>
                                        </Card.Body>
                                    </Card>
                                </Grid>
                            ))}
                        {/*{console.log(data)}*/}
                        <Grid>
                            <Container justify="center">
                                {loading && <Loading type="points"/>}
                                <Pagination total={data.totalPages} initialPage={1} page={page} onChange={fetchPage}/>
                            </Container>
                        </Grid>
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