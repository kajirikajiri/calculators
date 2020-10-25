import React, { useCallback, useState } from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import CardList from "../molecules/CardList"
import TextField from "@material-ui/core/TextField"
import { iconColors } from "../scripts/iconColors"
import { tagsAndCard } from "../scripts/tagsAndCard"

const IndexPage: React.FC = () => {
  const cards = tagsAndCard.map((obj, i) => {
    const n = (i + 1) % 17
    return {
      card: obj.card({ colorCode: iconColors[n] }),
      tags: obj.tags,
      id: obj.id,
    }
  })

  const [render, setRender] = useState(cards)

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (e.target.value === "") {
        setRender(cards)
      } else {
        const result = cards.filter(obj => {
          return obj.tags.some(tag => {
            return tag.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
          })
        })
        setRender(result)
      }
    },
    []
  )

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <TextField
          placeholder={"けんさく"}
          variant="outlined"
          onChange={handler}
        />
        <div style={{ marginLeft: 10 }}>
          <span style={{ fontSize: 25 }}>{render.length}</span>件見つかりました
        </div>
      </div>
      <CardList cards={render} />
    </Layout>
  )
}

export default IndexPage
