import React from 'react'
import { useForm } from 'react-hook-form'
import { SpeciesContext } from 'src/providers/SpeciesProvider'
import * as Yup from 'yup'
import { Species } from 'src/interfaces/Species'
import { Button, Form, Grid, Icon } from 'semantic-ui-react'
import { SpeciesFormData } from 'src/interfaces/SpeciesFormData'
import { yupResolver } from '@hookform/resolvers/yup'

export const SpeciesForm = () => {
  const { createSpecies } = React.useContext(SpeciesContext)
  // Schema validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
  })

  // Deconstruct useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SpeciesFormData>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data :any ) => {
    console.log(data)
		const formData = new FormData();
		formData.append('image', data.image[0])
		formData.append('name', data.name)
		formData.append('genus', data.genus)
		formData.append('family', data.family)
		formData.append('species', data.species)
		createSpecies(formData, onCreated)
    // reset()
  }

  const onCreated = () => {

  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Image</label>
            <Button as='label' htmlFor='file' type='button' animated='fade'>
              <Button.Content visible>
                <Icon name='file' />
              </Button.Content>
              <Button.Content hidden>Choose a File</Button.Content>
            </Button>
            <input id="image" type='file' {...register('image')} />
          </Form.Field>
          <Form.Field>
            <label>Name</label>
            <input className="login-input" placeholder='Name' {...register('name')} />
          </Form.Field>
          <Form.Field>
            <label>Family</label>
            <input id='family' placeholder='Family' {...register('family')} />
          </Form.Field>
          <Form.Field>
            <label>Genus</label>
            <input id='genus' placeholder='Genus' {...register('genus')}/>
          </Form.Field>
          <Form.Field>
            <label>Species</label>
            <input id='species' placeholder='Species' {...register('species')}/>
          </Form.Field>
          <Form.Field>
            <label>Subspecies</label>
            <input id='subspecies' placeholder='Subspecies' {...register('subspecies')}/>
          </Form.Field>
      <div className='form-control'>
        <button className='form-submit' type='submit'>
        Save  
				 </button>
      </div>
    </Form>
  )
}
