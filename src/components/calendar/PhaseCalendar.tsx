import { useEffect, useState } from "react";
import { Grid, SemanticCOLORS } from "semantic-ui-react";
import { CultureHarvestingPhase, CulturePhase } from "../interfaces/Culture";
import { SeedPhaseInfo, Seed } from "../interfaces/Seed";

interface PhaseCalendarProps {
  seed: SeedPhaseInfo;
  phase: CulturePhase | CultureHarvestingPhase;
  type: string;
}

interface Month {
  color: SemanticCOLORS;
  css: string;
}

const PhaseCalendar = ({ type, seed, phase }: PhaseCalendarProps) => {
  const [months, setMonths] = useState<Month[]>([]);

  useEffect(() => {
    let items: Month[] = [];
    for (let i: number = 1; i <= 13; i++) {
      // Color the case between the culture seed phase range
      // culture.seend.start
      let color: SemanticCOLORS = "blue";
      let css: string = "";

      if (i === seed.start && i === seed.end) {
        console.log("small");
        css = "calendar-item-start-end";
      } else if (i === seed.start && i !== seed.end) {
        console.log("start");
        css = "calendar-item-start";
      } else if (i > seed.start && i < seed.end) {
        console.log("middle");
        css = "calendar-item";
      } else if (i === seed.end) {
        console.log("end");
        css = "calendar-item-end";
      }
      let cp: Month = {
        color: color,
        css: css,
      };
      items.push(cp);
    }
    setMonths(items);
  }, []);

  return (
    <Grid className="phase-item-calendar" columns="equal">
      {months.map((month: Month) => {
        return <PhaseCalendarItem css={month.css} color={month.color} />;
      })}
    </Grid>
  );
};

interface PhaseCalendarItemProps {
  color: SemanticCOLORS;
  css: string;
}

const PhaseCalendarItem = ({ color, css }: PhaseCalendarItemProps) => {
  return <Grid.Column className={css} />;
};

export default PhaseCalendar;
