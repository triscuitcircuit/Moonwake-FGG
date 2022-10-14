import {Button, Checkbox, Input, Modal, Row, Text} from "@nextui-org/react";
import React from "react";
export const [visible, setVisible] = React.useState(false);
export const handler = () => setVisible(true);
export const closeHandler = () => {
    setVisible(false);
    console.log("closed");
};
export const LoginModalWindow = () => (
    <Modal
        blur
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
    >
        <Modal.Header>
            <Text id="modal-title" size={18}>
                <Text b size={18}>
                    FrogGodGames Login
                </Text>
            </Text>
        </Modal.Header>        <Modal.Body>
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
            />
            <Row justify="space-between">
                <Checkbox>
                    <Text size={14}>Remember me</Text>
                </Checkbox>
                <Text size={14}>Forgot password?</Text>
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
                Close
            </Button>
            <Button auto onClick={closeHandler}>
                Sign in
            </Button>
        </Modal.Footer>
    </Modal>

)