import React, { FC, useEffect } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Seed } from 'src/interfaces/Seed'

type CardProps = {
  seed: Seed
}

export default class SeedGridCard extends React.Component<CardProps> {

  render() {
    return (
      <Card key={this.props.seed._id}>
        <Image src={this.props.seed.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.seed.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.seed.species.name}</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
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
