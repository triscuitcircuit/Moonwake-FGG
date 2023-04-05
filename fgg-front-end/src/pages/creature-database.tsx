import React, {useEffect, useState} from "react";
import {
    Text,
    NextUIProvider,
    createTheme, Progress, Grid, Card, Container, Row, Badge, Pagination, Loading,
} from "@nextui-org/react";
import {Connection} from "../Database/Connection";
import {MonsterModal} from "./creature-db-modal";

const theme = createTheme({
    type: "dark",
});

// searchQuery will be given by search_and_filter when it generates
// a modal window containing the creature-database with the filtered URL
// will be '' on App.tsx so selecting database page directly will display all
interface Props {
    searchQuery: string;
}

const CreatureDatabase = ({ searchQuery }: Props) => {

    const connection = new Connection("http://localhost:8080/api/gasymo_game_system_monster?" + searchQuery);
    console.log(searchQuery);
    const [data, setData] = React.useState<any>(null);
    const [card, setCard] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [page, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchPage = async (page: React.SetStateAction<number>) => {
        setLoading(true);
        await connection.getPage(page as number - 1).then(data => setData(data));
        setLoading(false);
    }

    const handleModalClose = () => {
        setModalOpen(false)
    };

    const displayModal = async (number: any) => {
        if (!modalOpen) {
            setCard(number);
            setModalOpen(true);
        }
    }

    useEffect(() => {
        connection.getData().then(data => setData(data));
    }, []);


    return (
        <NextUIProvider theme={theme}>
            <Container justify="center">
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
                    <Text
                        h1
                        size={60}
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        weight="bold"
                    >
                        FGG Database
                    </Text>
                </div>
            </Container>
            <div>
                {data ? (
                    <Grid.Container gap={2} justify="center">
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
                            <Grid>
                                <Container justify="center">
                                    {loading && <Loading type="points"/>}
                                    <Pagination total={data.totalPages} initialPage={1} page={page}
                                                onChange={fetchPage}/>
                                </Container>
                            </Grid>
                        </div>
                        <MonsterModal isOpen={modalOpen} monsterId={card} onClose={handleModalClose} />
                        {data.monsters.map((item: {
                            MODI_MONSTER_DISPLAYs: any;
                            GASYMO_ID: React.Key; GASYMO_DISPLAY_NAME: string;
                            GACO_GAME_COMPANY: any; MOAB_MONSTER_ATTRIBUTEs: any; GASYMO_ARMOR_CLASS: number;
                            GASYMO_HIT_DICE_TYPE: number; GASYMO_HIT_DICE_NUM: number; GASYMO_XP_VALUE: number
                            GASYMO_AC_TYPE_DETAIL: string; SZ_SIZE: any; MOTY_MONSTER_TYPE: any
                        }) => (
                            <Grid sm={12} md={5}>
                                <Card css={{mw: "330px"}} key={item.GASYMO_ID+item.GASYMO_DISPLAY_NAME}
                                      variant="bordered" isPressable isHoverable
                                      onPressEnd={() => displayModal(item.GASYMO_ID)}>
                                    <Card.Header>
                                        <Text b>{item.GASYMO_DISPLAY_NAME}</Text><br></br>
                                    </Card.Header>
                                    <Card.Divider/>
                                    <Card.Body css={{py: "$10"}}>
                                        <Text>
                                            {item.MOAB_MONSTER_ATTRIBUTEs.map(
                                                (item_as: { MOAB_ID: React.Key; MOAB_DISPLAY_TEXT: string }) => (
                                                    <Text>{item_as.MOAB_DISPLAY_TEXT}</Text>
                                                ))}
                                        </Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row justify="flex-end">
                                            <Text>{item.GACO_GAME_COMPANY.GACO_NAME}</Text>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Grid>
                        ))}
                        {/*{console.log(data)}*/}
                    </Grid.Container>
                ) : (
                    <Grid.Container md>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Progress
                                indeterminated
                                value={50}
                                color="secondary"
                                status="secondary"
                            />
                        </div>
                    </Grid.Container>
                )}
            </div>
        </NextUIProvider>
    );
};

export default CreatureDatabase;