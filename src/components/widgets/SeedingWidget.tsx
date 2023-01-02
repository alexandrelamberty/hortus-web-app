import React from "react";
import { Message } from "semantic-ui-react";
import { SeedContext } from "src/contexts/SeedContextProvider";
import ListLight from "../list/ListLight";

interface CultureWidgetProps {
  header: string;
  text: string;
  data: [];
}
export function SeedingWidget() {
  const { seeds } = React.useContext(SeedContext);

  return (
    <Message size="tiny">
      <Message.Header>Seeding</Message.Header>
      <p>Culture that are not started and can be sowed</p>
      <ListLight />
    </Message>
  );
}
