import React, {useState} from "react";
import {Card, Text, Col, Row, Button, Input, Dropdown} from "@nextui-org/react";

interface Props {
    onButtonClick: () => void;
}

interface AttributeInputProps {
    name: string;
    value: string;
    setValue: (value: string) => void;
}

interface SpeedInputProps {
    name: string;

    setSpeed: (value: number) => void;
}

interface ChallengeRatingProps {
    value: number;
    setChallengeRating: (value: number) => void;
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
                <Button size="sm" onPress={onButtonClick}>Start</Button>
            </Row>
        </Card.Footer>
    </Card>
);

export const Auto: React.FC<Props> = ({onButtonClick}) => (
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
                <Button size="sm" onPress={onButtonClick}>Auto</Button>
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

export const SpeedInput: React.FC<SpeedInputProps> = ({name, setSpeed}) => {
    const [value, setValue] = useState<number | "">(0);
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue === "") {
            setValue("");
            setShowWarning(false);
            setShowError(false);
            setWarningMessage("");
        } else if (!isNaN(Number(inputValue)) && Number(inputValue) >= 0 && Number(inputValue) < 1000) {
            setValue(Number(inputValue));
            if (Number(inputValue) > 400) {
                setShowWarning(true);
                setShowError(false);
                setWarningMessage("Speed is very fast");
                setSpeed(Number(inputValue));
                // {console.log("Speed: " + Number(inputValue))}
            }
            else if (Number(inputValue) % 5 !== 0) {
                    setShowWarning(true);
                    setShowError(false);
                    setWarningMessage("Value should be divisible by 5");
                    setSpeed(Number(inputValue));
                    // {console.log("Speed: " + Number(inputValue))}
            }
            else {
                setShowWarning(false);
                setShowError(false);
                setWarningMessage("");
                setSpeed(Number(inputValue));
                // {console.log("Speed: " + Number(inputValue))}
            }
        } else if (Number(inputValue) >= 1000) {
            setShowError(true);
            setShowWarning(false);
            setErrorMessage("Keep speed under 1000");
        } else {
            setShowError(true);
            setShowWarning(false);
            setErrorMessage("Invalid input value");
        }
    };

    return (
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
                value={value}
                onChange={handleChange}
                helperText={showWarning ? warningMessage : showError ? errorMessage : ""}
                helperColor={showWarning ? "warning" : showError ? "error" : "default"}
            />
        </div>
    );
}

export const AttributeInput: React.FC<AttributeInputProps> = ({name, value, setValue}) => {

    return (
        <div
            style={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
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
                    onAction={setValue}
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
};

export const ChallengeRatingInput: React.FC<ChallengeRatingProps> = ({ value, setChallengeRating}) => {

    const dropdownItems = [
        { key: "0", value: 0 },
        { key: "1/8", value: 1/8 },
        { key: "1/4", value: 1/4 },
        { key: "1/2", value: 1/2 },
    ];

    for (let i = 1; i <= 40; i++) {
        const value = i;
        dropdownItems.push({ key: value.toString(), value: value });
    }

    return (
        <div
            style={{
                flex: "1",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px",
            }}
        >
            <Dropdown>
                <Dropdown.Button flat css={{ width: "100%" }}>
                    {value}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Challenge Rating menu"
                    disallowEmptySelection
                    selectionMode="single"
                    css={{ maxHeight: "400px", overflow: "auto" }}
                    onAction={setChallengeRating}
                >
                    {dropdownItems.map((item) => (
                        <Dropdown.Item key={item.key}>
                            {item.key}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}