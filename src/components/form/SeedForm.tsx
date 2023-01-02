import { yupResolver } from "@hookform/resolvers/yup";
import React, { ReactElement, useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Dropdown,
  Form,
  FormGroup,
  Grid,
  Input,
} from "semantic-ui-react";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { PlantContext } from "src/contexts/PlantContextProvider";
import { SeedContext } from "src/contexts/SeedContextProvider";
import { Frost } from "src/enums/Frost";
import { Season } from "src/enums/Season";
import { Sun } from "src/enums/Sun";
import { Type } from "src/enums/Type";
import { Water } from "src/enums/Water";
import { useListEnum } from "src/hooks/useListEnum";
import { Plant } from "src/interfaces/Plant";
import { Seed } from "src/interfaces/Seed";
import { SeedFormData } from "src/interfaces/SeedFormData";
import * as Yup from "yup";
import { FormModeType } from "./FormMode";
import { FileSelect } from "./FileSelect";

const months = [
  { key: "1", value: 1, text: "January" },
  { key: "2", value: 2, text: "February" },
  { key: "3", value: 3, text: "March" },
  { key: "4", value: 4, text: "April" },
  { key: "5", value: 5, text: "May" },
  { key: "6", value: 6, text: "June" },
  { key: "7", value: 7, text: "July" },
  { key: "8", value: 8, text: "August" },
  { key: "9", value: 9, text: "September" },
  { key: "10", value: 10, text: "October" },
  { key: "11", value: 11, text: "November" },
  { key: "12", value: 12, text: "December" },
];

interface SeedFormProps {
  // The seed object to be used for the initial value of the form in edit mode
  seed?: Seed;
}

/**
 * SeedForm
 * FIXME: do some cleaning
 * @returns
 */
export function SeedForm({ seed }: SeedFormProps) {
  // Application
  const { setViewSeedForm } = React.useContext(ApplicationContext);

  // Plant context used for the Seed species, companions and competitors
  const { plants, fetchPlants } = React.useContext(PlantContext);

  // Seed context
  const { createSeed, updateSeed, setSelected } = React.useContext(SeedContext);

  // Remapping collection for dropdown
  const plantsOptions = plants.map((sd) => ({
    key: sd._id,
    value: sd._id,
    text: sd.name,
  }));

  const plantIds = (plants: Plant[]) => {
    const ids = plants.map((plant) => {
      if (plant) return plant._id;
      else return "";
    });
    return ids;
  };

  // Remapping for edit
  const companionsIds = () => {
    if (seed?.companions)
      return seed?.companions.map((plant) => {
        if (plant) return plant._id;
      });
    else return [];
  };

  // Remapping for edit
  const competitorsIds = () => {
    if (seed?.competitors) {
      console.log("seed.competitors", seed.competitors);
      return seed?.competitors.map((plant) => {
        if (plant) return plant._id;
      });
    } else return [];
  };

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
    type: Yup.string().required("Type is required"),
    season: Yup.string().required("Type is required"),
    sun: Yup.string().required("Type is required"),
    frost: Yup.string().required("Type is required"),
    water: Yup.string().required("Type is required"),
    seeding: Yup.object().shape({
      start: Yup.number().required("Seeding start is required"),
      end: Yup.number().required("Seeding start is required"),
      duration: Yup.number().required("Seeding duration is required"),
    }),
    planting: Yup.object().shape({
      start: Yup.number().required("Planting start is required"),
      end: Yup.number().required("Planting start is required"),
      duration: Yup.number().required("Planting duration is required"),
    }),
    transplanting: Yup.object().shape({
      start: Yup.number().required("Transplanting start is required"),
      end: Yup.number().required("Transplanting start is required"),
      duration: Yup.number().required("Transplanting duration is required"),
    }),
    harvesting: Yup.object().shape({
      start: Yup.number().required("Harvesting start is required"),
      end: Yup.number().required("Harvesting start is required"),
      duration: Yup.number().required("Harvesting duration is required"),
    }),
    spacing: Yup.number().required("Type is required"),
    rows: Yup.number().required("Type is required"),
    image: Yup.mixed().required("Image is required"),
  });

  // Form hook
  const {
    control,
    register,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SeedFormData>({
    defaultValues: {
      species: seed?.plant._id,
      name: seed?.name,
      description: seed?.description,
      type: seed?.type,
      season: seed?.season,
      sun: seed?.sun,
      frost: seed?.frost,
      water: seed?.water,
      companions: companionsIds(),
      competitors: competitorsIds(),
      seeding: {
        start: seed?.sowing.start,
        end: seed?.sowing.end,
        duration: seed?.sowing.duration,
      },
      planting: {
        start: seed?.planting.start,
        end: seed?.planting.end,
        duration: seed?.planting.duration,
      },
      transplanting: {
        start: seed?.transplanting.start,
        end: seed?.transplanting.end,
        duration: seed?.transplanting.duration,
      },
      harvesting: {
        start: seed?.harvesting.start,
        end: seed?.harvesting.end,
        duration: seed?.harvesting.duration,
      },
      rows: seed?.rows,
      spacing: seed?.spacing,
      harvest: seed?.harvest,
      image: undefined,
      // file: null // set by FileSelect, validation on the file not image
    },
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });

  const mode: FormModeType = seed ? "edit" : "add";
  const watchAll = watch();

  useEffect(() => {
    console.log("SeedForm");
    fetchPlants();
  }, [fetchPlants]);

  useEffect(() => {
    console.log("Watch", watchAll);
  }, [watch, watchAll]);

  const onSubmit = (data: SeedFormData) => {
    console.log("PlantForm.onSubmit", mode, data);
    switch (mode) {
      case "add":
        createSeed(data, onSuccess);
        break;
      case "edit":
        if (seed) data.id = seed._id;
        updateSeed(data, onSuccess);
        break;
      default:
        throw Error("FormMode not found");
    }
  };

  // Callback
  const onSuccess = () => {
    // We need to post the form
    setViewSeedForm(false);
    setSelected(undefined);
    reset();
  };

  // Called when user click on the cancel button of the form
  const cancel = () => {
    setViewSeedForm(false);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} size="mini">
      <Grid columns={3}>
        {/*  */}
        <Grid.Column mobile={16} tablet={4} computer={5}>
          {/* Picture */}

          {/* ImageUpload */}
          <Controller
            control={control}
            name="image"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <FileSelect
                value={seed?.image}
                onChange={(e) => {
                  console.log("ImageUpload::onChange() ", e.target.files);
                  setValue(name, e.target.files[0]);
                  onChange(e.target.files[0]);
                }}
                error={errors.image ? true : false}
              />
            )}
          />

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
                  value={value}
                  onChange={async (e, { name, value }) => {
                    console.log("species change", value);
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
                  name="name"
                  label="Name"
                  fluid
                  placeholder="Name"
                  value={value}
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
                  value={value}
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
                  value={value}
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
                  value={value}
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
                  value={value}
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
                  value={value}
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
                  value={value}
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
                  value={value}
                  options={plantsOptions}
                  onChange={async (e, { name, value }) => {
                    console.log(name, value);
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
                  value={value}
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
                    name={name}
                    deburr
                    fluid
                    value={value}
                    options={months}
                    placeholder="Start"
                    search
                    selection
                    ref={ref}
                    onChange={async (e, { name, value }) => {
                      console.log(name, value);
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={(errors["seeding"] as any)?.start ? true : false}
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
                    value={value}
                    options={months}
                    placeholder="Stop"
                    search
                    selection
                    onChange={async (e, { name, value }) => {
                      console.log(name, value);
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={(errors["seeding"] as any)?.end ? true : false}
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
                  <Form.Field
                    error={(errors["seeding"] as any)?.duration ? true : false}
                  >
                    <Input
                      fluid
                      value={value}
                      onChange={onChange}
                      label={{ basic: true, content: "days" }}
                      labelPosition="right"
                      placeholder="ex: 20"
                    />
                  </Form.Field>
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
                    value={value}
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={
                      (errors["transplanting"] as any)?.start ? true : false
                    }
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
                    value={value}
                    options={months}
                    placeholder="Stop"
                    search
                    selection
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={(errors["transplanting"] as any)?.end ? true : false}
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
                  <Form.Field
                    error={
                      (errors["transplanting"] as any)?.duration ? true : false
                    }
                  >
                    <Input
                      fluid
                      value={value}
                      onChange={onChange}
                      label={{ basic: true, content: "days" }}
                      labelPosition="right"
                      placeholder="ex: 20"
                    />
                  </Form.Field>
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
                    value={value}
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={(errors["planting"] as any)?.start ? true : false}
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
                    value={value}
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={(errors["planting"] as any)?.end ? true : false}
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
                  <Form.Field
                    error={(errors["seeding"] as any)?.duration ? true : false}
                  >
                    <Input
                      fluid
                      value={value}
                      onChange={onChange}
                      label={{ basic: true, content: "days" }}
                      labelPosition="right"
                      placeholder="ex: 20"
                    />
                  </Form.Field>
                )}
              />
            </FormGroup>
          </Form.Field>
          <Form.Field>
            <label>Harvesting</label>
            <FormGroup widths="equal">
              <Controller
                control={control}
                name="harvesting.start"
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
                    value={value}
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={(errors["harvesting"] as any)?.start ? true : false}
                  />
                )}
              />
              <Controller
                control={control}
                name="harvesting.end"
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
                    value={value}
                    onChange={async (e, { name, value }) => {
                      setValue(name, value);
                      onChange(value);
                    }}
                    error={(errors["harvesting"] as any)?.end ? true : false}
                  />
                )}
              />
              <Controller
                control={control}
                name="harvesting.duration"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Field
                    error={
                      (errors["harvesting"] as any)?.duration ? true : false
                    }
                  >
                    <Input
                      fluid
                      value={value}
                      onChange={onChange}
                      label={{ basic: true, content: "days" }}
                      labelPosition="right"
                      placeholder="ex: 20"
                    />
                  </Form.Field>
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
                  <Form.Field error={errors.spacing ? true : false}>
                    <Input
                      id="spacing"
                      value={value}
                      label={{ basic: true, content: "cm" }}
                      labelPosition="right"
                      placeholder="spacing"
                      fluid
                      onChange={onChange}
                    />
                  </Form.Field>
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
                  <Form.Field error={errors.rows ? true : false}>
                    <Input
                      id="rows"
                      label={{ basic: true, content: "cm" }}
                      labelPosition="right"
                      placeholder="Rows"
                      fluid
                      value={value}
                      onChange={onChange}
                    />
                  </Form.Field>
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
