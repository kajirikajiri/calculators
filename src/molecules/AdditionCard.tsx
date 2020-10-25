import React from "react"
import { MyCard } from "./MyCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Add from "@material-ui/icons/Add"

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

type AdditionCardProps = {
  colorCode: string;
}

const AdditionCard: React.FC<AdditionCardProps> = ({ colorCode }) => {
  const classes = useStyles()
  return (
    <MyCard
      title={"たしざん"}
      description={"２つの数のたしざんをします。"}
      link={"/addition/"}
    >
      <Grid item className={classes.media}>
        <Add style={{ width: 100, height: 100, color: colorCode }} />
      </Grid>
    </MyCard>
  )
}

export default AdditionCard
