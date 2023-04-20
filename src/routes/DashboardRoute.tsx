import { Container, Grid } from "semantic-ui-react";
import { GerminationWidget } from "../components/widgets/GerminationWidget";
import { HarvestingWidget } from "../components/widgets/HarvestingWidget";
import { PlantingWidget } from "../components/widgets/PlantingWidget";
import { SeedingWidget } from "../components/widgets/SeedingWidget";
import { SensorHumidityWidget } from "../components/widgets/SensorHumidityWidget";
import { SensorTemperatureWidget } from "../components/widgets/SensorTemperatureWidget";
import { TransplantingWidget } from "../components/widgets/TransplantingWidget";
import { WeatherWidget } from "../components/widgets/WeatherWidget";

const list = [
  {
    name: "Carrots",
  },
  {
    name: "Beets",
  },
  {
    name: "Corn",
  },
];
export function DashboardRoute() {
  return (
    <Container>
      <Grid>
        {/* Weather widgets */}
        <Grid.Row columns={3}>
          <Grid.Column>
            <WeatherWidget />
          </Grid.Column>
          <Grid.Column>
            <SensorTemperatureWidget time="11:30" />
          </Grid.Column>
          <Grid.Column>
            <SensorHumidityWidget time="11:30" />
          </Grid.Column>
        </Grid.Row>
        {/*  Seed widgets */}
        <Grid.Row columns={4} className="">
          <Grid.Column>
            <GerminationWidget />
          </Grid.Column>
          <Grid.Column>
            <HarvestingWidget />
          </Grid.Column>
          <Grid.Column>
            <TransplantingWidget />
          </Grid.Column>
          <Grid.Column>
            <HarvestingWidget />
          </Grid.Column>
        </Grid.Row>
        {/*  Culture widgets */}
        <Grid.Row columns={4} className="">
          <Grid.Column>
            <SeedingWidget />
          </Grid.Column>
          <Grid.Column>
            <PlantingWidget />
          </Grid.Column>
          <Grid.Column>
            <TransplantingWidget />
          </Grid.Column>
          <Grid.Column>
            <HarvestingWidget />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
