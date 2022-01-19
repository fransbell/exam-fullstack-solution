import {
  Button,
  createStyles,
  Divider,
  Group,
  Skeleton,
  Text,
} from "@mantine/core"
import React from "react"

const useStyles = createStyles((theme) => ({
  root: {
    margin: "1rem 2rem",
  },
  card: {
    padding: "1.5rem 1rem 1rem 1rem",

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: "22%",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "48%",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "50%",
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: "100%",
    },
    border: "1px solid gray",
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
  },
  wrapper: { width: "100%", [`p`]: { wordBreak: "break-word" } },
  editor: { width: "100%", marginTop: "1rem" },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}))

const Item = ({ data, del, edit }) => {
  const { cx, classes } = useStyles()
  return (
    <div className={cx(classes.flexCol, classes.card)}>
      <div className={cx(classes.flexCol, classes.wrapper)}>
        <Skeleton animate={false} height={140} width={140} />
        <Divider />
        <Text sx={{ marginTop: "0.5rem" }}>{data.name}</Text>
        <Text size="xs" color="gray">
          {data.category}
        </Text>
        <Text component={"p"} size="sm" color="#333">
          {data.description}
        </Text>

        <Text size="sm">{`${data.price} บาท / ${data.tag}`}</Text>
      </div>
      <div className={cx(classes.flex, classes.editor)}>
        <Button
          onClick={() => {
            edit(data._id)
          }}
          size={"xs"}
          color="green"
        >
          แก้ไข
        </Button>
        <Button size={"xs"} color="red" onClick={() => del(data._id)}>
          ลบ
        </Button>
      </div>
    </div>
  )
}

const ItemList = ({ data, del, edit }) => {
  const { cx, classes } = useStyles()
  return (
    <div className={classes.root}>
      <Group position="center">
        {data
          ? data.map((item) => {
              return <Item data={item} key={item._id} del={del} edit={edit} />
            })
          : ""}
      </Group>
    </div>
  )
}

export default ItemList
