import React from "react"
import { MyCard } from "../molecules/myCard"
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

const AdditionCard: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid item>
      <MyCard
        title={"たしざん"}
        description={"２つの数のたしざんをします。"}
        link={"/addition/"}
      >
        <Grid item className={classes.media}>
          <Add style={{ width: 100, height: 100, color: "#1976D2" }} />
        </Grid>
      </MyCard>
    </Grid>
  )
}

export default AdditionCard
