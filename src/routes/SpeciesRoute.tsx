import { SpeciesForm } from 'src/components/form/SpeciesForm'
import SpeciesTable from 'src/components/table/SpeciesTable'
import { Grid } from 'semantic-ui-react'

export function SpeciesRoute() {
  return (
    <div className="flex">
			<div>
      <SpeciesTable />
			</div>
      <SpeciesForm />
    </div>
  )
}
