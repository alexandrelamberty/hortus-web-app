import { useEffect, useState } from "react";
import { Image, List } from "semantic-ui-react";
import { Plant } from "../interfaces/Plant";

type PlantListProps = {
  list: Plant[];
};

export default function PlantList({ list }: PlantListProps) {
  //const { plants, fetchPlants } = useContext(PlantContext);
  const [plants, setPlants] = useState<Plant[]>([]);

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

type PlantListItemProps = {
  plant: Plant;
};

export function PlantListItem({ plant }: PlantListItemProps) {
  return (
    <List.Item>
      <Image avatar src={"http://localhost:3333/static/" + plant.image} />
      <List.Content>
        <List.Header as="a">{plant.binomial}</List.Header>
        <List.Description>{plant.name}</List.Description>
      </List.Content>
    </List.Item>
  );
}
