import { useContext } from "react";
import { Grid, Label } from "semantic-ui-react";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { PhaseActions } from "src/enums/PhaseActions";
import { getColor } from "src/enums/PhaseStatus";
import { PhaseType } from "src/enums/PhaseType";
import {
  Culture,
  CultureHarvestingPhase,
  CulturePhase,
} from "src/interfaces/Culture";
import { SeedPhaseInfo } from "src/interfaces/Seed";
import PhaseCalendar from "./PhaseCalendar";
import PhaseControlls from "./PhaseControlls";
import PhaseDetails from "./PhaseDetails";

interface PhaseItemProps {
  seed: SeedPhaseInfo;
  culture: Culture;
  phase: CulturePhase | CultureHarvestingPhase;
  type: string;
}

export function PhaseItem({
  seed,
  culture,
  type,
  phase,
}: PhaseItemProps): JSX.Element {
  /**
   * Handle the display for form modals
   */
  const {
    showPhaseForm,
    setShowPhaseForm,
    setShowHarvestingForm,
    showHarvestingForm,
  } = useContext(ApplicationContext);

  /**
   * Called when a user click on a phase control
   * @see PhaseType
   * @see PhaseActions
   */
  const onPhaseAction = (action: PhaseActions) => {
    console.log("onPhaseAction", action, type, phase, culture);
    switch (action) {
      case PhaseActions.START:
        if (type === PhaseType.HARVESTING) {
          setShowHarvestingForm(!showHarvestingForm);
        } else {
          setShowPhaseForm(!showPhaseForm);
        }
        break;
      case PhaseActions.UPDATE:
        console.log("update");
        // FIXME: Show different form
        setShowHarvestingForm(!showHarvestingForm);
        break;
      case PhaseActions.SKIP:
        console.log("skip");
        // call api
        break;
      case PhaseActions.END:
        console.log("done");
        // call api
        break;
    }
  };

  return (
    <Grid className="phase-item">
      <Grid.Column width={2}>
        {/* PhaseStatus */}
        <Label color={getColor(phase.status)} fluid>
          {phase.status}
        </Label>
      </Grid.Column>
      <Grid.Column width={2}>
        {/* PhaseControls */}
        <PhaseControlls
          phase={phase}
          type={type}
          onPhaseAction={onPhaseAction}
        />
      </Grid.Column>

      <Grid.Column width={3}>
        {/* PhaseDetails */}
        <PhaseDetails phase={phase} type={type} />
      </Grid.Column>
      <Grid.Column width={9}>
        {/* PhaseCalendar */}
        {/* <PhaseCalendar seed={seed} phase={phase} type={type} /> */}
      </Grid.Column>
    </Grid>
  );
}
