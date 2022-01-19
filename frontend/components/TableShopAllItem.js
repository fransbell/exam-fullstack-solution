import { Table } from "@mantine/core"
import React, { useState, useEffect } from "react"

const TableShopAllItem = ({ id }) => {
  const [data, setdata] = useState(null)
  const [body, setBody] = useState(null)

  useEffect(() => {
    fetch(`/api/items/shop/${id}`).then((response) => {
      response.json().then((res) => {
        setdata(res)
      })
    })
  }, [])

  useEffect(() => {
    if (data) {
      const rows = data.map((item, idx) => {
        return (
          <tr key={item._id}>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.tag}</td>
          </tr>
        )
      })
      setBody(rows)
    }
  }, [data])

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อร้านค้า</th>
            <th>คำอธิบาย</th>
            <th>ราคา</th>
            <th>หน่วยสินค้า</th>
          </tr>
        </thead>
        <tbody>
          {body ? (
            body
          ) : (
            <tr>
              <td>loading</td>
              <td>loading</td>
              <td>loading</td>
              <td>loading</td>
              <td>loading</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default TableShopAllItem
