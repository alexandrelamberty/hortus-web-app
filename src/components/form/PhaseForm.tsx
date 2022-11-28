import React from "react";
import { Form } from "semantic-ui-react";

export const PhaseForm = () => {
  return (
    <Form>
      <Form.Field>
        <Form.Input label="Location" />
        <Form.Input label="Quantity" />
        <Form.Input label="Soil" />
      </Form.Field>
    </Form>
  );
};
