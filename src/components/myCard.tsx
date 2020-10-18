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
  link: string
  children: JSX.Element | JSX.Element[]
}

const useStyles = makeStyles({
  root: { width: 290 },
})

export const MyCard: React.FC<MyCardProps> = ({
  title,
  description,
  link,
  children,
}) => {
  const classes = useStyles()

  return (
    <Link to={link} style={{ textDecoration: "none" }}>
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
