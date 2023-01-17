import React, { useState } from "react";
import {
  Button,
  Navbar,
  Input,
  Dropdown,
  Grid,
  Collapse,
  Pagination,
  Checkbox,
  Text,
  Link,
  NextUIProvider,
  createTheme,
  Container,
  Spacer,
  Avatar,
  Modal,
  Row,
} from "@nextui-org/react";
import { Layout } from "./Layout";
import { Card1, Card2, Card3, Card4 } from "./Card";
import { LoginModalWindow, handler } from "./LoginWindow";

const theme = createTheme({
  type: "dark",
});
const collapseItems = [
  "Creature Creator",
  "Creature Database",
  "Books",
  "Help & Feedback",
  "Login",
  "Sign Up",
];

function App() {
  const [count, setCount] = useState(0);

  // @ts-ignore
  return (
    <NextUIProvider theme={theme}>
      <Layout>
        {" "}
        <Navbar isBordered variant="sticky">
          <Navbar.Brand css={{ mr: "$4" }}>
            <Navbar.Toggle aria-label="toggle navigation" />
            <img
              src="/logo.png"
              className="App-logo"
              alt="FrogGodGames logo"
              width={"100"}
              height={"50"}
            />
          </Navbar.Brand>
          <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
            <Navbar.Item
              css={{
                "@xsMax": {
                  w: "100%",
                  jc: "center",
                },
              }}
            >
              <Input
                clearable
                contentLeftStyling={false}
                css={{
                  w: "100%",
                  "@xsMax": {
                    mw: "800px",
                  },
                  "& .nextui-input-content--left": {
                    h: "100%",
                    ml: "$4",
                    dflex: "center",
                  },
                }}
                placeholder="Search Creatures..."
              />
            </Navbar.Item>
            <Navbar.Item
              css={{
                "@xsMax": {
                  w: "100%",
                  jc: "center",
                },
              }}
            >
              <Input
                clearable
                contentLeftStyling={false}
                css={{
                  w: "100%",
                  "@xsMax": {
                    mw: "800px",
                  },
                  "& .nextui-input-content--left": {
                    h: "100%",
                    ml: "$4",
                    dflex: "center",
                  },
                }}
                placeholder="Search Tags..."
              />
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Item>
              {/*<Button auto as={Link} href="#">*/}
              <Button.Group color="gradient">
                <Button>Login</Button>
                {/*<LoginModalWindow />*/}
                <Button>Sign Uo</Button>
              </Button.Group>
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Collapse>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem key={item}>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="src#"
                >
                  {item}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>{" "}
      </Layout>
      <Container justify="center">
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card1 />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card2 />
          </Grid>
        </Grid.Container>
      </Container>
      <Container justify="center">
        <Collapse.Group>
          <Collapse
            title="Recently Created Creatures"
            subtitle="Logged in User"
            contentLeft={
              <Avatar
                size="lg"
                color="secondary"
                text="User"
                bordered
                squared
              />
            }
            expanded
          >
            <Grid.Container gap={2} justify="center">
              <Grid xs={12} sm={4}>
                <Card3 />
              </Grid>
              <Grid>
                <Container justify="flex-end">
                  <Pagination total={14} initialPage={6} />
                </Container>
              </Grid>
            </Grid.Container>
          </Collapse>
        </Collapse.Group>
      </Container>
    </NextUIProvider>
  );
}

export default App;
