import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import Grid from "@material-ui/core/Grid"
import AdditionCard from "../molecules/AdditionCard"
import SubtractionCard from "../molecules/SubtractionCard"
import MultiplicationCard from "../molecules/MultiplicationCard"
import IpAddressCard from '../molecules/IpAddressCard'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container justify={"flex-start"} spacing={3}>
        <AdditionCard />
        <SubtractionCard/>
        <MultiplicationCard/>
        <IpAddressCard/>
      </Grid>
    </Layout>
  )
}

export default IndexPage
