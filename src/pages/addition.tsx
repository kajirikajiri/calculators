import React from "react"
import CalculationOfTheFourPrinciples from "../components/CalculationOfTheFourPrinciples"

const add = (a: number, b: number) => a + b

const Addition: React.FC = () => (
  <CalculationOfTheFourPrinciples
    calculateFunc={add}
    calculateString={"+"}
    seoTitle={"Addition"}
  />
)

export default Addition
