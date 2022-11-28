import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Plant } from "src/interfaces/Plant";

type CardProps = {
  plant: Plant;
};

// FIXME: Functional component
export default class PlantGridCard extends React.Component<CardProps> {
  render() {
    return (
      <Card key={this.props.plant._id}>
        <Image
          src={"http://localhost:3333/static/" + this.props.plant.picture}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{this.props.plant.binomial}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.plant.family}</span>
          </Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="leaf" />
          {this.props.plant.name}
        </Card.Content>
      </Card>
    );
  }
}
