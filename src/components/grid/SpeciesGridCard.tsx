import React, { useEffect } from 'react'
import { useContext } from 'react'
import { SeedContext } from 'src/providers/SeedProvider'
import { Card, Container, Icon, Image, Table } from 'semantic-ui-react'
import { SpeciesContext } from 'src/providers/SpeciesProvider'
import { Species } from 'src/interfaces/Species'

type CardProps = {
  species: Species
}

export default class SpeciesGridCard extends React.Component<CardProps> {
  render() {
    return (
      <Card>
        <Image src={`http://localhost:8080/${this.props.species.image}`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.species.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.species.family}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.species.genus}
					</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    )
  }
}
