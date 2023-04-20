import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, ButtonGroup, Form, Input } from "semantic-ui-react";
import { CultureLocation } from "../../enums/CultureLocation";
import { CultureSoil } from "../../enums/CultureSoil";
import { useListEnum } from "../../hooks/useListEnum";
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
    // update culture creating an object form the right phase!
    let ob = {
      seeding: {
        soil: "",
        location: "",
        quantity: "",
      },
    };
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} size="mini">
      <Form.Group>
        {/*  */}
        <Form.Field width={6}>
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
        {/*  */}
        <Form.Field width={6}>
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

        {/*  */}
        <Form.Field width={4}>
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
                onChange={onChange}
                error={errors.type ? true : false}
              />
            )}
          />
        </Form.Field>
      </Form.Group>
      {/* FormActions */}
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
