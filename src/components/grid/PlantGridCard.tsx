import React from "react";
import { Card, Icon, Image, Label } from "semantic-ui-react";
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
          <Card.Description>
            <Label color="red" horizontal>
              Family
              <Label.Detail>{this.props.plant.family}</Label.Detail>
            </Label>
            <Label color="purple" horizontal>
              {this.props.plant.genus}
            </Label>
            <Label color="red" horizontal as="a">
              <Icon name="mail" />
              {this.props.plant.cultivar}
            </Label>
            <Label color="red" horizontal as="a">
              <Icon name="mail" />
              {this.props.plant.variety}
            </Label>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {this.props.plant.species}
          </a>
        </Card.Content>
      </Card>
    );
  }
}
