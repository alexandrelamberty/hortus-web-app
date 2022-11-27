import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import { PlantDTO } from "src/interfaces/PlantDTO";
import { PlantFormData } from "src/interfaces/PlantFormData";
import { PlantContext } from "src/providers/PlantContextProvider";
import * as Yup from "yup";

export const PlantForm = () => {
  // Yup object schema validation
  const validationSchema = Yup.object().shape({
    genus: Yup.string().required("Genus is required"),
    species: Yup.string().required("Species is required"),
  });

  // Form hook
  const {
    control,
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<PlantFormData>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  // Used to watch the change on all fields so we can construct the name and
  // binomial name of the Plant
  const watchAllFields = watch();
  // Internal state
  const [name, setName] = useState<string>("");
  const [binomial, setBinomial] = useState<string>("");
  const [picture, setPicture] = useState("");
  // FIXME:
  const { setFormOpen, createPlant } = React.useContext(PlantContext);

  const onSubmit = (form: PlantFormData) => {
    console.log("submit", form);
    // Encoding form data to multipart/form-data
    const fd = new FormData();
    fd.append("name", name);
    fd.append("binomial", binomial);
    fd.append("family", form.family);
    fd.append("genus", form.genus);
    fd.append("species", form.species);
    fd.append("variety", form.variety);
    fd.append("subspecies", form.subspecies);
    fd.append("forma", form.forma);
    fd.append("image", form.image[0]);

    // let dto: PlantDTO = {
    //   name: name,
    //   binomial: binomial,
    //   family: data.family,
    //   genus: data.genus,
    //   species: data.species,
    //   variety: data.variety,
    //   subspecies: data.subspecies,
    //   forma: data.forma,
    //   image: data.image[0],
    // };

    // Call context
    createPlant(fd, onCreated);
    // Call useForm reset
    reset();
  };

  const cancel = () => {
    setFormOpen(false);
    reset();
  };

  const onCreated = () => {
    setFormOpen(false);
    reset();
  };

  // Update name and binomial values
  useEffect(() => {
    console.log("watch", watchAllFields);
    let bname = [
      // lowercase
      watchAllFields.genus,
      watchAllFields.species,
    ];
    // Upda
    setName(bname.join(" "));
    if (watchAllFields.subspecies !== "")
      bname.push("subsp. " + watchAllFields.subspecies);
    if (watchAllFields.variety !== "")
      bname.push("var. " + watchAllFields.variety);

    setBinomial(bname.join(" "));
  }, [watch, watchAllFields]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} size="mini" error>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            {/* Family */}
            <Form.Field>
              <label>Family</label>
              <input
                id="family"
                placeholder="Family"
                {...register("family")}
                required={false}
              />
            </Form.Field>
            {/* Genus */}
            <Form.Field>
              <Controller
                control={control}
                name="genus"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Input
                    id="genus"
                    label="Genus"
                    placeholder="Genus"
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur} // notify when input is touched
                    value={value} // return updated value
                    ref={ref} // set ref for focus management
                    error={errors.genus ? true : false}
                  />
                )}
              />
            </Form.Field>
            {/* Species */}
            <Form.Field>
              <label>Species</label>
              <input
                id="species"
                placeholder="Species"
                {...register("species")}
              />
            </Form.Field>
            {/* Subspecies */}
            <Form.Field>
              <label>Subspecies</label>
              <input
                id="subspecies"
                placeholder="Subspecies"
                {...register("subspecies")}
              />
            </Form.Field>
            {/* Variant */}
            <Form.Field>
              <label>Variety</label>
              <input
                id="variety"
                placeholder="Variety"
                {...register("variety")}
              />
            </Form.Field>
            {/* Forma */}
            <Form.Field>
              <label>Forma</label>
              <input id="forma" placeholder="Forma" {...register("forma")} />
            </Form.Field>
            {/* Cultivar */}
            <Form.Field>
              <label>Cultivar</label>
              <input
                id="cultivar"
                placeholder="Cultivar"
                {...register("cultivar")}
              />
            </Form.Field>
            {/* Hybrid */}
            <Form.Field>
              <label>Hybrid</label>
              <input id="hybrid" placeholder="Hybrid" {...register("hybrid")} />
            </Form.Field>
          </Grid.Column>
          {/*  */}
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Segment size="mini">
              <Form.Field>
                <label>Binomial name</label>
                <p>{binomial}</p>
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <p>{name}</p>
              </Form.Field>
            </Segment>
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
              <Form.Field>
                <input id="image" type="file" {...register("image")} hidden />
                {picture && <img src={picture} alt={picture} />}
              </Form.Field>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        {/* Form controlls */}
        <Grid.Row>
          <Grid.Column width={16}>
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
