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
          <Card.Header style={{ fontSize: "1em" }}>
            {this.props.seed.name}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <p style={{ fontSize: ".8em" }}>
            <Icon name="leaf" />
            {this.props.seed.plant?.binomial}
          </p>
        </Card.Content>
      </Card>
    );
  }
}
