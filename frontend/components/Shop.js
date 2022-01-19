import { Anchor, Button, createStyles, Group, Title } from "@mantine/core"
import React, { useEffect, useState } from "react"

import ShopCard from "./ShopCard"

const useStyles = createStyles((theme) => ({
  body: {
    margin: "2rem 0.52rem",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    padding: "1rem 2rem 0 2rem",
    alignItems: "center",
  },
  table: {
    justifyContent: "flex-start",
    margin: "0 2rem",
    [`a`]: {
      margin: "1rem 2rem 0 0",
      fontSize: "14px",
      textDecoration: "none",
      color: "#333",
    },
  },
}))

const getData = async () => {
  const request = await fetch("/api/shops")
  const json = await request.json()
  return json
}

const useForceUpdate = () => {
  const [value, setValue] = useState(0)
  return () => setValue((value) => value + 1)
}

const Shop = ({ toggle, modal, confirm, rmShop, allShop, allItem }) => {
  const { cx, classes } = useStyles()
  const [shopList, setshopList] = useState([])

  useEffect(() => {
    getData().then((res) => {
      setshopList(res)
    })
  }, [modal, confirm])

  return (
    <>
      <div className={cx(classes.title, classes.flex)}>
        <Title sx={{ fontWeight: "200" }}>ร้านค้า </Title>
        <Button
          styles={{
            label: {
              fontWeight: "500",
              color: "#fff",
            },
          }}
          onClick={() => {
            toggle()
          }}
        >
          + เพิ่มร้านค้า
        </Button>
      </div>
      <div className={cx(classes.flex, classes.table)}>
        <Anchor onClick={() => allShop(true)}>ร้านค้าทั้งหมด</Anchor>
        <Anchor onClick={() => allItem(true)}>สินค้าทั้งหมด</Anchor>
      </div>

      <Group position="center" spacing="xs" className={classes.body}>
        {shopList.map((obj) => {
          return <ShopCard key={obj._id} data={obj} rmShop={rmShop} />
        })}
      </Group>
    </>
  )
}

export default Shop
