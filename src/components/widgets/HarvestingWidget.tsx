import React from "react";
import { Message } from "semantic-ui-react";

export function HarvestingWidget() {
  return (
    <Message color="orange">
      <Message.Header>Harvesting</Message.Header>
      <p>Your plants that you can plant.</p>
    </Message>
  );
}
