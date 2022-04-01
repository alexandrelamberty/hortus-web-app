import React, { SyntheticEvent, useEffect } from 'react'
import { Species } from 'src/interfaces/Species'
import {
  Button,
  Dropdown,
  Form,
  FormGroup,
  Grid,
  Image,
  Input,
} from 'semantic-ui-react'
import { Season } from 'src/enums/Season'
import { Sun } from 'src/enums/Sun'
import { Frost } from 'src/enums/Frost'
import { Water } from 'src/enums/Water'
import { Type } from 'src/enums/Type'
import { SeedContext } from 'src/providers/SeedProvider'
import { Seed } from 'src/interfaces/Seed'
import { SpeciesContext } from 'src/providers/SpeciesProvider'

export function SeedForm() {
  const { species, fetchSpecies } = React.useContext(SpeciesContext)
  const { seeds, createSeed } = React.useContext(SeedContext)
  const [formData, setFormData] = React.useState<Seed | {}>()

  useEffect(() => {
    fetchSpecies()
  }, [fetchSpecies])

  // Remapping collection for dropdown
  const speciesOptions = species.map((sd) => ({
    key: sd._id,
    text: sd.name,
    value: sd._id,
  }))

  // Todo make a hook
  const seasons = Object.entries(Season).map(([key, value]) => ({
    key: value,
    text: key,
    value: value,
  }))
  const water = Object.entries(Water).map(([key, value]) => ({
    key: value,
    text: key,
    value: value,
  }))
  const frost = Object.entries(Frost).map(([key, value]) => ({
    key: value,
    text: key,
    value: value,
  }))
  const sun = Object.entries(Sun).map(([key, value]) => ({
    key: value,
    text: key,
    value: value,
  }))
  const seed_type = Object.entries(Type).map(([key, value]) => ({
    key: value,
    text: key,
    value: value,
  }))

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log(formData)
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleTextAreaChange = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    console.log(formData)
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleSpeciesChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any
  ): void => {
    setFormData({
      ...formData,
      species: data.value,
    })
	console.log(formData)
  }
  
  const handleTypeChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any
  ): void => {
    setFormData({
      ...formData,
      type: data.value,
    })
	console.log(formData)
  }

  const handleSeasonChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any
  ): void => {
    setFormData({
      ...formData,
      season: data.value,
    })
	console.log(data)
  }

  const handleFrostChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any
  ): void => {
    setFormData({
      ...formData,
      frost: data.value,
    })
	console.log(data)
  }
  
  const handleSunChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any
  ): void => {
    setFormData({
      ...formData,
      sun: data.value,
    })
	console.log(data)
  }
  
  const handleWateringChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any
  ): void => {
    setFormData({
      ...formData,
      water: data.value,
    })
	console.log(data)
  }
  
  const handleCompanionsChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any
  ): void => {
    setFormData({
      ...formData,
      companions: data.value,
    })
	console.log(data)
  }

  const handleCompetitorsChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any
  ): void => {
    setFormData({
      ...formData,
      competitors: data.value,
    })
	console.log(data)
  }
  const handleSubmit = (e: React.FormEvent, formData: Seed | any) => {
    e.preventDefault()
    console.log(formData)
    createSeed(formData)
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e, formData)}>
      <Grid>
        <Grid.Column width={3}>
          <Image
            src='/images/wireframe/square-image.png'
            size='medium'
            rounded
          />

          <Form.Field>
            <Form.Input
              id='name'
              label='Name'
              placeholder='Name'
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              id='description'
              label='About'
              placeholder='Tell us more about you...'
              onChange={handleTextAreaChange}
            />
          </Form.Field>
          <FormGroup>
            <Form.Dropdown
              id='species'
              label='Species'
              placeholder='Select Species'
              search
              selection
              fluid
              options={speciesOptions}
              onChange={handleSpeciesChange}
            />
            <Form.Dropdown
              id='type'
              label='Type'
              placeholder='Select Type'
              selection
              fluid
              options={seed_type}
              onChange={handleTypeChange}
            />
          </FormGroup>
        </Grid.Column>
        <Grid.Column width={3}>
          <FormGroup>
            <Form.Dropdown
              label='Season'
              placeholder='Select Season'
              selection
              options={seasons}
              onChange={handleSeasonChange}
            />
          </FormGroup>
            <Form.Dropdown
              label='Sun exposition'
              placeholder='Select Sun Exposition'
              selection
              options={sun}
              onChange={handleSunChange}
            />
            <Form.Dropdown
              label='Frost tolerance'
              placeholder='Select Frost Tolerance'
              selection
              options={frost}
              onChange={handleFrostChange}
            />
            <Form.Dropdown
              label='Watering'
              placeholder='Select Watering'
              selection
              options={water}
              onChange={handleWateringChange}
            />

          <Form.Field>
            <label>Companions</label>
            <Dropdown
              placeholder='Companions'
              multiple
              selection
              search
              options={speciesOptions}
              onChange={handleCompanionsChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Competitors</label>
            <Dropdown
              placeholder='Competitors'
              multiple
              selection
              search
              options={speciesOptions}
              onChange={handleCompetitorsChange}
            />
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={2}>
          <Form.Field>
            <label>Seeding</label>
            <FormGroup>
              <Form.Input
                id='seeding.start'
                placeholder='Start'
                onChange={handleInputChange}
              />
              <Form.Input
                id='seeding.end'
                placeholder='End'
                onChange={handleInputChange}
              />
              <Form.Input
                id='seeding.germination'
                placeholder='Duration'
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Transplanting</label>
            <FormGroup>
              <Form.Input
                id='transplanting.start'
                placeholder='Start'
                onChange={handleInputChange}
              />
              <Form.Input
                id='transplanting.end'
                placeholder='End'
                onChange={handleInputChange}
              />
              <Form.Input
                id='transplanting.growth'
                placeholder='Duration'
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Planting</label>
            <FormGroup>
              <Form.Input
                id='planting.start'
                placeholder='Start'
                onChange={handleInputChange}
              />
              <Form.Input
                id='planting.end'
                placeholder='End'
                onChange={handleInputChange}
              />
              <Form.Input
                id='planting.maturity'
                placeholder='Duration'
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Harvesting</label>
            <FormGroup>
              <Form.Input
                id='harvesting.start'
                placeholder='Start'
                onChange={handleInputChange}
              />
              <Form.Input
                id='harvesting.end'
                placeholder='End'
                onChange={handleInputChange}
              />
              <Form.Input
                id="harvesting.duration"
                placeholder='Duration'
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form.Field>
          <Form.Group>
            <Form.Field>
              <label>Spacing</label>
              <Input
                id='spacing'
                label={{ basic: true, content: 'cm' }}
                labelPosition='right'
                placeholder='spacing'
                onChange={handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Rows</label>
              <Input
                id='rows'
                label={{ basic: true, content: 'cm' }}
                labelPosition='right'
                placeholder='Rows'
                onChange={handleInputChange}
              />
            </Form.Field>
          </Form.Group>
          <Button
            disabled={formData === undefined ? true : false}
            type='submit'
          >
            Submit
          </Button>
        </Grid.Column>
      </Grid>
    </Form>
  )
}
