import React, { useContext } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { CultureContext } from "src/contexts/CultureContextProvider";
import { Seed } from "src/interfaces/Seed";

type CardProps = {
  seed: Seed;
};

const SeedGridCard = ({ seed }: CardProps) => {
  const { setSelectedSeed } = useContext(CultureContext);

  return (
    <Card
      key={seed._id}
      onClick={() => {
        console.log("clicked");
        setSelectedSeed(seed);
      }}
    >
      <Image
        src={"http://localhost:3333/static/" + seed.image}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header style={{ fontSize: "1em" }}>{seed.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <p style={{ fontSize: ".8em" }}>
          <Icon name="leaf" />
          {seed.plant?.binomial}
        </p>
      </Card.Content>
    </Card>
  );
};

export default SeedGridCard;
