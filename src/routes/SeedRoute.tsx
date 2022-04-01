import { SeedForm } from 'src/components/form/SeedForm'
import { Button, Container, Icon, Grid, Header, Modal } from 'semantic-ui-react'
import React from 'react'
import SeedGrid from 'src/components/grid/SeedGrid'

export function SeedRoute() {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Container>
      <Button icon positive labelPosition='left' onClick={handleClick}>
        <Icon name='add' />
        Seed
      </Button>
	  <Button icon='trash' />
      <SeedGrid />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='large'
      >
        <Modal.Header>Seed</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <SeedForm />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Save"
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
