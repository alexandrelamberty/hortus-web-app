import React from "react";
import { Message } from "semantic-ui-react";
import ListExampleDivided from "../list/ListExampleDivided";

export function TransplantingWidget() {
  return (
    <Message color="green">
      <Message.Header>Transplanting</Message.Header>
      <p>Your plants that you can transplant.</p>
      <ListExampleDivided />
    </Message>
  );
}
