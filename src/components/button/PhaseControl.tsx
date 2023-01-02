import React from "react";
import { Button, Popup } from "semantic-ui-react";

interface PhaseControlProps {
  name: string;
  icon: string;
  tooltip: string;
  onClick: VoidFunction;
}

export const PhaseControl = ({
  name,
  icon,
  tooltip,
  onClick,
}: PhaseControlProps) => {
  return (
    <Popup
      size="mini"
      content={tooltip}
      trigger={
        <Button name={name} size="mini" icon={icon} onClick={() => onClick()} />
      }
    />
  );
};
