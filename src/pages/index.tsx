import React, { useCallback, useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import CardList from "../molecules/CardList"
import TextField from "@material-ui/core/TextField"

const IndexPage: React.FC = () => {
  const [searchWord, setSearchWord] = useState("")

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSearchWord(_ => e.target.value)
    },
    []
  )

  return (
    <Layout>
      <SEO title="Home" />
      <CardList searchWord={searchWord} />
      {/* <TextField
              placeholder={'けんさく'}
              variant="outlined"
              value={searchWord}
              onChange={handler}
            /> */}
    </Layout>
  )
}

export default IndexPage
