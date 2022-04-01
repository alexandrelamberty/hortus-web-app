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
import React from 'react'
import SpeciesGrid from 'src/components/grid/SpeciesGrid'
import SpeciesFilters from 'src/components/SpeciesFilters'

const options = [
  {
    key: 'today',
    text: 'today',
    value: 'today',
    content: 'Today',
  },
  {
    key: 'this week',
    text: 'this week',
    value: 'this week',
    content: 'This Week',
  },
  {
    key: 'this month',
    text: 'this month',
    value: 'this month',
    content: 'This Month',
  },
]

export function SpeciesRoute() {
  const [open, setOpen] = React.useState(false)

  const handleAdd = () => {
    setOpen(!open)
  }

  const handleDelete = () => {
    setOpen(!open)
  }

  const handleSubmit = () : void => {
    console.log('SpeciesRoute:handleSubmit')
    setOpen(!open)
  }

  return (
    <Container>
	  <div>
      <Button icon positive labelPosition='left' onClick={handleAdd}>
        <Icon name='add' />
        Culture
      </Button>
      <Button content='Delete' onClick={handleDelete} />
      <SpeciesFilters />
	  </div>
      <SpeciesGrid />
      <Modal
        size='mini'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>New Seed</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <SpeciesForm />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content='Save'
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </Container>
  )
}
