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