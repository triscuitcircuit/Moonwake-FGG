import React from "react";
import { Card, Text, Col, Row, Button } from "@nextui-org/react";

interface Props {
    onButtonClick: () => void;
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