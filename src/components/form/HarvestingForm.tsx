import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Button, ButtonGroup, Form, Input, Message } from "semantic-ui-react";
import { CultureLocation } from "src/enums/CultureLocation";
import { CultureSoil } from "src/enums/CultureSoil";
import { useListEnum } from "src/hooks/useListEnum";
import { Harvest } from "src/interfaces/Harvest";
import * as Yup from "yup";
import { HarvestTable } from "../list/HarvestList";

const harvests: Harvest[] = [
  {
    date: new Date(),
    quantity: 10,
    weight: 4.8,
  },
  {
    date: new Date(),
    quantity: 8,
    weight: 3.2,
  },
  {
    date: new Date(),
    quantity: 5,
    weight: 1.6,
  },
  {
    date: new Date(),
    quantity: 7,
    weight: 2.5,
  },
];

/**
 * HarvestinForm
 * @returns
 */
export const HarvestingForm = () => {
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
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} size="mini">
        <HarvestTable list={harvests} />
        <Form.Group widths="equal">
          <Form.Field>
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
          <Form.Field>
            <Controller
              control={control}
              name="soil"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <>
                  <label>Weight</label>
                  <Input
                    name="soil"
                    label={{ basic: false, content: "kg" }}
                    labelPosition="right"
                    placeholder="ex: 200"
                    fluid
                    onChange={onChange}
                    error={errors.type ? true : false}
                  />
                </>
              )}
            />
          </Form.Field>
          <Message>After this you can add more harvest to the phase.</Message>
        </Form.Group>
      </Form>
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
    </div>
  );
};
