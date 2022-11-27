import { useEffect, useState } from "react";
import { Checkbox, Image, Item, Label, List } from "semantic-ui-react";
import { Plant } from "src/interfaces/Plant";

type PlantListProps = {
  list: Array<Plant>;
};
export default function PlantList({ list }: PlantListProps) {
  //const { plants, fetchPlants } = useContext(PlantContext);
  const [plants, setPlants] = useState<Array<Plant>>([]);

  useEffect(() => {
    setPlants(list);
  }, [list]);

  return (
    <List>
      {list.map((plant: Plant) => (
        <PlantListItem plant={plant} />
      ))}
    </List>
  );
}

export function PlantListItem({ plant }: any) {
  return (
    <List.Item>
      <Image avatar src={"http://localhost:3333/static/" + plant.picture} />
      <List.Content>
        <List.Header as="a">{plant.binomial}</List.Header>
        <List.Description>{plant.name}</List.Description>
      </List.Content>
    </List.Item>
  );
}
