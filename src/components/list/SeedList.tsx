import React, { useContext, useEffect } from "react";
import { Image, Item, Label, List } from "semantic-ui-react";
import { Seed } from "src/interfaces/Seed";
import { SeedContext } from "src/contexts/SeedContextProvider";

export default function SeedList() {
  const { seeds, fetchSeeds } = useContext(SeedContext);

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  return (
    <List selection divided relaxed="very">
      {seeds.map((seed: Seed) => (
        <SeedListItem seed={seed} />
      ))}
    </List>
  );
}

export function SeedListItem({ seed }: any) {
  console.log(seed);
  return (
    <List.Item>
      {/*<Item.Image src="./images/image.png" /> */}
      <Image src={seed.picture} size="tiny" />
      <Item.Content>
        <Item.Header as="a">{seed.name}</Item.Header>
        <Item.Meta>
          <span className="">{seed.plant?.name}</span>
          <span className="cinema">{seed.plant?.species}</span>
        </Item.Meta>
        <Item.Description>{seed.description}</Item.Description>
        <Item.Extra>
          <Label icon="globe" content={seed.season} />
          <Label icon="globe" content={seed.type} />
          <Label>{seed.sun}</Label>
          <Label>{seed.frost}</Label>
          <Label>{seed.water}</Label>
        </Item.Extra>
        <Item.Extra>
          <br></br>
        </Item.Extra>
        <Item.Extra>
          <Label icon="globe" content={seed.season} />
          <Label icon="globe" content={seed.type} />
          <Label>{seed.sun}</Label>
          <Label>{seed.frost}</Label>
          <Label>{seed.water}</Label>
        </Item.Extra>
      </Item.Content>
    </List.Item>
  );
}
