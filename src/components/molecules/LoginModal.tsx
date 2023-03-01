import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import ModalContainer from "../atoms/ModalContainer";

export default function LoginModal() {
  React.useEffect(() => {
    handler();
  }, []);
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <ModalContainer
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      headerContent={
        <Text id="modal-title" size={18}>
          Welcome to&nbsp;
          <Text b size={18}>
            Cuinetes
          </Text>
        </Text>
      }
      bodyContent={
        <>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            // contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </>
      }
      footerContent={
        <>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign in
          </Button>
        </>
      }
    />
  );
}
