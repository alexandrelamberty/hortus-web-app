import React, { useContext, useEffect } from "react";
import {
  Statistic,
  StatisticGroup,
  StatisticLabel,
  StatisticValue,
} from "semantic-ui-react";
import { CultureContext } from "src/contexts/CultureContextProvider";

export default function Statistics() {
  const { cultures, fetchCultures } = useContext(CultureContext);
  useEffect(() => {
    fetchCultures();
  }, [fetchCultures]);
  console.log("CultureList: ", cultures);
  return (
    <StatisticGroup widths="3">
      <Statistic>
        <StatisticLabel>Cultures</StatisticLabel>
        <StatisticValue>200</StatisticValue>
      </Statistic>
      <Statistic>
        <StatisticLabel>Cultures</StatisticLabel>
        <StatisticValue>200</StatisticValue>
      </Statistic>
      <Statistic>
        <StatisticLabel>Cultures</StatisticLabel>
        <StatisticValue>200</StatisticValue>
      </Statistic>
    </StatisticGroup>
  );
}
