import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from 'src/providers/AuthProvider'
import { Container } from 'semantic-ui-react'
import { LoginForm } from 'src/components/form/LoginForm'

export function LoginPage() {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = React.useContext(AuthContext)
  let from = '/'

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    let formData = new FormData(event.currentTarget)
    let username = formData.get('email') as string

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true })
    })
  }

  return (
	  <LoginForm />
  )
}
