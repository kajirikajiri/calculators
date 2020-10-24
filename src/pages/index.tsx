import React, { useCallback, useState } from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import CardList from "../molecules/CardList"
import TextField from "@material-ui/core/TextField"
import AdditionCard from "../molecules/AdditionCard"
import SubtractionCard from "../molecules/SubtractionCard"
import MultiplicationCard from "../molecules/MultiplicationCard"
import IpAddressCard from "../molecules/IpAddressCard"
import { iconColors } from "../scripts/iconColors"

const IndexPage: React.FC = () => {
  const cards = [
    {
      card: AdditionCard,
      tags: ["足し算", "たしざん", "たす"],
    },
    {
      card: SubtractionCard,
      tags: ["引き算", "ひきざん", "ひく"],
    },
    {
      card: MultiplicationCard,
      tags: ["掛け算", "かけざん", "かける"],
    },
    {
      card: IpAddressCard,
      tags: ["IP", "ip"],
    },
  ].map((obj, i) => {
    const n = (i + 1) % 17
    return { card: obj.card({ colorCode: iconColors[n] }), tags: obj.tags }
  })

  const [render, setRender] = useState(cards)

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      let set = cards
      const searchWord = e.target.value
      if (searchWord !== "") {
        set = cards.filter(obj => {
          return obj.tags.some(tag => {
            return tag.indexOf(searchWord) > -1
          })
        })
      }
      setRender(set)
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
