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

const IpAddressCard: React.FC = () => {
  const classes = useStyles()
  return (
        <Grid item>
          <MyCard
            title={"IPアドレス"}
            description={"IPアドレスを取得します。"}
            link={"/ipAddress/"}
          >
            <Grid item className={classes.media}>
              <span style={{ fontSize: 80, color: "#C2185B" }}>IP</span>
            </Grid>
          </MyCard>
        </Grid>
  )
}

export default IpAddressCard
