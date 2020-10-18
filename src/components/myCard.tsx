import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Add from "@material-ui/icons/Add"
import styled from "styled-components"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    color: "primary",
  },
})

export const MyCard: React.FC = () => {
  const classes = useStyles()

  return (
    <Link to="/addition/" style={{ textDecoration: "none" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <Grid item className={classes.media}>
            <Add style={{ width: 100, height: 100, color: "#1976D2" }} />
          </Grid>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              たしざん
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ２つの数のたしざんをします。
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
