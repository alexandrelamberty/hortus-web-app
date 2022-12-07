import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, ButtonGroup, Form, Grid } from "semantic-ui-react";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { PlantContext } from "src/contexts/PlantContextProvider";
import { Plant } from "src/interfaces/Plant";
import * as Yup from "yup";
import { FormModeType } from "./FormMode";
import { FileSelect } from "./FileSelect";
import { PlantFormData } from "src/interfaces/PlantFormData";
interface PlantFormProps {
  // The plant to edit
  plant?: Plant;
}

export const PlantForm = ({ plant }: PlantFormProps) => {
  // Contexts
  const { setViewPlantForm } = React.useContext(ApplicationContext);
  const { createPlant, updatePlant, setSelected } =
    React.useContext(PlantContext);

  // Yup object schema validation
  const validationSchema = Yup.object().shape({
    family: Yup.string().required("Family is required"),
    genus: Yup.string().required("Genus is required"),
    species: Yup.string().required("Species is required"),
    // image: Yup.mixed().required("Image is required"),
  });

  // Form hook
  const {
    control,
    register,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<PlantFormData>({
    defaultValues: {
      family: plant?.family,
      genus: plant?.genus,
      species: plant?.species,
      subspecies: plant?.subspecies,
      variety: plant?.variety,
      forma: plant?.forma,
      cultivar: plant?.cultivar,
      hybrid: plant?.hybrid,
      image: undefined,
    },
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });

  // Define the mode in which the form will be treated
  const mode: FormModeType = plant ? "edit" : "add";

  // Concatenation of all the plant ?specification?
  const [name, setName] = useState<string>("");
  // Concatenation from the genus and the species form input
  const [binomial, setBinomial] = useState<string>("");
  const [trinomial, setTrinomial] = useState<string>("");
  const watchAllFields = watch();
  //const watchFields = watch(["showAge", "number"]);

  /**
   * Called when the form is submited and valid.
   * Create  a multipart/form-data
   * Create / Update depending on the form mode
   * @param form
   */
  const onValid = (form: any) => {
    console.log("PlantForm.onSubmit", mode, form);
    // Create multipart/form-data
    const fd = new FormData();
    if (form.image !== undefined) {
      console.log("file change we pass the image");
      fd.append("image", form.image[0] as File);
    }
    // Move to server side
    fd.append("name", "name");
    fd.append("binomial", binomial);
    // Mandatory fiels
    fd.append("family", form.family);
    fd.append("genus", form.genus);
    fd.append("species", form.species);
    // Non mandatory fields
    if (form.subspecies) fd.append("subspecies", form.subspecies);
    if (form.subspecies) fd.append("variety", form.variety);
    if (form.subspecies) fd.append("forma", form.forma);
    if (form.subspecies) fd.append("cultivar", form.cultivar);
    if (form.subspecies) fd.append("hybrid", form.hybrid);
    // Create or save
    if (mode === "add") {
      createPlant(fd, onSuccess);
    } else if (mode === "edit" && plant) {
      // Check if
      updatePlant(plant._id, fd, onSuccess);
    }
  };

  const onError = (e: any) => {
    console.log("PlantForm::onError", e);
  };

  /**
   * Callback for the updatePlant or createPlant function success
   * @see PlantContextProvide
   */
  const onSuccess = () => {
    console.log("PlantForm onSuccess");
    setViewPlantForm(false);
    setSelected(undefined);
    reset();
  };

  // Called when user click on the cancel button of the form
  const cancel = (): void => {
    console.log("PlantForm onCancel()");
    setViewPlantForm(false);
    setSelected(undefined);
    reset();
  };

  /**
   * Create the binomial or trinomial name of the plant.
   * FIXME: See my plant nomenclature notes
   */
  useEffect(() => {
    console.log("watch", watchAllFields);
    // let bname = [
    //   // lowercase
    //   watchAllFields.genus,
    //   watchAllFields.species,
    // ];
    // // Upda
    // setBinomial(bname.join(" "));
    // if (watchAllFields.subspecies !== "")
    //   bname.push("subsp. " + watchAllFields.subspecies);
    // if (watchAllFields.variety !== "")
    //   bname.push("var. " + watchAllFields.variety);

    // setTrinomial(bname.join(" "));
  }, [watchAllFields]);

  return (
    <Form onSubmit={handleSubmit(onValid, onError)} size="mini" error inverted>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            {/* Family */}
            <Form.Field>
              <Controller
                control={control}
                name="family"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Input
                    id="family"
                    label="Family"
                    placeholder="Family"
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur} // notify when input is touched
                    value={value} // return updated value
                    error={errors.family ? true : false}
                  />
                )}
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
                    error={errors.genus ? true : false}
                  />
                )}
              />
            </Form.Field>
            {/* Species */}
            <Form.Field>
              <Controller
                control={control}
                name="species"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Input
                    id="species"
                    label="Species"
                    placeholder="Species"
                    onChange={onChange} // send value to hook form
                    value={value} // return updated value
                    error={errors.species ? true : false}
                  />
                )}
              />
            </Form.Field>
            {/* Subspecies */}
            <Form.Field>
              <Controller
                control={control}
                name="subspecies"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Form.Input
                    id="subspecies"
                    label="Subspecies"
                    placeholder="Subspecies"
                    onChange={onChange} // send value to hook form
                    value={value} // return updated value
                  />
                )}
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
            {/* <Segment size="mini">
              <Form.Field>
                <label>Binomial name</label>
                <p>{name}</p>
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <p>{binomial}</p>
              </Form.Field>
            </Segment> */}

            {/* Commons names */}

            <Form.Field>
              <label>Common names</label>
              <input />
            </Form.Field>

            {/* ImageUpload */}
            <Form.Field>
              <label>Common names</label>
              <Controller
                control={control}
                name="image"
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <FileSelect
                    value={plant?.image}
                    onChange={(e) => {
                      console.log("ImageUploadChange", e.target.files);
                      setValue(name, e.target.files);
                      onChange(e.target.files);
                    }}
                    error={errors.image ? true : false}
                  />
                )}
              />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
        {/* Form controlls */}
        <Grid.Row>
          <Grid.Column width={16}>
            <ButtonGroup floated="right">
              <Button onClick={() => cancel()}>Cancel</Button>
              <Button type="submit" primary disabled={isSubmitting || !isDirty}>
                Save
              </Button>
            </ButtonGroup>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};
