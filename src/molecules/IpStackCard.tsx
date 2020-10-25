import React from "react"
import { MyCard } from "./MyCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  media: {
    height: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    color: "primary",
  },
})

type IpStackCardProps = {
  colorCode: string;
}

const IpStackCard: React.FC<IpStackCardProps> = ({ colorCode }) => {
  const classes = useStyles()
  return (
    <MyCard
      title={"住所"}
      description={"ipアドレスからおおよその住所を取得します。"}
      link={"/ipStack/"}
    >
      <Grid item className={classes.media}>
        <span style={{ fontSize: 80, color: colorCode }}>🗾</span>
      </Grid>
    </MyCard>
  )
}

export default IpStackCard
