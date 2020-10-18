import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { MyCard } from "../molecules/myCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Remove from "@material-ui/icons/Remove"
import Clear from "@material-ui/icons/Clear"
import AdditionCard from "../components/additionCard"

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

const IndexPage: React.FC = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container justify={"flex-start"} spacing={3}>
        <AdditionCard />
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
        <Grid item>
          <MyCard
            title={"IPアドレス"}
            description={"IPアドレスを取得します。"}
            link={"/ipAddress/"}
          >
            <Grid item className={classes.media}>
              <span style={{ fontSize: 80, color: "#C2185B" }}>IP</span>
            </Grid>
          </MyCard>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
