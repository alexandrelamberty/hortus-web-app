import React from "react";
import { Table, TableBody } from "semantic-ui-react";
import { Harvest } from "src/interfaces/Harvest";

interface HarvestTableProps {
  list: Harvest[];
}

export const HarvestTable = ({ list }: HarvestTableProps) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Weight kg</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <TableBody>
        {list.map((harvest) => (
          <Table.Row>
            <Table.Cell>{harvest.date.toDateString()}</Table.Cell>
            <Table.Cell>{harvest.quantity}</Table.Cell>
            <Table.Cell>{harvest.weight}</Table.Cell>
          </Table.Row>
        ))}
      </TableBody>
    </Table>
  );
};
