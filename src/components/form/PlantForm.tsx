import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Form,
  Grid,
  GridRow,
  Header,
  Icon,
  Label,
  Segment,
} from "semantic-ui-react";
import { PlantContext } from "src/providers/PlantContextProvider";
import * as Yup from "yup";

export const PlantForm = () => {
  const { setFormOpen, createPlant } = React.useContext(PlantContext);

  // Schema validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    family: Yup.string().required("Family is required"),
    genus: Yup.string().required("Genus is required"),
    species: Yup.string().required("Species is required"),
  });

  // Deconstruct useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    let fd = new FormData();
    fd.append("image", data.image[0]);
    fd.append("name", data.name);
    fd.append("family", data.family);
    fd.append("genus", data.genus);
    fd.append("species", data.species);
    fd.append("subspecies", data.subspecies);
    fd.append("variant", data.variant);
    createPlant(fd, onCreated);
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
            <Segment placeholder>
              <Header icon>
                <Icon name="image" />
                <Header.Content>
                  Add a picture
                  <Header.Subheader>
                    Choose a picture from your computer.
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <Button as="label" htmlFor="image" type="button" primary>
                Choose a File
              </Button>
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <div>
              <Form.Field>
                <input id="image" type="file" {...register("image")} hidden />
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <input
                  className="login-input"
                  placeholder="Name"
                  {...register("name")}
                />
              </Form.Field>
              <Form.Field>
                <label>Family</label>
                <input
                  id="family"
                  placeholder="Family"
                  {...register("family")}
                />
              </Form.Field>
              <Form.Field>
                <label>Genus</label>
                <input id="genus" placeholder="Genus" {...register("genus")} />
              </Form.Field>
              <Form.Field>
                <label>Species</label>
                <input
                  id="species"
                  placeholder="Species"
                  {...register("species")}
                />
              </Form.Field>
              <Form.Field>
                <label>Subspecies</label>
                <input
                  id="subspecies"
                  placeholder="Subspecies"
                  {...register("subspecies")}
                />
              </Form.Field>
              <Form.Field>
                <label>Variant</label>
                <input
                  id="variant"
                  placeholder="Variant"
                  {...register("variant")}
                />
              </Form.Field>
            </div>
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
};
