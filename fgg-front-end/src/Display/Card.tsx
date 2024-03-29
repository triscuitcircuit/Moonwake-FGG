// Defines cards for use in Home-Demo (components folder) page

import { Card, Col, Text, Row, Button } from "@nextui-org/react";

export const Card1 = () => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Recent Community made creature
        </Text>
        <Text h4 color="white">
          COS Dragon
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://cdn.shopify.com/s/files/1/0619/2172/2537/files/Picture2.png?v=1675814194&width=200,%20//cdn.shopify.com/s/files/1/0619/2172/2537/files/Picture2.png?v=1675814194"
      objectFit="cover"
      width="100%"
      height={500}
      alt="Card image background"
    />
    <Card.Divider />
    <Card.Footer>
      <Row justify="flex-end">
        <Button size="sm">Discover</Button>
      </Row>
    </Card.Footer>
  </Card>
);
export const Card2 = () => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Recently made creature
        </Text>
        <Text h4 color="white">
          Elf-Dwarf
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="http://cdn.shopify.com/s/files/1/0619/2172/2537/files/Temple_Orcus_Final_ColinChan.small.jpg?v=1676410810&width=200,%20//cdn.shopify.com/s/files/1/0619/2172/2537/files/Temple_Orcus_Final_ColinChan.small.jpg?v=1676410810"
      objectFit="cover"
      width="100%"
      height={500}
      alt="Card image background"
    />
    <Card.Divider />
    <Card.Footer>
      <Row justify="flex-end">
        <Button size="sm">Reference</Button>
      </Row>
    </Card.Footer>
  </Card>
);
export const Card3 = () => (
  <Card css={{ mw: "330px" }}>
    <Card.Header>
      <Text b>Creature Creator</Text>
    </Card.Header>
    <Card.Divider />
    <Card.Body css={{ py: "$10" }}>
      <Text>Jump into FrogGodGames Creature Creator</Text>
    </Card.Body>
    <Card.Divider />
    <Card.Footer>
      <Row justify="flex-end">
        <Button size="sm">Go To</Button>
      </Row>
    </Card.Footer>
  </Card>
);
export const Card4 = () => (
  <Card css={{ mw: "330px" }}>
    <Card.Header>
      <Text b>Search Tags</Text>
    </Card.Header>
    <Card.Divider />
    <Card.Body css={{ py: "$10" }}>
      <Text>Jump into Creature tags</Text>
    </Card.Body>
    <Card.Divider />
    <Card.Footer>
      <Row justify="flex-end">
        <Button size="sm">Go To</Button>
      </Row>
    </Card.Footer>
  </Card>
);
