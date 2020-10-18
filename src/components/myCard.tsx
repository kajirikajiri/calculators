import React from "react"
import { Link } from "gatsby"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

type MyCardProps = {
  title: string
  description: string
  children: JSX.Element[]
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

export const MyCard: React.FC<MyCardProps> = ({
  title,
  description,
  children,
}) => {
  const classes = useStyles()

  return (
    <Link to="/addition/" style={{ textDecoration: "none" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <main>{children}</main>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
