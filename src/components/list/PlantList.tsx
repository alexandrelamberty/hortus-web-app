import React, { useContext, useEffect } from "react";
import { Checkbox, Image, Item, Label, List } from "semantic-ui-react";
import { Plant } from "src/interfaces/Plant";
import { PlantContext } from "src/providers/PlantContextProvider";

export default function PlantList() {
  const { plants, fetchPlants } = useContext(PlantContext);

  // TODO: make custom hook
  useEffect(() => {
    // TODO: dispatch load plants
    fetchPlants();
  }, [fetchPlants]);

  return (
    <List selection divided relaxed="very">
      {plants.map((plant: Plant) => (
        <PlantListItem plant={plant} />
      ))}
    </List>
  );
}

export function PlantListItem({ plant }: any) {
  console.log(plant);
  return (
    <List.Item>
      {/*<Item.Image src="./images/image.png" /> */}
      <Image src={plant.picture} size="tiny" />
      <Item.Content>
        <Checkbox primary floated="right" />
        <Item.Header as="a">{plant.name}</Item.Header>
        <Item.Header as="h2">{plant.species}</Item.Header>
        <Item.Meta>
          <span className="cinema">{plant.family}</span>
        </Item.Meta>
        <Item.Description>{plant.genus}</Item.Description>
        <Item.Extra>
          {plant.subspecies ? <Label>{plant.subspecies}</Label> : ""}
          {plant.variant ? <Label>{plant.variant}</Label> : ""}
        </Item.Extra>
      </Item.Content>
    </List.Item>
  );
}
