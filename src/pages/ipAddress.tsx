import React, { useState, useEffect } from "react"
import axios from "axios"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import CircularProgress from "@material-ui/core/CircularProgress"

const IpAddress = () => {
  const [data, setData] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    axios
      .get("https://api.ipify.org/?format=json")
      .then(res => {
        setSuccess(true)
        setData(res.data.ip)
      })
      .catch(e => {
        setData("失敗しました。1分ほどお待ちいただきリロードお願いします。")
      })
  }, [])

  return (
    <Layout>
      <SEO title={"ip-address"} />
      {success ? <div>{data}</div> : <CircularProgress />}
    </Layout>
  )
}

export default IpAddress
