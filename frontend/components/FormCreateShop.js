import {
  Text,
  createStyles,
  Title,
  Divider,
  InputWrapper,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core"
import React, { useRef } from "react"

const useStyles = createStyles((theme) => ({
  root: {},
  form: {
    height: "390px",
    padding: "0.5rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}))
const FormCreateShop = ({ toggle }) => {
  const { cx, classes } = useStyles()
  const form = useRef(null)

  const submit = () => {
    const data = form.current
    fetch("/api/shops/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data[0].value,
        description: data[1].value,
        tel: data[3].value,
        address: data[2].value,
      }),
    }).then((result) => {
      result.json().then((_) => {
        toggle()
      })
    })
  }

  return (
    <div className={classes.root}>
      <Title sx={{ fontWeight: "200" }}>เพิ่มร้านค้า</Title>
      <Text sx={{ fontSize: "12px", color: "#333333" }}>
        เพิ่มร้านค้าใหม่เช้าระบบ.
      </Text>
      <Divider sx={{ margin: "0.5rem 0" }} />
      <form ref={form} className={classes.form}>
        <InputWrapper>
          <TextInput label="ชื่อร้านค้า" id="name" />
          <Textarea label="รายละเอียดร้านค้า" id="description" />
          <Textarea label="ที่อยู่" id="address" />
          <TextInput label="เบอร์โทร" id="tel" />
        </InputWrapper>
        <Button
          onClick={() => {
            submit()
          }}
        >
          เพิ่มร้านค้า
        </Button>
      </form>
    </div>
  )
}

export default FormCreateShop
