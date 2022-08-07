import React from "react";
import { Button, Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today",
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week",
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month",
  },
];

export default class SpeciesFilters extends React.Component {
  render() {
    return (
      <div>
        <Dropdown
          button
          className="icon"
          floating
          labeled
          icon="world"
          header="Adjust time span"
          options={options}
          defaultValue={options[0].value}
        />
      </div>
    );
  }
}
