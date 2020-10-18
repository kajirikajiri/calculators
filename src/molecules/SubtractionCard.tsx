import React from "react"
import { MyCard } from "./MyCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Remove from "@material-ui/icons/Remove"

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

const SubtractionCard: React.FC = () => {
  const classes = useStyles()
  return (
        <Grid item>
          <MyCard
            title={"ひきざん"}
            description={"２つの数のひきざんをします。"}
            link={"/subtraction/"}
          >
            <Grid item className={classes.media}>
              <Remove style={{ width: 100, height: 100, color: "#00796B" }} />
            </Grid>
          </MyCard>
        </Grid>
  )
}

export default SubtractionCard
