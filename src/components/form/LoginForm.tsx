import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { LoginFormData } from 'src/interfaces/LoginFormData'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const LoginForm = () => {
  // Yup validation schema the form inputs register to theses schema shapes
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
    reset()
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
      <div className='mb-6'>
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
      <div className='form-control'>
        <button className='form-submit' type='submit'>
          Sign In
        </button>
        <a className='form-option' href='/forgot-password'>
          Forgot Password?
        </a>
      </div>
    </form>
  )
}
