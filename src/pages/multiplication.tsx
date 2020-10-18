import React from "react"
import CalculationOfTheFourPrinciples from "../molecules/CalculationOfTheFourPrinciples"

const mul = (a: number, b: number) => a * b

const Multiplication: React.FC = () => (
  <CalculationOfTheFourPrinciples
    calculateFunc={mul}
    calculateString={"×"}
    seoTitle={"Multiplication"}
  />
)

export default Multiplication
