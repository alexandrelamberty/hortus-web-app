import React from "react";
import { PlantForm } from "src/components/form/PlantForm";
import PlantTable from "src/components/table/PlantTable";
import {
  Button,
  Container,
  Icon,
  Grid,
  Header,
  Modal,
  Dropdown,
} from "semantic-ui-react";
import PlantGrid from "src/components/grid/PlantGrid";
import SpeciesFilters from "src/components/SpeciesFilters";

export function SpeciesCalendarRoute() {
  const handleSubmit = (): void => {
    console.log("SpeciesRoute:handleSubmit");
  };

  return (
    <Container>
      <div>
        <SpeciesFilters />
      </div>
      <PlantGrid />
    </Container>
  );
}
