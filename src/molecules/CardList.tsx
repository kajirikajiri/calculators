import React, { ReactElement } from "react"
import Grid from "@material-ui/core/Grid"

type CardListProps = {
  cards: { card: ReactElement<any, any> | null; id: number }[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <Grid container justify={"flex-start"} spacing={3}>
      {cards.map(obj => (
        <Grid item key={obj.id}>
          {obj.card}
        </Grid>
      ))}
    </Grid>
  )
}

export default CardList
