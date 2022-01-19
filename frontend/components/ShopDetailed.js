import { Button, createStyles, Text, Title } from "@mantine/core"
import React from "react"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
  root: {
    margin: "2rem 2rem 2rem 2rem",
    padding: "2rem",
    boxShadow: theme.shadows.md,
    border: "1px solid gray",
    borderRadius: theme.radius.md,
    position: "relative",
    letterSpacing: "1px",
    [`> div`]: {
      margin: "0.25rem 0",
    },
    [`button`]: {
      position: "absolute",
      bottom: "1em",
      right: "1em",
    },
    [`h1`]: {
      fontWeight: "200",
    },
  },
}))

const ShopDetailed = ({ _id, name, description, address, tel }) => {
  const { cx, classes } = useStyles()
  const router = useRouter()
  return (
    <div className={classes.root}>
      <Title>ร้าน{name}</Title>
      <Text>{description}</Text>
      <Text>ที่ตั้ง : {address}</Text>
      <Text>เบอร์โทร : {tel}</Text>
      <Button
        onClick={() => {
          router.push(`/shops/${_id}/edit`)
        }}
        color="green"
      >
        แก้ไข
      </Button>
    </div>
  )
}

export default ShopDetailed
