import React from "react"
import { MyCard } from "./MyCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  media: {
    height: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    color: "primary",
  },
})

type CssToReactStyleCardProps = {
  colorCode: string;
}

const CssToReactStyleCard: React.FC<CssToReactStyleCardProps> = ({
  colorCode,
}) => {
  const classes = useStyles()
  return (
    <MyCard
      title={"Css → React Style"}
      description={"FigmaのcssをReact Styleに変換します"}
      link={"/convertCssToReactStyle/"}
    >
      <Grid item className={classes.media}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 30,
              color: colorCode,
              lineHeight: "40px",
              fontWeight: "bold",
            }}
          >
            Figma css
          </div>
          <div
            style={{
              fontSize: 30,
              color: colorCode,
              lineHeight: "23px",
              fontWeight: "bold",
            }}
          >
            ⬇
          </div>
          <div
            style={{
              fontSize: 30,
              color: colorCode,
              lineHeight: "36px",
              fontWeight: "bold",
            }}
          >
            React Style
          </div>
        </div>
      </Grid>
    </MyCard>
  )
}

export default CssToReactStyleCard
