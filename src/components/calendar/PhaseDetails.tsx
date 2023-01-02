import { useEffect } from "react";
import { Label } from "semantic-ui-react";
import { getColor } from "src/enums/PhaseStatus";
import { CultureHarvestingPhase, CulturePhase } from "src/interfaces/Culture";

interface PhaseDetailsProps {
  phase: CultureHarvestingPhase | CulturePhase;
  type: string;
}

const PhaseDetails = ({ phase }: PhaseDetailsProps) => {
  // Verify the phase type
  // FIXME: subject to change?!
  const isHarvesting = (object: any) => {
    return "weight" in object;
  };

  useEffect(() => {
    console.log("isHarvesting ", isHarvesting(phase));
  });

  /**
   * Render details according to the current phase
   */
  const renderDetails = () => {
    if (!isHarvesting(phase)) {
      return (
        <>
          <Label color={getColor(phase.type)}>Indoor</Label>
          <Label color={getColor(phase.type)}>200</Label>
          <Label color={getColor(phase.type)}>Loam</Label>
        </>
      );
    }
    return (
      <>
        <Label color={getColor(phase.type)}>20</Label>
        <Label color={getColor(phase.type)}>5 kg</Label>
      </>
    );
  };

  return <>{renderDetails()}</>;
};

export default PhaseDetails;
