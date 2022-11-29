import React from "react";
import { Message } from "semantic-ui-react";
import ListLight from "../list/ListLight";

export function PlantingWidget() {
  return (
    <Message size="tiny">
      <Message.Header>Planting</Message.Header>
      <p>Culture that can be planted</p>
      <ListLight />
    </Message>
  );
}
