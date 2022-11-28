import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Seed } from "src/interfaces/Seed";

type CardProps = {
  seed: Seed;
};

export default class SeedGridCard extends React.Component<CardProps> {
  render() {
    return (
      <Card key={this.props.seed._id}>
        <Image
          src={"http://localhost:3333/static/" + this.props.seed.image}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{this.props.seed.name}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.seed.name}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}
