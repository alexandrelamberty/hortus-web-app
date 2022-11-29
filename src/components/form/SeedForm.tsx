import { yupResolver } from "@hookform/resolvers/yup";
import React, { ReactElement, useEffect, useState } from "react";
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
import { PlantContext } from "src/contexts/PlantContextProvider";
import { SeedContext } from "src/contexts/SeedContextProvider";
import { Frost } from "src/enums/Frost";
import { Season } from "src/enums/Season";
import { Sun } from "src/enums/Sun";
import { Type } from "src/enums/Type";
import { Water } from "src/enums/Water";
import { useListEnum } from "src/hooks/useListEnum";
import { SeedFormData } from "src/interfaces/SeedFormData";
import * as Yup from "yup";

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

/**
 * SeedForm
 * @returns
 */
export function SeedForm(): ReactElement {
  // Plant context used for the Seed species, companions and competitors
  const { plants, fetchPlants } = React.useContext(PlantContext);

  // Seed context
  const { fetchSeeds, createSeed, setFormOpen } = React.useContext(SeedContext);

  // Internal state
  const [picture, setPicture] = useState("");

  // Remapping collection for dropdown
  const plantsOptions = plants.map((sd) => ({
    key: sd._id,
    text: sd.name,
    value: sd._id,
  }));

  const seasons = useListEnum(Season);
  const water = useListEnum(Water);
  const frost = useListEnum(Frost);
  const sun = useListEnum(Sun);
  const seed_type = useListEnum(Type);

  // Schema validation
  const validationSchema = Yup.object().shape({
    species: Yup.string().required("Species is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    // type: Yup.string().required("Type is required"),
    // planting: Yup.string().required("Type is required"),
  });

  //
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SeedFormData>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    console.log("SeedForm");
    fetchPlants();
  }, [fetchPlants]);

  const onSubmit = (data: SeedFormData) => {
    console.log("onSubmit", data);
    createSeed(data, onCreated);
  };

  // Callback
  const onCreated = () => {
    // We need to post the form
    setFormOpen(false);
    reset();
  };

  const cancel = () => {
    setFormOpen(false);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} size="mini">
      <Grid columns={3}>
        {/*  */}
        <Grid.Column mobile={16} tablet={4} computer={5}>
          {/* Picture */}
          <Segment
            placeholder
            style={{
              height: "360px",
              backgroundImage: `url(${"http://localhost:3333/static/cb38583d8e35a7caab3f29402141197a"})`,
              backgroundSize: "cover",
            }}
          >
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
            <Form.Field>
              <input id="image" type="file" {...register("image")} hidden />
              {picture && <img src={picture} alt={picture} />}
            </Form.Field>
          </Segment>

          <Form.Field>
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
          </Form.Field>
        </Grid.Column>
        {/*  */}
        <Grid.Column mobile={16} tablet={4} computer={5}>
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
          <FormGroup widths="equal">
            <Controller
              control={control}
              name="type"
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
            <Controller
              control={control}
              name="season"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Form.Dropdown
                  label="Season"
                  name="season"
                  placeholder="Season"
                  selection
                  fluid
                  options={seasons}
                  onChange={async (e, { name, value }) => {
                    setValue(name, value);
                    onChange(value);
                  }}
                  error={errors.season ? true : false}
                />
              )}
            />
          </FormGroup>
          <FormGroup widths="equal">
            <Controller
              control={control}
              name="sun"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Form.Dropdown
                  label="Sun exposition"
                  placeholder="Sun"
                  selection
                  fluid
                  options={sun}
                  onChange={async (e, { name, value }) => {
                    setValue(name, value);
                    onChange(value);
                  }}
                  error={errors.sun ? true : false}
                />
              )}
            />
            <Controller
              control={control}
              name="frost"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Form.Dropdown
                  label="Frost tolerance"
                  placeholder="Frost"
                  selection
                  fluid
                  options={frost}
                  onChange={async (e, { name, value }) => {
                    setValue(name, value);
                    onChange(value);
                  }}
                  error={errors.frost ? true : false}
                />
              )}
            />
            <Controller
              control={control}
              name="water"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Form.Dropdown
                  label="Watering"
                  placeholder="Watering"
                  selection
                  fluid
                  options={water}
                  onChange={async (e, { name, value }) => {
                    setValue(name, value);
                    onChange(value);
                  }}
                  error={errors.water ? true : false}
                />
              )}
            />
          </FormGroup>
          <Form.Field>
            <label>Companions</label>
            <Controller
              control={control}
              name="companions"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Dropdown
                  placeholder="Companions"
                  multiple
                  selection
                  search
                  fluid
                  options={plantsOptions}
                  onChange={async (e, { name, value }) => {
                    setValue(name, value);
                    onChange(value);
                  }}
                  error={errors.companions ? true : false}
                />
              )}
            />
          </Form.Field>
          <Form.Field>
            <label>Competitors</label>
            <Controller
              control={control}
              name="competitors"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Dropdown
                  placeholder="Competitors"
                  multiple
                  selection
                  search
                  options={plantsOptions}
                  wrapSelection={true}
                  onChange={async (e, { name, value }) => {
                    setValue(name, value);
                    onChange(value);
                  }}
                  error={errors.competitors ? true : false}
                />
              )}
            />
          </Form.Field>
        </Grid.Column>
        {/*  */}
        <Grid.Column mobile={16} tablet={4} computer={5}>
          <Form.Field>
            <label>Seeding</label>
            <FormGroup widths="equal">
              <Controller
                control={control}
                name="seeding.start"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    deburr
                    fluid
                    options={months}
                    placeholder="Start"
                    search
                    selection
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={errors.seeding ? true : false}
                  />
                )}
              />
              <Controller
                control={control}
                name="seeding.end"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    deburr
                    fluid
                    options={months}
                    placeholder="Stop"
                    search
                    selection
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={errors.seeding ? true : false}
                  />
                )}
              />
              <Controller
                control={control}
                name="seeding.duration"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Input
                    id="seeding.germination"
                    placeholder="Duration"
                    onChange={onChange}
                  />
                )}
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Transplanting</label>
            <FormGroup widths="equal">
              <Controller
                control={control}
                name="transplanting.start"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    deburr
                    fluid
                    options={months}
                    placeholder="Start"
                    search
                    selection
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={errors.transplanting ? true : false}
                  />
                )}
              />
              <Controller
                control={control}
                name="transplanting.end"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    deburr
                    fluid
                    options={months}
                    placeholder="Stop"
                    search
                    selection
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={errors.transplanting ? true : false}
                  />
                )}
              />
              <Controller
                control={control}
                name="transplanting.duration"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Input
                    id="transplanting.germination"
                    placeholder="Duration"
                    onChange={onChange}
                  />
                )}
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Planting</label>
            <FormGroup widths="equal">
              <Controller
                control={control}
                name="planting.start"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    deburr
                    fluid
                    options={months}
                    placeholder="Start"
                    search
                    selection
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={errors.planting ? true : false}
                  />
                )}
              />
              <Controller
                control={control}
                name="planting.end"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    deburr
                    fluid
                    options={months}
                    placeholder="Stop"
                    search
                    selection
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={errors.planting ? true : false}
                  />
                )}
              />
              <Controller
                control={control}
                name="transplanting.duration"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Input
                    id="planting.maturity"
                    placeholder="Duration"
                    onChange={onChange}
                    error={errors.planting ? true : false}
                  />
                )}
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Harvesting</label>
            <FormGroup widths="equal">
              <Controller
                control={control}
                name="planting.start"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    deburr
                    options={months}
                    placeholder="Start"
                    search
                    selection
                    fluid
                  />
                )}
              />
              <Controller
                control={control}
                name="planting.end"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Dropdown
                    deburr
                    options={months}
                    placeholder="Stop"
                    search
                    selection
                    fluid
                  />
                )}
              />
              <Controller
                control={control}
                name="planting.duration"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Input
                    id="planting.duration"
                    placeholder="Duration"
                    onChange={onChange}
                  />
                )}
              />
            </FormGroup>
          </Form.Field>
          {/*  */}
          <Form.Group widths="equal">
            <Form.Field>
              <label>Spacing</label>
              <Controller
                control={control}
                name="spacing"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Input
                    id="spacing"
                    label={{ basic: true, content: "cm" }}
                    labelPosition="right"
                    placeholder="spacing"
                    fluid
                    onChange={onChange}
                  />
                )}
              />
            </Form.Field>
            <Form.Field>
              <label>Rows</label>
              <Controller
                control={control}
                name="rows"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Input
                    id="rows"
                    label={{ basic: true, content: "cm" }}
                    labelPosition="right"
                    placeholder="Rows"
                    fluid
                    onChange={onChange}
                  />
                )}
              />
            </Form.Field>
          </Form.Group>
        </Grid.Column>
      </Grid>
      {/*  */}
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
    </Form>
  );
}
