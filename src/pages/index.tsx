import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { MyCard } from "../components/myCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Add from "@material-ui/icons/Add"

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

const IndexPage: React.FC = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <MyCard title={"たしざん"} description={"２つの数のたしざんをします。"}>
        <Grid item className={classes.media}>
          <Add style={{ width: 100, height: 100, color: "#1976D2" }} />
        </Grid>
      </MyCard>
    </Layout>
  )
}

export default IndexPage
