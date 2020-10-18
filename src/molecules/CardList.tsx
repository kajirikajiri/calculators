import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import AdditionCard from "./AdditionCard"
import SubtractionCard from "./SubtractionCard"
import MultiplicationCard from "./MultiplicationCard"
import IpAddressCard from "./IpAddressCard"
import { iconColors } from "../scripts/iconColors"

type CardListProps = {
  searchWord: string;
}

const CardList: React.FC<CardListProps> = ({ searchWord }) => {
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
  ]

  const tmp = cards.map((obj, i) => {
    const n = (i + 1) % 17
    return { card: obj.card({ colorCode: iconColors[n] }), tags: obj.tags }
  })

  const [render, setRender] = useState(tmp)

  useEffect(() => {
    if (searchWord === "") {
      setRender(tmp)
    } else {
      const result = render.filter(obj => {
        return obj.tags.includes(searchWord)
      })
      setRender(result)
    }
  }, [searchWord])

  return (
    <Grid container justify={"flex-start"} spacing={3}>
      {render.map(obj => (
        <>{obj.card}</>
      ))}
    </Grid>
  )
}

export default CardList
