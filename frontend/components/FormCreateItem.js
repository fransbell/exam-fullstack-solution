import {
  Button,
  InputWrapper,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core"
import React, { useRef } from "react"

const FormCreateItem = ({ shopId, modal }) => {
  const form = useRef(null)

  const createItem = () => {
    const data = form.current
    fetch("/api/items/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data[0].value,
        category: data[1].value,
        description: data[2].value,
        price: data[3].value,
        tag: data[4].value,
        shopId,
      }),
    }).then((result) => {
      result.json().then((res) => modal(false))
    })
  }

  return (
    <div>
      <form ref={form}>
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
        <Button
          onClick={() => createItem()}
          sx={{ width: "100%", marginTop: "1rem" }}
        >
          เพิ่มสินค้า
        </Button>
      </form>
    </div>
  )
}

export default FormCreateItem
