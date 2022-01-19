import { useRouter } from "next/router"
import {
  AppShell,
  Title,
  createStyles,
  Button,
  Anchor,
  Modal,
  Text,
} from "@mantine/core"
import Head from "next/head"
import { useEffect, useState } from "react"
import Link from "next/link"
import ShopDetailed from "../../../components/ShopDetailed"
import ShopStatistic from "../../../components/ShopStatistic"
import ItemList from "../../../components/ItemList"
import FormCreateItem from "../../../components/FormCreateItem"
import EditItemModal from "../../../components/EditItemModal"
import TableShopAllItem from "../../../components/TableShopAllItem"

const useStyles = createStyles((theme) => ({
  root: {},
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem 0 2rem",
  },
  confirm: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    [`p`]: {
      margin: "0",
    },
    [`>div`]: {
      marginTop: "2rem",
      display: "flex",
      justifyContent: "center",
      [`button:first-of-type`]: {
        marginRight: "2rem",
      },
    },
  },
  table: {
    justifyContent: "flex-start",
    margin: "1rem 2.25rem",
    [`a`]: {
      margin: "1rem 2rem 0 0",
      fontSize: "14px",
      textDecoration: "none",
      color: "#333",
    },
  },
}))

const Post = () => {
  const { cx, classes } = useStyles()

  const router = useRouter()
  const { shopId } = router.query

  const [data, setData] = useState(null)
  const [items, setItems] = useState(null)

  const [modal, setModal] = useState(false)
  const [createModal, setcreateModal] = useState(false)
  const [editModal, seteditModal] = useState(false)

  const [allItem, setallItem] = useState(false)

  const [delTarget, setDelTarget] = useState(null)

  useEffect(() => {
    fetch(`/api/shops/${shopId}`).then((result) => {
      result.json().then((res) => {
        setData(res)
      })
    })
    fetch(`/api/items/shop/${shopId}`).then((result) => {
      result.json().then((res) => {
        setItems(res)
      })
    })
  }, [router.isReady])

  useEffect(() => {
    fetch(`/api/items/shop/${shopId}`).then((result) => {
      result.json().then((res) => {
        setItems(res)
      })
    })
  }, [modal, createModal, editModal])

  const confirmModal = (id) => {
    setModal(true)
    setDelTarget(id)
  }

  const editProxy = (id) => {
    seteditModal(true)
    setDelTarget(id)
  }

  const delItems = () => {
    fetch(`/api/items/delete/${delTarget}`, { method: "DELETE" }).then(
      (response) => {
        response.json().then((res) => {
          setModal(false)
        })
      }
    )
  }

  return (
    <>
      <Head>
        <title>Shops POS | ร้านค้า</title>
      </Head>
      <AppShell>
        <div className={classes.header}>
          <Title sx={{ fontWeight: "200" }}>
            <Link href="/">
              <a style={{ textDecoration: "none", color: "black" }}>ร้านค้า</a>
            </Link>{" "}
            /{" "}
            <span style={{ textDecoration: "underline" }}>
              {data ? data.name : ""}
            </span>
          </Title>
          <Button
            onClick={() => setcreateModal(true)}
            styles={{
              label: {
                fontWeight: "500",
                color: "#fff",
              },
            }}
          >
            + เพิ่มสินค้า
          </Button>
        </div>
        <div className={classes.table}>
          <Anchor onClick={() => setallItem(true)}>สินค้าในร้านค้า</Anchor>
        </div>
        <ShopDetailed
          _id={data ? data._id : ""}
          name={data ? data.name : "Loading ..."}
          description={data ? data.description : "Loading ..."}
          address={data ? data.address : "Loading ..."}
          tel={data ? data.tel : "Loading ..."}
        />
        <ShopStatistic count={items ? items.length : "Loading"} />
        <ItemList
          data={items ? items : ""}
          del={confirmModal}
          edit={editProxy}
        />
        <Modal
          opened={modal}
          onClose={() => setModal(false)}
          hideCloseButton
          centered
        >
          <div className={classes.confirm}>
            <Text component={"p"} align="center">
              ต้องการลบสินค้า
            </Text>
            <div>
              <Button onClick={() => delItems()}>ตกลง</Button>
              <Button color="red" onClick={() => setModal(false)}>
                ยกเลิก
              </Button>
            </div>
          </div>
        </Modal>
        <Modal
          opened={createModal}
          onClose={() => {
            setcreateModal(false)
          }}
        >
          <FormCreateItem
            shopId={data ? data._id : ""}
            modal={setcreateModal}
          />
        </Modal>
        <Modal
          opened={editModal}
          onClose={() => {
            seteditModal(false)
          }}
          hideCloseButton
        >
          <EditItemModal modal={seteditModal} id={delTarget} />
        </Modal>
        <Modal
          opened={allItem}
          onClose={() => {
            setallItem(false)
          }}
          hideCloseButton
          size="100%"
          overflow="inside"
        >
          <TableShopAllItem id={data ? data._id : ""} />
        </Modal>
      </AppShell>
    </>
  )
}

export default Post
