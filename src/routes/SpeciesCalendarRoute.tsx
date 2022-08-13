import React from "react";
import { Container } from "semantic-ui-react";
import PlantGrid from "src/components/grid/PlantGrid";
import SpeciesFilters from "src/components/SpeciesFilters";

export function SpeciesCalendarRoute() {
  return (
    <Container>
      <div>
        <SpeciesFilters />
      </div>
      <PlantGrid />
    </Container>
  );
}
