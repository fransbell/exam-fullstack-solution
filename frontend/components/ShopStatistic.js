import React from "react"
import { Button, createStyles, Text, Title } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  root: {
    margin: "2rem 2rem",
    padding: "2rem",
    boxShadow: theme.shadows.md,
    border: "1px solid gray",
    borderRadius: theme.radius.md,
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const ShopStatistic = ({ count }) => {
  const { cx, classes } = useStyles()
  return (
    <div className={cx(classes.flex, classes.root)}>
      สินค้าในร้านค้า : {count}
    </div>
  )
}

export default ShopStatistic
