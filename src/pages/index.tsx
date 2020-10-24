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
    return { card: obj.card({ colorCode: iconColors[n] }), tags: obj.tags }
  })

  const [render, setRender] = useState(cards)

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (e.target.value === "") {
        setRender(cards)
      } else {
        const result = cards.filter(obj => {
          return obj.tags.some(tag => {
            return tag.indexOf(e.target.value) > -1
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
      <TextField
        placeholder={"けんさく"}
        variant="outlined"
        onChange={handler}
      />
      <CardList cards={render} />
    </Layout>
  )
}

export default IndexPage
