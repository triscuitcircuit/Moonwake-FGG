import {Modal, Spacer, Text} from "@nextui-org/react";
import React, {useEffect} from 'react';
import {Connection} from "../Database/Connection";

interface Props {
    monsterId: number;
    isOpen: boolean,
    onClose: () => void;
}


export const MonsterModal: React.FC<Props> = ({isOpen, onClose, monsterId}) => {
    const [data, setData] = React.useState<any>(null);

    const connection = new Connection("http://localhost:8080/api/gasymo_game_system_monster");


    useEffect(() => {
        connection.getById(monsterId).then((data) => setData(data));

    }, [monsterId]);

    useEffect(() => {
        if (!isOpen)
            setData(null);
    }, [isOpen]);

    return (
        <div>
            {data ? (
                <div>
                    <Modal
                        blur
                        scroll
                        width="700px"
                        closeButton
                        aria-labelledby="modal-title"
                        open={isOpen}
                        onClose={onClose}
                    >
                        <Modal.Header>
                            <Text id="modal-title" size={18}>
                                {data.GASYMO_DISPLAY_NAME}
                            </Text>
                        </Modal.Header>
                        <Modal.Body>
                            <Text
                                size={30}
                                css={{
                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                }}
                                weight="bold"
                            >
                                Description:
                            </Text>
                            {data.MODI_MONSTER_DISPLAYs.map(
                                (item: { MODI_ID: number, MODI_HTML_TAGGED_TEXT: any }) => (
                                    <Text>
                                        {<div dangerouslySetInnerHTML={{__html: item.MODI_HTML_TAGGED_TEXT}}/>}
                                    </Text>
                                ))}
                        </Modal.Body>
                        <Modal.Footer>
                            {data.GACO_GAME_COMPANY.GACO_NAME}
                        </Modal.Footer>
                    </Modal>
                </div>
            ) : (<Text></Text>
            )}
        </div>
    )
}