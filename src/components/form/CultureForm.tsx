import React, { useEffect } from "react";
import { SeedContext } from "../../contexts/SeedContextProvider";
import SeedFormGrid from "../grid/SeedFormGrid";

type FormProps = {
  onSubmitted?: () => void;
  onCancel?: () => void;
};

export function CultureForm(props: FormProps) {
  // Context
  const { fetchSeeds } = React.useContext(SeedContext);

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  const divStyle: any = {
    overflowY: "auto",
    overflowX: "hidden",
    // border: "1px solid red",
    height: "60vh",
    position: "relative",
    padding: 5,
  };

  return (
    <div style={divStyle}>
      <SeedFormGrid />
    </div>
  );
}
