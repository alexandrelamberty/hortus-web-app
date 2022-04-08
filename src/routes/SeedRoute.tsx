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
      <Button icon='add' positive onClick={handleClick} />
			<Button icon='trash' />
      <SeedGrid />
      <Modal
			size='small'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
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
