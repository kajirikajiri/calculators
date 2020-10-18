import React, { useEffect, useState } from "react"
import { Layout } from "./Layout"
import { SEO } from "./Seo"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"

type CalculationOfTheFourPrinciples = {
  calculateFunc: (a: number, b: number) => number
  seoTitle: string
  calculateString: string
}

const useStyles = makeStyles({
  left: {
    textAlign: "left",
    fontSize: 40,
  },
  right: {
    textAlign: "right",
    fontSize: 40,
  },
})

const errorMessage = "数値のみでお願いします。"

const CalculationOfTheFourPrinciples: React.FC<CalculationOfTheFourPrinciples> = ({
  calculateFunc,
  seoTitle,
  calculateString,
}) => {
  const classes = useStyles()

  const [left, setLeft] = useState<number | "">("")
  const [leftFocus, setLeftFocus] = useState(false)
  const [leftErrorFlag, setLeftErrorFlag] = useState(false)
  const [leftErrorWord, setLeftErrorWord] = useState("")
  const [right, setRight] = useState<number | "">("")
  const [rightFocus, setRightFocus] = useState(false)
  const [rightErrorFlag, setRightErrorFlag] = useState(false)
  const [rightErrorWord, setRightErrorWord] = useState("")
  const [total, setTotal] = useState(0)

  const leftHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.value === "") {
      setLeft("")
      return
    }

    const isNaN = Number.isNaN(Number(e.target.value))
    if (!isNaN) {
      setLeftErrorFlag(false)
      setLeftErrorWord("")
      setLeft(Number(e.target.value))
    } else {
      setLeftErrorFlag(true)
      setLeftErrorWord(errorMessage)
    }
  }

  const handleLeftBlur = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setLeftFocus(false)
  }

  const handleRightBlur = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRightFocus(false)
  }

  const handleLeftFocus = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setLeftFocus(true)
  }

  const handleRightFocus = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRightFocus(true)
  }

  const rightHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.value === "") {
      setRight("")
      return
    }

    const isNaN = Number.isNaN(Number(e.target.value))
    if (!isNaN) {
      setRightErrorFlag(false)
      setRightErrorWord("")
      setRight(Number(e.target.value))
    } else {
      setRightErrorFlag(true)
      setRightErrorWord(errorMessage)
    }
  }

  useEffect(() => {
    if (left === "" && right === "") {
      setTotal(0)
    } else if (left === "" && right !== "") {
      setTotal(calculateFunc(0, right))
    } else if (left !== "" && right === "") {
      setTotal(calculateFunc(left, 0))
    } else if (left !== "" && right !== "") {
      setTotal(calculateFunc(left, right))
    }
  })

  return (
    <Layout>
      <SEO title={seoTitle} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: 50, margin: "0 10px 0", color: "transparent" }}
            >
              {calculateString}
            </span>
            <TextField
              placeholder={leftFocus ? "" : "0"}
              InputProps={
                leftFocus
                  ? { inputMode: "numeric", classes: { input: classes.left } }
                  : { classes: { input: classes.right } }
              }
              variant="outlined"
              value={left}
              onChange={leftHandler}
              onFocus={handleLeftFocus}
              onBlur={handleLeftBlur}
              error={leftErrorFlag}
              helperText={leftErrorWord}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderBottom: "1px black solid",
              paddingBottom: 10,
              paddingTop: 10,
              marginBottom: 10,
            }}
          >
            <span style={{ fontSize: 50, margin: "0 10px 0" }}>
              {calculateString}
            </span>
            <TextField
              placeholder={rightFocus ? "" : "0"}
              InputProps={
                rightFocus
                  ? { inputMode: "numeric", classes: { input: classes.left } }
                  : { classes: { input: classes.right } }
              }
              variant="outlined"
              value={right}
              onChange={rightHandler}
              onFocus={handleRightFocus}
              onBlur={handleRightBlur}
              error={rightErrorFlag}
              helperText={rightErrorWord}
            />
          </div>
          <div style={{ textAlign: "right", paddingRight: 12 }}>
            <span
              style={{
                fontSize: 40,
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              }}
            >
              {total}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CalculationOfTheFourPrinciples
