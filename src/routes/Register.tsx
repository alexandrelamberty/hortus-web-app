import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from 'src/providers/AuthProvider'
import { Button, Checkbox, Container, Form, Grid } from 'semantic-ui-react'
import { User } from 'src/interfaces/User'
import { RegistrationForm } from 'src/components/form/RegistrationForm'

export function RegisterPage() {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = React.useContext(AuthContext)
  let from = '/'
  const [registerData, setRegisterData] = React.useState<User | null>()
  const [email, setEmail] = React.useState("")

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(registerData)
    // setRegisterData.email = ''
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(registerData)
    auth.register(email, () => {
      navigate(from, { replace: true })
    })
  }

  return (
		  <RegistrationForm />
  )
}
