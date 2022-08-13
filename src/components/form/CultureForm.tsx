import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownProps,
  Form,
  Grid,
  Image,
} from "semantic-ui-react";
import { Culture } from "src/interfaces/Culture";
import { Seed } from "src/interfaces/Seed";
import { CultureContext } from "src/providers/CultureProvider";
import { SeedContext } from "src/providers/SeedProvider";
import * as Yup from "yup";

type FormProps = {
  onSubmitted?: () => void;
  onCancel?: () => void;
};

export function CultureForm(props: FormProps) {
  const { seeds, fetchSeeds } = React.useContext(SeedContext);
  const { setFormOpen, createCulture } = React.useContext(CultureContext);

  //
  const [formData, setFormData] = React.useState<Culture | {}>();
  const [seed, setSeed] = React.useState<Seed>();
  // Schema validation
  const validationSchema = Yup.object().shape({
    //seed: Yup.string().required("Seed is required"),
  });

  // Deconstruct useForm
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const seedsOption = seeds.map((sd) => ({
    value: sd._id,
    key: sd._id,
    text: sd.name,
  }));

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  const selectSeed = (
    e: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ): void => {
    e.preventDefault();
    // Find the seed in the context
    const s = seeds.find((obj) => {
      return obj._id === data.value;
    });
    // Set the selected seed
    setSeed(s);
    // Set the form data with the selected seed
    setFormData({
      ...formData,
      ["seed"]: s,
    });
  };

  const onSubmit = (data: Culture | any) => {
    console.log("onSubmit");
    console.log("formData", formData);
    createCulture(formData);
  };

  const cancel = () => {
    setFormOpen(false);
    reset();
  };

  const onCreated = () => {
    setFormOpen(false);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Form.Field>
              <label>Select your seed</label>
              <Dropdown
                id="seed"
                options={seedsOption}
                search
                selection
                placeholder="Search or select a seed"
                onChange={selectSeed}
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <p>{seed?.name}</p>
            <Image src={seed?.picture} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={16}>
            <ButtonGroup floated="right">
              <Button onClick={() => cancel()}>Cancel</Button>
              <Button type="submit" primary>
                Save
              </Button>
            </ButtonGroup>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
}
