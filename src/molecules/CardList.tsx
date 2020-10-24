import React, { ReactElement } from "react"
import Grid from "@material-ui/core/Grid"

type CardListProps = {
  cards: { card: ReactElement<any, any> | null }[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <Grid container justify={"flex-start"} spacing={3}>
      {cards.map(obj => (
        <>{obj.card}</>
      ))}
    </Grid>
  )
}

export default CardList
