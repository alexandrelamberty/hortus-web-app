import React, { useCallback } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { RegistrationFormData } from 'src/interfaces/RegistrationFormData'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { wait, waitFor } from '@testing-library/react'
import { AuthContext } from 'src/providers/AuthProvider'

export const RegistrationForm = () => {
  const { user, registerUser } = React.useContext(AuthContext)
  
  // Schema validation
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  })

  // Deconstruct the useForm
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    mode: 'onTouched',
    // Schema validation
    resolver: yupResolver(validationSchema),
  })

  // Deconstruct the formState
  const { isSubmitting, isSubmitted, isValid, isSubmitSuccessful } =
    useFormState({
      control,
    })

  // Submit the form and clear the data
  const onSubmit = async (data: RegistrationFormData) => {
    console.log("RegistrationForm.onSubmit", data)
    console.log('isValid', isValid)
    console.log('isSubmitted', isSubmitted)
    console.log('isSubmittedSuccessful', isSubmitSuccessful)
    registerUser(data)
    // 
  }

  return (
    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <h1 className='mb-2'>Signin</h1>
        <label className='login-label' htmlFor='email'>
          Email
        </label>
        <input
          className='login-input'
          id='username'
          type='text'
          placeholder='email'
          {...register('email')}
        />
        <p className='login-error'>{errors.email?.message}</p>
      </div>
      <div className='mb-4'>
        <label className='login-label' htmlFor='password'>
          Password
        </label>
        <input
          className='login-input'
          id='password'
          type='password'
          placeholder='password'
          {...register('password')}
        />
        <p className='login-error'>{errors.password?.message}</p>
      </div>
      <div className='mb-6'>
        <label className='login-label' htmlFor='confirmPassword'>
          Password
        </label>
        <input
          className='login-input'
          id='confirmPassword'
          type='password'
          placeholder='password'
          {...register('confirmPassword')}
        />
        <p className='login-error'>{errors.confirmPassword?.message}</p>
      </div>
      <div className='form-control'>
        <button className='form-submit' type='submit'>
          Register
        </button>
      </div>
    </form>
  )
}
