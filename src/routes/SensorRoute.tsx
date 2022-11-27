import React, { useContext, useEffect } from "react";
import { Button, Container, Modal } from "semantic-ui-react";
import ActionControlls from "src/components/ActionControlls";
import { SeedForm } from "src/components/form/SeedForm";
import SensorsTable from "src/components/table/SensorTable";
import { SensorContext } from "src/providers/SensorProvider";

export function SensorRoute() {
  const handleClick = () => {};
  const handleAdd = () => {};

  const onSubmit = () => {
    console.log("onSubmit");
  };

  const onCancel = () => {
    console.log("onCancel");
  };

  const handleDelete = () => {};

  const handleChange = () => {};

  useEffect(() => {}, []);

  return <Container></Container>;
}
