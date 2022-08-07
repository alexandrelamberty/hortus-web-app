import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from 'src/providers/AuthProvider'
import { Button, Checkbox, Container, Form, Grid } from 'semantic-ui-react'
import { User } from 'src/interfaces/User'
import { RegistrationForm } from 'src/components/form/RegistrationForm'

export function RegisterRoute() {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = React.useContext(AuthContext)
  let from = '/'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    /*
    auth.registerUser(, () => {
      navigate(from, { replace: true })
    })*/
  }

  return (
		  <RegistrationForm  />
  )
}
