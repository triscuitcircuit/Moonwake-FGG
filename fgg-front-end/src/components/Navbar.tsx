import React from "react";
import {
    Navbar,
    Button,
    Input,
    Link,
    NextUIProvider,
    createTheme,
} from "@nextui-org/react";
import {Layout} from "../Display/Layout";

const theme = createTheme({
    type: "dark",
});

const collapseItems = [
    { text: "Home", href: "/" },
    { text: "Creature Creator", href: "/creature-creator" },
    { text: "Creature Database", href: "/creature-database" },
    { text: "Books", href: "/books" },
    { text: "Help & Feedback", href: "/help-feedback" },
    { text: "Login", href: "/login" },
    { text: "Sign Up", href: "/sign-up" },
];

const Nav = () => {
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
                            <Navbar.CollapseItem key={item.text}>
                                <Link
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href={item.href}
                                >
                                    {item.text}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                    </Navbar.Collapse>
                </Navbar>{" "}
            </Layout>
        </NextUIProvider>
    )
}

export default Nav;