import React from "react";
import {
    Navbar,
    Image,
    Link,
} from "@nextui-org/react";

const collapseItems = [
    { text: "Home", href: "/" },
    { text: "Creature Creator", href: "/creature-creator" },
    { text: "Creature Database", href: "/creature-database" },
    { text: "Search & Filter", href: "/search_and_filter" },
];

const Nav = () => {

    // find which page the user is on
    const isActive = (href: string) => {
        return window.location.pathname === href;
    }

    return (
        <Navbar isBordered variant="sticky" color="#2c3e50" css={{ position: "sticky" }}>
            <Navbar.Toggle showIn="md" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <Image
                    width={"200px"}
                    src={"./logo.png"}
                    alt="Frog God Games"
                    objectFit={"contain"}
                />
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="primary"
                hideIn="md"
                variant="underline"
            >
                {collapseItems.map((item) => (
                    <Navbar.Link
                        key={item.text}
                        href={item.href}
                        color={isActive(item.href) ? "primary" : "inherit"}
                    >
                        {item.text}
                    </Navbar.Link>
                ))}
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item) => (
                    <Navbar.CollapseItem
                        key={item.text}
                        activeColor="secondary"
                    >
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
        </Navbar>
    )
}

export default Nav;