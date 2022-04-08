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

export function GerminationWidget() {
  return (
    <Message>
      <Message.Header>Germination</Message.Header>
      <p>Your seeds near germination.</p>
    </Message>
  )
}
