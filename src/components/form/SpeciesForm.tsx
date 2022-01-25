import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { SpeciesContext } from 'src/providers/SpeciesProvider'
import { Species } from 'src/interfaces/Species'
import { Button, Form } from 'semantic-ui-react'

export function SpeciesForm() {
  const { createSpecies } = React.useContext(SpeciesContext)
  const [formData, setFormData] = React.useState<Species | {}>()

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
	console.log(formData)
  }

  const handleSubmit = (e: React.FormEvent, formData: Species | any) => {
    e.preventDefault()
		console.log(formData)
    createSpecies(formData)
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e, formData)}>
      <Form.Field>
        <label>Name</label>
        <input id='name' placeholder='Name' onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Family</label>
        <input id='family' placeholder='Family' onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Genus</label>
        <input id='genus' placeholder='Genus' onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Species</label>
        <input id='species' placeholder='Species' onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Subspecies</label>
        <input
          id='subspecies'
          placeholder='Subspecies'
          onChange={handleChange}
        />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
