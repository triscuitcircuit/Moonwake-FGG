import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import {conTest} from "../Database/Connection";
import Nav from "../components/Navbar";
import HomeDemo from "../components/Home-Demo";
import CreatureCreator from "../pages/creature-creator";
import CreatureDatabase from "../pages/creature-database";
import Books from "../pages/books";
import HelpFeedback from "../pages/help-feedback";
import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import Connection from "../Database/Connection";

const theme = createTheme({
  type: "dark",
});

function App() {
  const [count, setCount] = useState(0);
  console.log(Connection.getAB_ATTRIBUTE())
  // @ts-ignore
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeDemo />} />
        <Route path="/creature-creator" element={<CreatureCreator />} />
        <Route path="/creature-database" element={<CreatureDatabase />} />
        <Route path="/books" element={<Books />} />
        <Route path="/help-feedback" element={<HelpFeedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
