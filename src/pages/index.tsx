import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { MyCard } from "../components/myCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MyCard />
  </Layout>
)

export default IndexPage
