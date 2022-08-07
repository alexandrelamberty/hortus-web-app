import React, { useEffect } from "react";
import { useContext } from "react";
import { SeedContext } from "src/providers/SeedProvider";
import {
  Card,
  Container,
  Icon,
  Image,
  Label,
  List,
  Table,
} from "semantic-ui-react";
import { PlantContext } from "src/providers/PlantContextProvider";
import { Plant } from "src/interfaces/Plant";

type CardProps = {
  plant: Plant;
};

// FIXME: Functional component
export default class PlantGridCard extends React.Component<CardProps> {
  render() {
    return (
      <Card>
        <Image src={this.props.plant.picture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.plant.name}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.plant.name}</span>
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
              {this.props.plant.subspecies}
            </Label>
            <Label color="red" horizontal as="a">
              <Icon name="mail" />
              {this.props.plant.variant}
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
