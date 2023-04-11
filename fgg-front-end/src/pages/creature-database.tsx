import React, {useEffect, useState} from "react";
import {
    Text, Table,
    NextUIProvider,
    createTheme, Progress, Grid, Card, Container, Row, Badge, Pagination, Loading, Tooltip, Button,
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
// todo if searchQuery is "" or &gAND=true or &gAND=false - don't display the page changing stuff
const CreatureDatabase = ({ searchQuery }: Props) => {

    const connection = new Connection("http://localhost:8080/api/gasymo_game_system_monster?" + searchQuery);

    console.log(searchQuery);

    const [data, setData] = React.useState<any>(null);
    const [card, setCard] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [page, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // if sQ contains no associated values - pagentation is still on - display page choice buttons
    let sQassocFree = true;
    if(searchQuery.includes("str") || searchQuery.includes("hp") || searchQuery.includes("m_size") ||
        searchQuery.includes("dex") || searchQuery.includes("con") || searchQuery.includes("int") ||
        searchQuery.includes("wis") || searchQuery.includes("chr") || searchQuery.includes("author"))
    {
        sQassocFree = false;
    }

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


    // @ts-ignore
    // @ts-ignore
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
                            {sQassocFree &&
                            <Grid>
                                <Container justify="center">
                                    {loading && <Loading type="points"/>}
                                    <Pagination total={data.totalPages} initialPage={1} page={page}
                                                onChange={fetchPage}/>
                                </Container>
                            </Grid>}
                        </div>
                        <MonsterModal isOpen={modalOpen} monsterId={card} onClose={handleModalClose} />
                        <Table
                            bordered
                            compact
                            shadow={false}
                            aria-label={"Skills selection table"}
                            css={{
                                flex: "1",
                                height: "auto",
                            }}
                        >
                            <Table.Header>
                                <Table.Column width="40%">NAME</Table.Column>
                                <Table.Column width="40%">AC</Table.Column>
                                <Table.Column width="40%">ARMOR TYPE</Table.Column>
                                <Table.Column width="40%">HIT DICE</Table.Column>
                                <Table.Column width="40%">XP</Table.Column>
                                <Table.Column width="40%">SIZE</Table.Column>
                                <Table.Column width="40%">CREATOR</Table.Column>
                                <Table.Column width="40%">INSPECT</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {data.monsters.map((item: {MODI_MONSTER_DISPLAYs: any;
                                    GASYMO_ID: React.Key; GASYMO_DISPLAY_NAME: string,
                                    GASYMO_HIT_DICE_TYPE: number,MOAB_MONSTER_ATTRIBUTEs: any,
                                    GACO_GAME_COMPANY: any,
                                    GASYMO_ARMOR_CLASS: number, GASYMO_XP_VALUE: number,
                                    SZ_SIZE: any; GASYMO_AC_TYPE_DETAIL: string}, index: React.Key)=>(
                                    <Table.Row key={Number(index)+item.GASYMO_XP_VALUE}>
                                        <Table.Cell>
                                            <Tooltip
                                                css={{
                                                    zIndex: 99999
                                                }}
                                                content=
                                                    {item.MOAB_MONSTER_ATTRIBUTEs.map((item_as: { MOAB_ID: React.Key; MOAB_DISPLAY_TEXT: string }) => (item_as.MOAB_DISPLAY_TEXT))}>
                                                {item.GASYMO_DISPLAY_NAME}
                                            </Tooltip>
                                        </Table.Cell>
                                        <Table.Cell>{item.GASYMO_ARMOR_CLASS}</Table.Cell>
                                        <Table.Cell>{item.GASYMO_AC_TYPE_DETAIL}</Table.Cell>
                                        <Table.Cell>d{item.GASYMO_HIT_DICE_TYPE}</Table.Cell>
                                        <Table.Cell>{item.GASYMO_XP_VALUE}</Table.Cell>
                                        <Table.Cell>{item.SZ_SIZE.SZ_NAME}</Table.Cell>
                                        <Table.Cell>{item.GACO_GAME_COMPANY.GACO_NAME}</Table.Cell>
                                        <Table.Cell>
                                            <Tooltip content="Inspect">
                                                <Button bordered color="primary" auto
                                                        onClick={()=>displayModal(item.GASYMO_ID)}>
                                                    Go!
                                                </Button>
                                            </Tooltip>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>

                        </Table>
                    </Grid.Container>
                ) : (
                    <Grid.Container md>
                        <div
                            style={{
                                display: "flex",
                                margin: "0 auto"
                            }}
                        >
                            <Loading
                                //indeterminated
                                //value={50}
                                color="secondary"
                                //status="secondary"
                            />
                        </div>
                    </Grid.Container>
                )}
            </div>
        </NextUIProvider>
    );
};

export default CreatureDatabase;