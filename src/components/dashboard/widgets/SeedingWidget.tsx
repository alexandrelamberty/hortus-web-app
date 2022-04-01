import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Culture } from 'src/interfaces/Culture'
import {
  Button,
  Dropdown,
  DropdownProps,
  Form,
  Message,
} from 'semantic-ui-react'
import { CultureContext } from 'src/providers/CultureProvider'
import { SeedContext } from 'src/providers/SeedProvider'

export function SeedingWidget() {
  const { seeds, fetchSeeds } = React.useContext(SeedContext)
  const { createCulture } = React.useContext(CultureContext)
  const [formData, setFormData] = React.useState<Culture | {}>()

  fetchSeeds()
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
  }

  return (
    <Message>
      <Message.Header>Seeding</Message.Header>
      <p>Seeds you can start now.</p>
    </Message>
  )
}