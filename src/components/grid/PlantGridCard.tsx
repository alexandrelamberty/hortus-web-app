import React, { useContext } from "react";
import {
  Button,
  Card,
  CardProps,
  Checkbox,
  Icon,
  Image,
} from "semantic-ui-react";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { Plant } from "src/interfaces/Plant";

type PlantGridItemProps = {
  plant: Plant;
};

// FIXME: raname PlantGridItem
const PlantGridCard = ({ plant }: PlantGridItemProps) => {
  const { staticUrl } = useContext(ApplicationContext);

  const handleClick = (event: any, data: CardProps) => {
    if (event.detail === 1) console.log("handleClick", event, data);
  };

  function handleDoubleClick(event: any, data: any) {
    console.log("handleDoubleClick", event, data);
  }

  return (
    <Card key={plant._id}>
      <div className="card-container">
        <Image src={`${staticUrl}/${plant.image}`} wrapped ui={false} />
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          className="card-image-checkbox"
        ></input>
      </div>
      <Card.Content onClick={handleClick} onDoubleClick={handleDoubleClick}>
        <Card.Description>
          <span style={{ color: "black" }}>{plant.name}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          onClick={() => {
            console.log("hello");
          }}
        >
          Edit
        </Button>
        <Icon name="leaf" />
        {plant.family}
      </Card.Content>
    </Card>
  );
};

export default PlantGridCard;
