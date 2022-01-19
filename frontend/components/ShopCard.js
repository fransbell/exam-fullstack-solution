import { createStyles, Divider, Skeleton, Text, Button } from "@mantine/core"
import React from "react"
import Link from "next/link"

const useStyles = createStyles((theme) => ({
  root: {
    minWidth: "350px",
    maxWidth: "500px",
    width: "48%",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "90%",
    },
    boxShadow: theme.shadows.sm,
    border: "1px solid #e8e8e8",
    borderRadius: theme.radius.sm,
  },
  profile: {
    marginTop: "0.5rem",
    [`div`]: {
      margin: "0 1em",
    },
    [`p`]: {
      margin: "0",
      textAlign: "center",
    },
  },
  body: {
    padding: "0 0 0.25rem 0",
    justifyContent: "space-around",
    alignItems: "start",
    [`section`]: {
      width: "40%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      overflow: "auto",
    },
  },
  footer: {
    margin: "1rem",
    alignItems: "center",
    justifyContent: "flex-end",
    [`button:first-of-type`]: {
      marginRight: "0.5rem",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
}))

const ShopCard = ({ data, rmShop }) => {
  const { cx, classes } = useStyles()
  const { name, description, tel, address, _id } = data

  return (
    <div className={classes.root}>
      <div className={cx(classes.flex, classes.profile)}>
        <Skeleton
          animate={false}
          height={60}
          circle
          sx={{ position: "relative" }}
        />
        <p>{name}</p>
      </div>
      <Divider sx={{ margin: "8px" }} />
      <Link href={`/shops/${_id}`}>
        <a style={{ textDecoration: "none" }}>
          <div className={cx(classes.flex, classes.body)}>
            <Skeleton
              animate={false}
              height={132}
              mt={6}
              width="45%"
              radius="md"
            />
            <section>
              <Text size="sm">{description}</Text>
              <Divider sx={{ margin: "4px 0" }} />
              <Text size="xs">{address}</Text>
              <Text size="xs">
                โทร.{" "}
                {`${tel.substring(0, 3)}-${tel.substring(3, 6)}-${tel.substring(
                  6,
                  10
                )}`}
              </Text>
            </section>
          </div>
        </a>
      </Link>
      <Divider sx={{ margin: "8px" }} />
      <div className={cx(classes.flex, classes.footer)}>
        <Link href={`/shops/${_id}/edit`}>
          <Button color="green">แก้ไข</Button>
        </Link>

        <Button
          color="red"
          onClick={() => {
            rmShop(_id)
          }}
        >
          ลบ
        </Button>
      </div>
    </div>
  )
}

export default ShopCard
