import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Culture } from 'src/interfaces/Culture'
import { Button, Dropdown, Form } from 'semantic-ui-react'
import { CultureContext } from 'src/providers/CultureProvider'
import { SeedContext } from 'src/providers/SeedProvider'

export function CultureForm() {
  const { seeds, fetchSeeds } = React.useContext(SeedContext)
  const { createCulture } = React.useContext(CultureContext)
  const [formData, setFormData] = React.useState<Culture | {}>()

	fetchSeeds()
	const seedsOption = seeds.map( sd => ({ value: sd._id, key: sd._id, text: sd.name}))

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleSubmit = (e: React.FormEvent, formData: Culture | any) => {
    e.preventDefault()
    console.log(formData)
    createCulture(formData)
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e, formData)}>
      <Form.Field>
        <label>Seed</label>
        <Dropdown
					key="name"
          button
          className='icon'
          floating
          labeled
          icon='world'
          options={seedsOption}
          search
					label="name"
          text='Select Language'
        />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
