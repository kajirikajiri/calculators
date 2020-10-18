import React from "react"
import CalculationOfTheFourPrinciples from "../components/calculationOfTheFourPrinciples"

const mul = (a: number, b: number) => a * b

const Multiplication = () => (
  <CalculationOfTheFourPrinciples
    calculateFunc={mul}
    calculateString={"×"}
    seoTitle={"Multiplication"}
  />
)

export default Multiplication
