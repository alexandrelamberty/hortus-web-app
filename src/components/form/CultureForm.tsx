import React, { useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Culture } from 'src/interfaces/Culture'
import { Button, Dropdown, DropdownProps, Form } from 'semantic-ui-react'
import { CultureContext } from 'src/providers/CultureProvider'
import { SeedContext } from 'src/providers/SeedProvider'

type FormProps = {
	onSubmitted: () => void;
	onCancel: () => void;
}

export function CultureForm(props: FormProps) {
  const { seeds, fetchSeeds } = React.useContext(SeedContext)
  const { createCulture } = React.useContext(CultureContext)
  const [formData, setFormData] = React.useState<Culture | {}>()

  useEffect(() => {
    fetchSeeds()
  }, [fetchSeeds])

  const seedsOption = seeds.map((sd) => ({
    value: sd._id,
    key: sd._id,
    text: sd.name,
  }))

  const handleChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ): void => {
    setFormData({
      ...formData,
      ['seed']: data,
    })
    console.log(formData)
    console.log(data)
  }

  const handleSubmit = (e: React.FormEvent, formData: Culture | any) => {
    e.preventDefault()
    console.log(formData)
    createCulture(formData)
		props.onSubmitted()
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e, formData)}>
      <Form.Field>
        <label>Seed</label>
        <Dropdown
          id='seed'
          button
          className='icon'
          floating
          labeled
          icon='world'
          options={seedsOption}
          search
          label='name'
          text='Select Language'
          onChange={handleChange}
        />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
