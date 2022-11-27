import React, { useEffect } from "react";

interface Question {
  name: string;
  category: string;
}
const questions = [
  {
    name: "Input",
    category: "HTML",
  },
  {
    name: "Input",
    category: "CSS",
  },
  {
    name: "Input",
    category: "HTML",
  },
];

const groupByCategory = questions.reduce((group: any, product: any) => {
  const { category } = product;
  group[category] = group[category] ?? [];
  group[category].push(product);
  return group;
}, {});

export const TestGroup = () => {
  useEffect(() => {
    console.log(groupByCategory);
  }, []);
  return <div>test</div>;
};
