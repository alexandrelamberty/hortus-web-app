import { Container, Grid, Message } from 'semantic-ui-react'
import { HarvestingWidget } from 'src/components/dashboard/widgets/HarvestingWidget'
import { PlantingWidget } from 'src/components/dashboard/widgets/PlantingWidget'
import { SeedingWidget } from 'src/components/dashboard/widgets/SeedingWidget'
import { TransplantingWidget } from 'src/components/dashboard/widgets/TransplantingWidget'
import { WeatherWidget } from 'src/components/dashboard/widgets/WeatherWidget'

export function Dashboard() {
  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <WeatherWidget />
          </Grid.Column>
          <Grid.Column>
            <SeedingWidget />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <TransplantingWidget />
          </Grid.Column>
          <Grid.Column>
            <PlantingWidget />
          </Grid.Column>
          <Grid.Column>
            <HarvestingWidget />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
