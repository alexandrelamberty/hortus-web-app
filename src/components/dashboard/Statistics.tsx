import React, { useEffect } from "react";
import { useContext } from "react";
import { CultureContext } from "src/providers/CultureProvider";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  List,
  Statistic,
  StatisticGroup,
  StatisticLabel,
  StatisticValue,
} from "semantic-ui-react";
import { Culture } from "src/interfaces/Culture";

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
