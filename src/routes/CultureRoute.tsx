import React from 'react'
import { Button, Container, Icon, Modal } from 'semantic-ui-react'
import { CultureForm } from 'src/components/form/CultureForm'
import CultureList from 'src/components/list/CultureList'

export function CultureRoute() {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

	const onSubmit = () => {
		console.log("onSubmit")
	}
	
	const onCancel = () => {
		console.log("onCancel")
	}

  return (
    <Container>
      <Button icon positive labelPosition='left' onClick={handleClick}>
        <Icon name='add' />
        Culture
      </Button>
      <CultureList />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Select a Seed</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <CultureForm onSubmitted={onSubmit} onCancel={onCancel} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Create"
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
