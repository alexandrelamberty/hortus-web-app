import React, { ReactElement } from "react";
import { Container, Modal } from "semantic-ui-react";
import ActionControlls, { View } from "src/components/ActionControlls";
import { PlantForm } from "src/components/form/PlantForm";
import PaginationControlls from "src/components/PaginationControlls";
import PlantTable from "src/components/table/PlantTable";
import { PlantContext } from "src/providers/PlantContextProvider";

export function GardenRoute(): ReactElement {
  return <Container></Container>;
}
