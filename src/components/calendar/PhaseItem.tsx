import { useContext } from "react";
import { Grid, Label } from "semantic-ui-react";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { PhaseActions } from "src/enums/PhaseActions";
import { PhaseStatus } from "src/enums/PhaseStatus";
import { PhaseType } from "src/enums/PhaseType";
import { Culture, CulturePhase } from "src/interfaces/Culture";
import { PhaseInfo } from "src/interfaces/Seed";
import PhaseCalendar from "./PhaseCalendar";
import PhaseControlls from "./PhaseControlls";

interface PhaseItemProps {
  seed: PhaseInfo;
  culture: Culture;
  phase: CulturePhase;
  type: string;
}

export function PhaseItem({
  seed,
  culture,
  type,
  phase,
}: PhaseItemProps): JSX.Element {
  /**
   * Context
   */

  const {
    showPhaseForm,
    setShowPhaseForm,
    setShowHarvestingForm,
    showHarvestingForm,
  } = useContext(ApplicationContext);
  /**
   * Called when a user click on a phase controll
   * Phase type can be; seeding, transplanting, planting, harvesting
   * FIXME: change to action it is confusing
   * Phase status can be: start
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

  /**
   * Return a color according to the phase status
   */
  const getColor = () => {
    switch (phase.status) {
      case PhaseStatus.Pending:
        return "purple";
      case PhaseStatus.Skipped:
        return "red";
      case PhaseStatus.Started:
        return "blue";
      case PhaseStatus.Done:
        return "red";
    }
  };

  /**
   * Render details for the specific phase
   */
  const renderDetails = () => {
    switch (type) {
      case "seeding":
        return (
          <>
            <Label color={getColor()}>Indoor</Label>
            <Label color={getColor()}>Loam</Label>
          </>
        );

      case "transplanting":
        return (
          <>
            <Label color={getColor()}>Indoor</Label>
            <Label color={getColor()}>Loam</Label>
          </>
        );

      case "planting":
        return (
          <>
            <Label color={getColor()}>Indoor</Label>
            <Label color={getColor()}>Loam</Label>
          </>
        );

      case "harvesting":
        return (
          <>
            <Label color={getColor()}>Indoor</Label>
            <Label color={getColor()}>Loam</Label>
          </>
        );

      default:
        return <></>;
    }
  };

  return (
    <Grid className="phase-item">
      <Grid.Column width={2}>
        <Label color={getColor()} fluid>
          {phase.status}
        </Label>
      </Grid.Column>
      <Grid.Column width={2}>
        <PhaseControlls
          phase={phase}
          type={type}
          onPhaseAction={onPhaseAction}
        />
      </Grid.Column>
      <Grid.Column width={3}>{renderDetails()}</Grid.Column>
      <Grid.Column width={9}>
        <PhaseCalendar seed={seed} phase={phase} type={type} />
      </Grid.Column>
    </Grid>
  );
}
