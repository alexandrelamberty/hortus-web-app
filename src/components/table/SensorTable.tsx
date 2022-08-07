import React, { useEffect } from "react";
import { useContext } from "react";
import { PlantContext } from "src/providers/PlantContextProvider";
import { Button, Checkbox, Icon, Label, Menu, Table } from "semantic-ui-react";
import _ from "lodash";
import { SensorContext } from "src/providers/SensorProvider";

function exampleReducer(state: any, action: any) {
  console.log(state, action);
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: "ascending",
      };
    default:
      throw new Error();
  }
}

export default function SensorsTable() {
  const { count, sensors, fetchSensors } = useContext(SensorContext);

  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: sensors,
    direction: null,
  });

  const { column, data, direction } = state;

  // TODO: make custom hook
  useEffect(() => {
    fetchSensors();
    state.data = sensors;
  }, [fetchSensors]);

  return (
    <Table celled compact definition selectable sortable>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell
            sorted={column === "name" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell>IP</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Last Update</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {sensors.map(({ name, ip, macaddress }) => (
          <Table.Row key={name}>
            <Table.Cell collapsing>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan="4">
            <Button
              floated="right"
              icon
              labelPosition="left"
              primary
              size="small"
            >
              <Icon name="user" /> Add User
            </Button>
            <Button size="small">Approve</Button>
            <Button disabled size="small">
              Approve All
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
