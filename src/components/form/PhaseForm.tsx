import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, ButtonGroup, Form, Input } from "semantic-ui-react";
import { CultureLocation } from "src/enums/CultureLocation";
import { CultureSoil } from "src/enums/CultureSoil";
import { useListEnum } from "src/hooks/useListEnum";
import * as Yup from "yup";
/**
 * PhaseForm provide a form to upate the seeding, transplanting or planting
 * phase of a culture.
 * It validate the form inputs and call the API.updatePhase()
 * @returns
 */
export const PhaseForm = () => {
  const locations = useListEnum(CultureLocation);
  const soils = useListEnum(CultureSoil);
  // Schema validation
  const validationSchema = Yup.object().shape({
    location: Yup.string().required("Location is required"),
    quantity: Yup.string().required("Quantity is required"),
    soil: Yup.string().required("Soil is required"),
  });

  //
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<any>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log("onSubmit", data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} size="mini">
      <Form.Group>
        <Form.Field width={7}>
          <Controller
            control={control}
            name="location"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <Form.Dropdown
                name="location"
                label="Location"
                placeholder="Select"
                selection
                fluid
                options={locations}
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  onChange(value);
                }}
                error={errors.type ? true : false}
              />
            )}
          />
        </Form.Field>
        <Form.Field width={5}>
          <Controller
            control={control}
            name="soil"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <Form.Dropdown
                name="soil"
                label="Soil"
                placeholder="Select"
                selection
                fluid
                options={soils}
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  onChange(value);
                }}
                error={errors.type ? true : false}
              />
            )}
          />
        </Form.Field>
        <Form.Field width={6}>
          <Controller
            control={control}
            name="soil"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <Form.Input
                name="soil"
                label="Quantity"
                placeholder="ex: 200"
                fluid
                onChange={onChange}
                error={errors.type ? true : false}
              />
            )}
          />
        </Form.Field>
      </Form.Group>
      <ButtonGroup floated="right" size="mini">
        <Button
          onClick={() => {
            reset();
          }}
        >
          Cancel
        </Button>
        <Button type="submit" primary>
          Save
        </Button>
      </ButtonGroup>
    </Form>
  );
};
