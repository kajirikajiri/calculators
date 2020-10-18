import React from "react"
import CalculationOfTheFourPrinciples from "../components/calculationOfTheFourPrinciples"

const sub = (a: number, b: number) => a - b

const Subtraction = () => (
  <CalculationOfTheFourPrinciples
    calculateFunc={sub}
    calculateString={"－"}
    seoTitle={"Subtraction"}
  />
)

export default Subtraction
