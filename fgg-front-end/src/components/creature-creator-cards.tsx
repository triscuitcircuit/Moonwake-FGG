import React from "react";
import {Card, Text, Col, Row, Button, Input, Dropdown} from "@nextui-org/react";

interface Props {
    onButtonClick: () => void;
}

interface AttributeInputProps {
    name: string;
    value: string;
    setSelection: (selection: string) => void;
}

interface SpeedInputProps {
    name: string;
}

export const StartNew: React.FC<Props> = ({ onButtonClick }) => (
    <Card>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text h3 color="white">
                    Start a new creature
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src="https://nextui.org/images/card-example-4.jpeg"
            objectFit="cover"
            width="100%"
            height={340}
            alt="Card image background"
        />
        <Card.Divider />
        <Card.Footer>
            <Row justify="center">
                <Button size="sm" onClick={onButtonClick}>Start</Button>
            </Row>
        </Card.Footer>
    </Card>
);

export const Auto = () => (
    <Card>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text h3 color="white" >
                    Auto generate a creature
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src="https://nextui.org/images/card-example-4.jpeg"
            objectFit="cover"
            width="100%"
            height={340}
            alt="Card image background"
        />
        <Card.Divider />
        <Card.Footer>
            <Row justify="center">
                <Button size="sm">Auto</Button>
            </Row>
        </Card.Footer>
    </Card>
);
export const StrengthCard = () => (
    <Card
        variant="bordered"
        css={{
            width: "120px",
        }}
    >
        <Card.Body>
            <Text
                h5
                css={{
                    textAlign: "center",
                }}
            >
                Strength
            </Text>
        </Card.Body>
    </Card>
);

export const DexCard = () => (
    <Card
        variant="bordered"
        css={{
            width: "120px"
        }}
    >
        <Card.Body>
            <Text
                h5
                css={{
                    textAlign: "center"
                }}
            >
                Dexterity
            </Text>
        </Card.Body>
    </Card>
);

export const ConCard = () => (
    <Card
        variant="bordered"
        css={{
            width: "120px"
        }}
    >
        <Card.Body>
            <Text
                h5
                css={{
                    textAlign: "center"
                }}
            >
                Constitution
            </Text>
        </Card.Body>
    </Card>
);

export const IntCard = () => (
    <Card
        variant="bordered"
        css={{
            width: "120px"
        }}
    >
        <Card.Body>
            <Text
                h5
                css={{
                    textAlign: "center"
                }}
            >
                Intelligence
            </Text>
        </Card.Body>
    </Card>
);

export const WisCard = () => (
    <Card
        variant="bordered"
        css={{
            width: "120px"
        }}
    >
        <Card.Body>
            <Text
                h5
                css={{
                    textAlign: "center"
                }}
            >
                Wisdom
            </Text>
        </Card.Body>
    </Card>
);

export const CharCard = () => (
    <Card
        variant="bordered"
        css={{
            width: "120px"
        }}
    >
        <Card.Body>
            <Text
                h5
                css={{
                    textAlign: "center"
                }}
            >
                Charisma
            </Text>
        </Card.Body>
    </Card>
);

export const SpeedInput: React.FC<SpeedInputProps> = ({name}) => (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            }}
    >
        <Text h5>{name}</Text>
        <Input
            type="number"
            placeholder="----"
            size="lg"
        />
    </div>
);

export const AttributeInput: React.FC<AttributeInputProps> = ({name, value, setSelection}) => (
    <div
        style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            width: "100%",
            }}
    >
        <Text h5>{name}</Text>
        <Dropdown>
            <Dropdown.Button flat css={{ width: "100%"}}>
                {value}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="${name} attribute menu"
                disallowEmptySelection
                selectionMode="single"
                css={{ maxHeight: "400px", overflow: "auto" }}
                // @ts-ignore
                onSelectionChange={setSelection}
            >
                {[...Array(100)].map((_, i) => (
                    <Dropdown.Item key={i}>
                        {i}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    </div>
);