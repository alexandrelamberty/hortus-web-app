import React from 'react'
import { SpeciesForm } from 'src/components/form/SpeciesForm'
import SpeciesTable from 'src/components/table/SpeciesTable'
import {
  Button,
  Container,
  Icon,
  Grid,
  Header,
  Modal,
  Dropdown,
} from 'semantic-ui-react'
import SpeciesGrid from 'src/components/grid/SpeciesGrid'
import SpeciesFilters from 'src/components/SpeciesFilters'

export function SpeciesCalendarRoute() {
  const handleSubmit = (): void => {
    console.log('SpeciesRoute:handleSubmit')
  }

  return (
    <Container>
      <div>
        <SpeciesFilters />
      </div>
      <SpeciesGrid />
    </Container>
  )
}
