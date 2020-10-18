import React from "react"
import CalculationOfTheFourPrinciples from "../components/calculationOfTheFourPrinciples"

const add = (a: number, b: number) => a + b

const Addition = () => (
  <CalculationOfTheFourPrinciples
    calculateFunc={add}
    calculateString={"+"}
    seoTitle={"Addition"}
  />
)

export default Addition
