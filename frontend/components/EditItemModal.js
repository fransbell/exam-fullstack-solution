import {
  Button,
  InputWrapper,
  Select,
  Textarea,
  TextInput,
  createStyles,
} from "@mantine/core"
import React, { useEffect, useState, useRef } from "react"

const useStyles = createStyles((theme) => ({
  confirm: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [`button:first-of-type`]: {
      marginRight: "1rem",
    },
  },
}))

const EditItemModal = ({ id, modal }) => {
  const { cx, classes } = useStyles()
  const [data, setData] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    fetch(`/api/items/${id}`).then((result) =>
      result.json().then((res) => {
        setData(res)
      })
    )
  }, [])

  useEffect(() => {
    if (data) {
      ref.current[0].value = data.name || ""
      ref.current[1].value = data.category || ""
      ref.current[2].value = data.description || ""
      ref.current[3].value = data.price || ""
      ref.current[4].value = data.tag || ""
    }
  }, [data])

  const editItem = () => {
    const form = ref.current
    fetch(`/api/items/update/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form[0].value,
        category: form[1].value,
        description: form[2].value,
        price: form[3].value,
        tag: form[4].value,
      }),
    }).then((result) => result.json().then((res) => modal(false)))
  }

  return (
    <div>
      <form ref={ref}>
        <InputWrapper>
          <TextInput label="ชื่อสินค้า" id="name" />
          <Select
            label="ประเภทสินค้า"
            searchable
            data={[
              { value: "ขนมขบเคี้ยว", label: "ขนมขบเคี้ยว" },
              { value: "นม", label: "นม" },
              {
                value: "เครื่องดื่มอัดลมและน้ำหวาน",
                label: "เครื่องดื่มอัดลมและน้ำหวาน",
              },
              { value: "อื่นๆ", label: "อื่นๆ" },
            ]}
          />
          <Textarea label="รายละเอียดสินค้า" id="description" />
          <TextInput label="ราคา" id="price" />
          <TextInput label="หน่วยสินค้า" id="tag" />
        </InputWrapper>
        <div className={classes.confirm}>
          <Button
            onClick={() => {
              editItem()
            }}
            color="green"
          >
            แก้ไขสินค้า
          </Button>
          <Button
            onClick={() => {
              modal(false)
            }}
          >
            ยกเลิก
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditItemModal
