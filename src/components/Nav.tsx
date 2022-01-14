import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from 'src/providers/AuthProvider'

export function Nav() {
  let auth = React.useContext(AuthContext)
  let navigate = useNavigate()

  if (!auth.user) {
    return <p>You are not logged in.</p>
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
		<li>
          <Link to='/seeds'>Seeds</Link>
		</li>
		<li>
          <Link to='/cultures'>Cultures</Link>
		</li>
		<li>
          <Link to='/plants'>Plants</Link>
		</li>
        <li>
          <Link to='/settings'>Settings</Link>
        </li>
      </ul>
      <div>
        <p>
          Welcome {auth.user}!{' '}
          <button
            onClick={() => {
              console.log('logout')
              auth.signout(() => navigate('/'))
            }}
          >
            Sign out
          </button>
        </p>
      </div>
    </nav>
  )
}
