import { Card, Icon, Image } from "semantic-ui-react";
import { Seed } from "src/interfaces/Seed";

type CardProps = {
  seed: Seed;
  onChange: (seed: Seed) => void;
};

const SeedGridCard = ({ seed, onChange }: CardProps) => {
  return (
    <Card
      key={seed._id}
      onClick={() => {
        onChange(seed);
      }}
    >
      {/* FIXME: */}
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
