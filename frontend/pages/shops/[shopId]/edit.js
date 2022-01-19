import React, { useEffect, useState, useRef } from "react"
import {
  AppShell,
  Button,
  createStyles,
  InputWrapper,
  JsonInput,
  Modal,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
  root: {},
  header: {
    padding: "1rem 2rem 0 2rem",
    fontWeight: "200",
    [`a`]: {
      textDecoration: "none",
      color: "black",
    },
    [`span`]: {
      textDecoration: "underline",
    },
  },
  form: {
    margin: "2rem 20%",
    [`div>div`]: {
      marginTop: "0.5rem",
    },
    [`div>div:last-child`]: {
      marginTop: "1.25rem",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  submit: {
    justifyContent: "center",
    [`button:first-of-type`]: {
      marginRight: "1rem",
    },
  },
  confirm: {
    [`>div`]: {
      marginTop: "1rem",
    },
  },
}))

const edit = () => {
  const { cx, classes } = useStyles()

  const router = useRouter()
  const { shopId } = router.query

  const [data, setData] = useState(null)

  const ref = useRef(null)

  const [modal, setModal] = useState(false)

  useEffect(() => {
    fetch(`/api/shops/${shopId}`).then((result) => {
      result.json().then((res) => {
        setData(res)
      })
    })
  }, [router.isReady])

  useEffect(() => {
    if (data) {
      ref.current[0].value = data.name || ""
      ref.current[1].value = data.description || ""
      ref.current[2].value = data.address || ""
      ref.current[3].value = data.tel || ""
    }
  }, [data])

  const onSubmit = () => {
    const form = ref.current
    fetch(`/api/shops/update/${data._id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: ref.current[0].value,
        description: ref.current[1].value,
        address: ref.current[2].value,
        tel: ref.current[3].value,
      }),
    }).then((result) => {
      result.json().then((res) => {
        router.push(data ? `/shops/${data._id}` : "/")
      })
    })
  }

  return (
    <>
      <Head>
        <title>Shops POS | แก้ไข</title>
      </Head>
      <AppShell>
        <Title>
          <div className={classes.header}>
            <div className={classes.title}>
              <Link href="/">
                <a>ร้านค้า</a>
              </Link>{" "}
              /{" "}
              <Link href={data ? `/shops/${data._id}` : "/"}>
                <a>{data ? data.name : ""}</a>
              </Link>{" "}
              / <span>แก้ไข</span>
            </div>
          </div>
        </Title>
        <form ref={ref} className={classes.form}>
          <InputWrapper>
            <TextInput label="ชื่อร้านค้า" id="name" />
            <Textarea label="รายละเอียดร้านค้า" id="description" />
            <Textarea label="ที่อยู่" id="address" />
            <TextInput label="เบอร์โทร" id="tel" />
            <div className={cx(classes.flex, classes.submit)}>
              <Button onClick={() => setModal(true)} color="green">
                ยืนยัน
              </Button>
              <Link href={data ? `/shops/${data._id}` : "/"}>
                <Button color="red">ยกเลิก</Button>
              </Link>{" "}
            </div>
          </InputWrapper>
        </form>
        <Modal
          opened={modal}
          onClose={() => setModal(false)}
          hideCloseButton
          centered
        >
          <div className={classes.confirm}>
            <Text align="center">แก้ไขร้านค้า</Text>
            <div className={classes.flex}>
              <Button
                onClick={() => {
                  onSubmit()
                }}
                color="green"
              >
                ตกลง
              </Button>
              <Button onClick={() => setModal(false)}>ยกเลิก</Button>
            </div>
          </div>
        </Modal>
      </AppShell>
    </>
  )
}

export default edit
