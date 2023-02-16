// Defines the look and style of the home page

import React from "react";
import {
    Avatar,
    Collapse,
    Container,
    Grid,
    NextUIProvider,
    createTheme,
    Pagination,
    User,
    Navbar,
    Button
} from "@nextui-org/react";
import {Card1, Card2, Card3} from "../Display/Card";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const theme = createTheme({
    type: "dark",
});

// getUserDataGoogle
// pulls user data from user's google account
const getUserDataGoogle = async (accessToken: string) => {
    const { data } = await axios.get(`http://localhost:3001/api/google/userData?accessToken=${accessToken}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    return data
}

// UserdataGoogle
// holds information of user's name, picture, and email
interface UserdataGoogle {
    name: string
    picture: string
    email: string
}

const HomeDemo = () => {

    const [userDataGoogle, setUserDataGoogle] = useState<null | UserdataGoogle>(null)

    // loginWith
    // gets the service user used to log in (Google only atm)
    const loginWith = useRef(localStorage.getItem("loginWith"))

    const navigate = useNavigate()

    // get and set user's Google user data
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken")

        if (accessToken && loginWith.current === "Google") {
            getUserDataGoogle(accessToken).then(resp => {
                setUserDataGoogle(resp)
            })
        }
    }, [loginWith])

    // setLogOut
    // Log the user out, removing tokens from local storage
    const setLogOut = () => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("loginWith")
        // could use navigate("path") to force user back to screen upon logout
    }

    // if (!userDataGoogle) return null

    return (
        <NextUIProvider theme={theme}>
            <Navbar isBordered variant = 'sticky'>
                <Navbar.Brand>
                    <User
                        name={userDataGoogle?.name}
                        src={userDataGoogle?.picture}
                        description={userDataGoogle?.email}
                        bordered
                        color = 'primary'
                        size = 'lg'
                    />
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Item>
                        <Button
                            auto
                            flat
                            size='sm'
                            color='primary'
                            onClick={() => setLogOut()}
                        >
                            Log out
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
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
    )
}

export default HomeDemo;