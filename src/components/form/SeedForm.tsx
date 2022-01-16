import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { SpeciesContext } from 'src/providers/SpeciesProvider'
import { Species } from 'src/interfaces/Species'
import { Button, Form } from 'semantic-ui-react'

export function SeedForm() {
  const { createSpecies } = React.useContext(SpeciesContext)
  const [formData, setFormData] = React.useState<Species | {}>()

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleSubmit = (e: React.FormEvent, formData: Species | any) => {
    e.preventDefault()
    console.log(formData)
    createSpecies(formData)
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e, formData)}>
      <Form.Field>
        <label>Species</label>
        <input id='species' placeholder='Species' onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Name</label>
        <input id='name' placeholder='Name' onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          id='description'
          placeholder='Description'
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Type</label>
        <input id='Type' placeholder='Type' onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Season</label>
        <Button.Group>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
      </Form.Field>
      <Form.Field>
        <label>Sun</label>
        <Button.Group>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
      </Form.Field>
      <Form.Field>
        <label>Frost</label>
        <Button.Group>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
      </Form.Field>
      <Form.Field>
        <label>Water</label>
        <Button.Group>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
      </Form.Field>
      <Form.Field>
        <label>Companions</label>
      </Form.Field>
       <Form.Field>
        <label>Competitors</label>
      </Form.Field>
			<Form.Field>
        <label>Seeding</label>
      </Form.Field>
			<Form.Field>
        <label>Transplanting</label>
      </Form.Field>
		 	<Form.Field>
        <label>Planting</label>
      </Form.Field>
		 	<Form.Field>
        <label>Harvesting</label>
      </Form.Field>
		 	<Form.Field>
        <label>Spacing</label>
      </Form.Field>
		 	<Form.Field>
        <label>Rows</label>
      </Form.Field>
      <Button disabled={formData === undefined ? true : false} type='submit'>
        Submit
      </Button>
    </Form>
  )
}
