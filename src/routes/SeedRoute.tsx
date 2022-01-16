import { SeedForm } from 'src/components/form/SeedForm'
import { Container, Grid } from 'semantic-ui-react'
import SeedTable from 'src/components/table/SeedTable'

export function SeedRoute() {
  return (
    <Grid columns={2}>
      <Grid.Column>
        <SeedTable />
      </Grid.Column>
      <Grid.Column>
        <SeedForm />
      </Grid.Column>
    </Grid>
  )
}
