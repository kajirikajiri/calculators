import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { MyCard } from "../components/myCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Add from "@material-ui/icons/Add"
import Remove from "@material-ui/icons/Remove"
import Clear from "@material-ui/icons/Clear"

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
      <Grid container justify={"flex-start"} spacing={3}>
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
        <Grid item>
          <MyCard
            title={"かけざん"}
            description={"２つの数のかけざんをします。"}
            link={"/multiplication/"}
          >
            <Grid item className={classes.media}>
              <Clear style={{ width: 100, height: 100, color: "#F57C00" }} />
            </Grid>
          </MyCard>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
