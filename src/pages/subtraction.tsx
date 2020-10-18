import React from "react"
import CalculationOfTheFourPrinciples from "../components/CalculationOfTheFourPrinciples"

const sub = (a: number, b: number) => a - b

const Subtraction:React.FC = () => (
  <CalculationOfTheFourPrinciples
    calculateFunc={sub}
    calculateString={"－"}
    seoTitle={"Subtraction"}
  />
)

export default Subtraction
