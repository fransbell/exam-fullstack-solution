import { AppShell, Button, createStyles, Modal, Text } from "@mantine/core"
import React, { useState } from "react"
import Shop from "../components/Shop"

import Head from "next/head"
import FormCreateShop from "../components/FormCreateShop"
import TableAllShop from "../components/TableAllShop"
import TableAllItem from "../components/TableAllItem"

const useStyles = createStyles((theme) => ({
  root: {},
  confirm: {
    display: "flex",
    justifyContent: "space-around",
    padding: "0.5rem 0",
  },
}))

const index = () => {
  const { cx, classes } = useStyles()
  const [modalOpened, setmodalOpened] = useState(false)
  const [confirmOpened, setconfirmlOpened] = useState(false)

  const [allShop, setallShop] = useState(false)
  const [allItem, setallItem] = useState(false)

  const [delTarget, setdelTarget] = useState(null)

  const toggleCreateModal = () => {
    setmodalOpened(!modalOpened)
  }

  const rmShop = (id) => {
    setdelTarget(id)
    setconfirmlOpened(true)
  }

  const deleteShop = async () => {
    fetch(`/api/shops/delete/${delTarget}`, { method: "DELETE" }).then(
      (result) => {
        result.json().then((res) => {
          setconfirmlOpened(false)
        })
      }
    )
  }

  return (
    <>
      <Head>
        <title>Shops POS</title>
      </Head>
      <AppShell>
        <Shop
          toggle={toggleCreateModal}
          modal={modalOpened}
          confirm={confirmOpened}
          rmShop={rmShop}
          allShop={setallShop}
          allItem={setallItem}
        />
      </AppShell>
      <Modal
        opened={modalOpened}
        hideCloseButton
        onClose={() => setmodalOpened(false)}
        styles={{
          modal: {
            width: "50%",
            height: "500px",
            [`@media (max-width: 768px)`]: {
              width: "90%",
            },
          },
        }}
      >
        <FormCreateShop toggle={toggleCreateModal} />
      </Modal>
      <Modal
        opened={confirmOpened}
        onClose={() => setconfirmlOpened(false)}
        hideCloseButton
        centered
      >
        <Text align="center">ต้องการลบร้านค้า</Text>
        <div className={classes.confirm}>
          <Button onClick={() => deleteShop()} color="red">
            ตกลง
          </Button>
          <Button onClick={() => setconfirmlOpened(false)}>ยกเลิก</Button>
        </div>
      </Modal>
      <Modal
        opened={allShop}
        onClose={() => {
          setallShop(false)
        }}
        hideCloseButton
        size="100%"
        overflow="inside"
      >
        <TableAllShop />
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
        <TableAllItem />
      </Modal>
    </>
  )
}

export default index
