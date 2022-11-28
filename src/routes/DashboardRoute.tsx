import { Container, Grid } from "semantic-ui-react";
import { HarvestingWidget } from "src/components/widgets/HarvestingWidget";
import { PlantingWidget } from "src/components/widgets/PlantingWidget";
import { SeedingWidget } from "src/components/widgets/SeedingWidget";
import { SensorHumidityWidget } from "src/components/widgets/SensorHumidityWidget";
import { SensorTemperatureWidget } from "src/components/widgets/SensorTemperatureWidget";
import { TransplantingWidget } from "src/components/widgets/TransplantingWidget";
import { WeatherWidget } from "src/components/widgets/WeatherWidget";

export function DashboardRoute() {
  return (
    <Container>
      <Grid>
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
