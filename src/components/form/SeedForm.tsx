import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Dropdown,
  Form,
  FormGroup,
  Grid,
  Header,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react";
import { Frost } from "src/enums/Frost";
import { Season } from "src/enums/Season";
import { Sun } from "src/enums/Sun";
import { Type } from "src/enums/Type";
import { Water } from "src/enums/Water";
import { useListEnum } from "src/hooks/useListEnum";
import { Seed } from "src/interfaces/Seed";
import { SeedFormData } from "src/interfaces/SeedFormData";
import { PlantContext } from "src/providers/PlantContextProvider";
import { SeedContext } from "src/providers/SeedProvider";
import * as Yup from "yup";

export function SeedForm() {
  const { plants, fetchPlants } = React.useContext(PlantContext);
  const { seeds, fetchSeeds, createSeed, setFormOpen } =
    React.useContext(SeedContext);
  const [formData, setFormData] = React.useState<Seed | {}>();

  // Schema validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    species: Yup.string().required("Species is required"),
    type: Yup.string().required("Type is required"),
  });

  // Deconstruct useForm
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SeedFormData>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  const months = [
    { key: "1", value: "1", text: "January" },
    { key: "2", value: "2", text: "February" },
    { key: "3", value: "3", text: "March" },
    { key: "4", value: "4", text: "April" },
    { key: "5", value: "5", text: "May" },
    { key: "6", value: "6", text: "June" },
    { key: "7", value: "7", text: "July" },
    { key: "8", value: "8", text: "August" },
    { key: "9", value: "9", text: "September" },
    { key: "10", value: "10", text: "October" },
    { key: "11", value: "11", text: "November" },
    { key: "12", value: "12", text: "December" },
  ];

  // Remapping collection for dropdown
  const plantsOptions = plants.map((sd) => ({
    key: sd._id,
    text: sd.name,
    value: sd._id,
  }));

  // Todo make a hook
  const seasons = useListEnum(Season);
  const water = useListEnum(Water);
  const frost = useListEnum(Frost);
  const sun = useListEnum(Sun);
  const seed_type = useListEnum(Type);

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
    createSeed(fd, onCreated);
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
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Segment placeholder style={{ height: "360px" }}>
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
            <Form.Field>
              <Controller
                control={control}
                name="name"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Input
                    label="Name"
                    placeholder="Name"
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    error={errors.name ? true : false}
                  />
                )}
              />
            </Form.Field>
            <Form.Field>
              <Controller
                control={control}
                name="description"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.TextArea
                    label="About"
                    rows="5"
                    placeholder="More about the seed..."
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    error={errors.description ? true : false}
                  />
                )}
              />
            </Form.Field>
            <FormGroup>
              <Controller
                control={control}
                name="species"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    name="species"
                    label="Species"
                    placeholder="Species"
                    search
                    selection
                    fluid
                    options={plantsOptions}
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={errors.species ? true : false}
                  />
                )}
              />

              <Controller
                control={control}
                name="species"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    name="type"
                    label="Type"
                    placeholder="Type"
                    selection
                    fluid
                    options={seed_type}
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={errors.type ? true : false}
                  />
                )}
              />
              <Form.Dropdown
                label="Season"
                name="season"
                placeholder="Season"
                selection
                fluid
                options={seasons}
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                }}
                error={errors.season ? true : false}
              />
            </FormGroup>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <FormGroup>
              <Form.Dropdown
                label="Sun exposition"
                placeholder="Sun"
                selection
                fluid
                options={sun}
              />
              <Form.Dropdown
                label="Frost tolerance"
                placeholder="Frost"
                selection
                fluid
                options={frost}
              />
              <Form.Dropdown
                label="Watering"
                placeholder="Watering"
                selection
                fluid
                options={water}
              />
            </FormGroup>
            <Form.Field>
              <label>Companions</label>
              <Dropdown
                placeholder="Companions"
                multiple
                selection
                search
                options={plantsOptions}
              />
            </Form.Field>
            <Form.Field>
              <label>Competitors</label>
              <Dropdown
                placeholder="Competitors"
                multiple
                selection
                search
                options={plantsOptions}
              />
            </Form.Field>

            <Form.Field>
              <label>Seeding</label>
              <FormGroup>
                <Form.Dropdown
                  deburr
                  fluid
                  options={months}
                  placeholder='Start"'
                  search
                  selection
                />
                <Form.Dropdown
                  deburr
                  fluid
                  options={months}
                  placeholder='Stop"'
                  search
                  selection
                />
                <Form.Input id="seeding.germination" placeholder="Duration" />
              </FormGroup>
            </Form.Field>
            <Form.Field>
              <label>Transplanting</label>
              <FormGroup>
                <Form.Dropdown
                  deburr
                  fluid
                  options={months}
                  placeholder='Start"'
                  search
                  selection
                />
                <Form.Dropdown
                  deburr
                  fluid
                  options={months}
                  placeholder='Stop"'
                  search
                  selection
                />
                <Form.Input id="planting.maturity" placeholder="Duration" />
              </FormGroup>
            </Form.Field>
            <Form.Field>
              <label>Planting</label>
              <FormGroup widths="equal">
                <Form.Dropdown
                  deburr
                  fluid
                  options={months}
                  placeholder='Start"'
                  search
                  selection
                />
                <Form.Dropdown
                  deburr
                  fluid
                  options={months}
                  placeholder='Stop"'
                  search
                  selection
                />
                <Form.Input id="planting.maturity" placeholder="Duration" />
              </FormGroup>
            </Form.Field>
            <Form.Field>
              <label>Harvesting</label>
              <FormGroup>
                <Form.Dropdown
                  deburr
                  fluid
                  options={months}
                  placeholder='Start"'
                  search
                  selection
                />
                <Form.Dropdown
                  deburr
                  fluid
                  options={months}
                  placeholder='Stop"'
                  search
                  selection
                />
                <Form.Input id="harvesting.duration" placeholder="Duration" />
              </FormGroup>
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Spacing</label>
                <Input
                  id="spacing"
                  fluid
                  label={{ basic: true, content: "cm" }}
                  labelPosition="right"
                  placeholder="spacing"
                />
              </Form.Field>
              <Form.Field>
                <label>Rows</label>
                <Input
                  id="rows"
                  fluid
                  label={{ basic: true, content: "cm" }}
                  labelPosition="right"
                  placeholder="Rows"
                />
              </Form.Field>
            </Form.Group>
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
