import React from "react"
import { MyCard } from "./MyCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Clear from "@material-ui/icons/Clear"

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

type MultiplicationCardProps = {
  colorCode: string;
}

const MultiplicationCard: React.FC<MultiplicationCardProps> = ({
  colorCode,
}) => {
  const classes = useStyles()
  return (
    <Grid item>
      <MyCard
        title={"かけざん"}
        description={"２つの数のかけざんをします。"}
        link={"/multiplication/"}
      >
        <Grid item className={classes.media}>
          <Clear style={{ width: 100, height: 100, color: colorCode }} />
        </Grid>
      </MyCard>
    </Grid>
  )
}

export default MultiplicationCard
