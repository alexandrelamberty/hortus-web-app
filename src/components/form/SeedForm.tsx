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
import * as Yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SeedFormData } from 'src/interfaces/SeedFormData'

export function SeedForm() {
  const { species, fetchSpecies } = React.useContext(SpeciesContext)
  const { seeds, createSeed } = React.useContext(SeedContext)
  const [formData, setFormData] = React.useState<Seed | {}>()

// Schema validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    species: Yup.string().required('Species is required'),
    type: Yup.string().required('Type is required'),
    season: Yup.string().required('Season is required'),
  })

  // Deconstruct useForm
  const {
		control,
    register,
    handleSubmit,
    reset,
		setValue,
    formState: { errors },
  } = useForm<SeedFormData>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

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

  const onSubmit = (data :any ) => {
    console.log("onSubmit")
    console.log(data)
		const formData = new FormData();
		// createSpecies(formData, onCreated)
    // reset()
  }
	
	console.log(errors)
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
     
          <Image
            src='/images/wireframe/square-image.png'
            size='medium'
            rounded
          />
          <Form.Field>
						<Controller
							control={control}
							name="name"
							render={({
								field: { onChange, onBlur, value, name, ref },
								fieldState: { invalid, isTouched, isDirty, error },
								formState,
							}) => (
								<Form.Input
									label="Name"
									placeholder='Name'
									onBlur={onBlur} // notify when input is touched
									onChange={onChange} // send value to hook form
									error={errors.name ? true : false}
								/>
							)}
						/>
          </Form.Field>
          <Form.Field>
            	<Controller
							control={control}
							name="description"
							render={({
								field: { onChange, onBlur, value, name, ref },
								fieldState: { invalid, isTouched, isDirty, error },
								formState,
							}) => (
					<Form.TextArea
              label='About'
              placeholder='Tell us more about you...'
									onBlur={onBlur} // notify when input is touched
									onChange={onChange} // send value to hook form
									error={errors.description ? true : false}
            />
							)}
						/>
          </Form.Field>
          <FormGroup>
      	<Controller
							control={control}
							name="species"
							render={({
								field: { onChange, onBlur, value, name, ref },
								fieldState: { invalid, isTouched, isDirty, error },
								formState,
							}) => (
            <Form.Dropdown
							name="species"
              label='Species'
              placeholder='Select Species'
              search
              selection
              fluid
              options={speciesOptions}
							onChange={async (e, { name, value }) => {
												setValue(name, value);
												onChange(value)
											}}
						error={errors.species ? true : false}
            />
           			)}
						/>

	<Controller
							control={control}
							name="species"
							render={({
								field: { onChange, onBlur, value, name, ref },
								fieldState: { invalid, isTouched, isDirty, error },
								formState,
							}) => (
						<Form.Dropdown
              name='type'
              label='Type'
              placeholder='Select Type'
              selection
              fluid
              options={seed_type}
							onChange={async (e, { name, value }) => {
												setValue(name, value);
												onChange(value)
											}}
							error={errors.type ? true : false}

            />
 			)}
						/>

          </FormGroup>
  
          <FormGroup>
            <Form.Dropdown
              label='Season'
							name='season'
              placeholder='Select Season'
              selection
              options={seasons}
						onChange={async (e, { name, value }) => {
												setValue(name, value);
											}}
							error={errors.season ? true : false}
            />
          </FormGroup>
            <Form.Dropdown
              label='Sun exposition'
              placeholder='Select Sun Exposition'
              selection
              options={sun}
            />
            <Form.Dropdown
              label='Frost tolerance'
              placeholder='Select Frost Tolerance'
              selection
              options={frost}
            />
            <Form.Dropdown
              label='Watering'
              placeholder='Select Watering'
              selection
              options={water}
            />

          <Form.Field>
            <label>Companions</label>
            <Dropdown
              placeholder='Companions'
              multiple
              selection
              search
              options={speciesOptions}
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
            />
          </Form.Field>
    
          <Form.Field>
            <label>Seeding</label>
            <FormGroup>
              <Form.Input
                id='seeding.start'
                placeholder='Start'
                
              />
              <Form.Input
                id='seeding.end'
                placeholder='End'
                
              />
              <Form.Input
                id='seeding.germination'
                placeholder='Duration'
                
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Transplanting</label>
            <FormGroup>
              <Form.Input
                id='transplanting.start'
                placeholder='Start'
                
              />
              <Form.Input
                id='transplanting.end'
                placeholder='End'
                
              />
              <Form.Input
                id='transplanting.growth'
                placeholder='Duration'
                
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Planting</label>
            <FormGroup>
              <Form.Input
                id='planting.start'
                placeholder='Start'
                
              />
              <Form.Input
                id='planting.end'
                placeholder='End'
                
              />
              <Form.Input
                id='planting.maturity'
                placeholder='Duration'
                
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Harvesting</label>
            <FormGroup>
              <Form.Input
                id='harvesting.start'
                placeholder='Start'
                
              />
              <Form.Input
                id='harvesting.end'
                placeholder='End'
                
              />
              <Form.Input
                id="harvesting.duration"
                placeholder='Duration'
                
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
                
              />
            </Form.Field>
            <Form.Field>
              <label>Rows</label>
              <Input
                id='rows'
                label={{ basic: true, content: 'cm' }}
                labelPosition='right'
                placeholder='Rows'
                
              />
            </Form.Field>
          </Form.Group>
           <div className='form-control'>
        <button className='form-submit' type='submit'>
          Sign In
        </button>
      </div>
   
    </Form>
  )
}
