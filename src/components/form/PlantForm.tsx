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
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { PlantContext } from "src/contexts/PlantContextProvider";
import { Plant } from "src/interfaces/Plant";
import { PlantFormData } from "src/interfaces/PlantFormData";
import * as Yup from "yup";

interface PlantFormProps {
  plant?: Plant;
}

// FIXME: change isEdit:boolean ?
type FormModeType = "add" | "edit";

/**
 *
 * @param param0
 * @returns
 * @see Plant
 */
export const PlantForm = ({ plant }: PlantFormProps) => {
  // Contexts
  const { setViewPlantForm } = React.useContext(ApplicationContext);
  const { createPlant, updatePlant, setSelected } =
    React.useContext(PlantContext);

  // Internal state
  const mode: FormModeType = plant ? "edit" : "add";
  // Concatenation of all the plant ?specification?
  const [name, setName] = useState<string>(" ");
  // Concatenation from the genus and the species form input
  const [binomial, setBinomial] = useState<string>(" ");
  // The file selected from the user
  const [selectedFile, setSelectedFile] = useState();
  // The picture url
  const [preview, setPreview] = useState<string>();

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
    setValue,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<PlantFormData>({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });

  // Used to watch the change on all fields so we can construct the name and
  // binomial name of the Plant
  const watchAllFields = watch();

  // Handle the form submission
  const onSubmit = (form: PlantFormData) => {
    console.log("PlantForm.onSubmit", mode, form);
    if (mode === "add") create(form);
    else update(form);
  };

  const create = (form: PlantFormData) => {
    console.log("PlantFormCreate", form);
    const fd = new FormData();
    fd.append("name", name);
    fd.append("binomial", binomial);
    fd.append("family", form.family);
    fd.append("genus", form.genus);
    fd.append("species", form.species);
    fd.append("subspecies", form.subspecies);
    fd.append("variety", form.variety);
    fd.append("forma", form.forma);
    fd.append("cultivar", form.cultivar);
    fd.append("hybrid", form.hybrid);
    if (selectedFile) fd.append("image", form.image[0]);

    // Call the context function
    createPlant(fd, onSuccess);
  };

  // Create a FormData with form values and call the context function to create
  // a plant
  const update = (form: PlantFormData): void => {
    // content types to multipart/form-data
    const fd = new FormData();
    fd.append("name", name);
    fd.append("binomial", binomial);
    fd.append("family", form.family);
    fd.append("genus", form.genus);
    fd.append("species", form.species);
    // non-mandatory fields
    fd.append("subspecies", form.subspecies);
    fd.append("variety", form.variety);
    fd.append("forma", form.forma);
    fd.append("cultivar", form.cultivar);
    fd.append("hybrid", form.hybrid);
    if (selectedFile) fd.append("image", form.image[0]);
    // FIXME:
    let id = "";
    if (plant) id = plant._id;
    // Call context function
    updatePlant(id, fd, onSuccess);
  };

  // Called when user click on the cancel button of the form
  const cancel = (): void => {
    console.log("PlantForm onCancel()");
    setViewPlantForm(false);

    reset();
  };

  /**
   * Called when the context function is called with success
   * @see PlantContextProvide
   */
  const onSuccess = () => {
    console.log("PlantForm onSuccess");
    setViewPlantForm(false);
    setSelected(undefined);
    reset();
  };

  // Called when a file is selected from the prompted browser GUI window
  const onSelectFile = (e: any) => {
    console.log(e);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    // update the form, input is not controller
    setValue("image", e.target.files);

    // set for the preview to update
    setSelectedFile(e.target.files[0]);
  };

  // If the form is in `edit` mode and the plant to edit is set
  // update the form values
  useEffect(() => {
    if (mode === "edit" && plant) {
      console.log("PlantForm mode: edit", plant);
      setValue("family", plant.family, { shouldDirty: true });
      setValue("genus", plant.genus);
      setValue("species", plant.species);
      if (plant.subspecies) setValue("subspecies", plant.subspecies);
      if (plant.variety) setValue("variety", plant.variety);
      if (plant.forma) setValue("forma", plant.forma);
      if (plant.cultivar) setValue("cultivar", plant.cultivar);
      if (plant.hybrid) setValue("hybrid", plant.hybrid);
      if (plant && plant.picture) {
        let url = "http://localhost:3333/static/" + plant.picture;
        setPreview(url);
      }
    }
  }, [mode, plant, setValue]);

  // If the user select a file, create a url to preview the file
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  // Update name and binomial value

  // FIXME: too many re renders just for that
  // FIXME: watch only 2 fiels or input event
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
    if (mode === "edit" && plant && plant.picture) {
      let url = "http://localhost:3333/static/" + plant.picture;
      setPreview(url);
    }
  }, [mode, plant, watch, watchAllFields]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} size="mini" error>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            {/* Family */}
            <Form.Field>
              <label>Family</label>
              <input id="family" placeholder="Family" {...register("family")} />
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
                <p>{name}</p>
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <p>{binomial}</p>
              </Form.Field>
            </Segment>
            <Segment placeholder>
              <Header icon>
                {preview ? (
                  <img src={preview} alt={preview} />
                ) : (
                  <>
                    <Icon name="image" />
                    <Header.Content>
                      Add a picture
                      <Header.Subheader>
                        Choose a picture from your computer.
                      </Header.Subheader>
                    </Header.Content>
                  </>
                )}
              </Header>
              <Button as="label" htmlFor="image" type="button" primary>
                Choose a File
              </Button>
              <Form.Field>
                <input
                  id="image"
                  type="file"
                  hidden
                  onChange={(e) => {
                    onSelectFile(e);
                  }}
                />
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
