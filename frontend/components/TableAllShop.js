import { Table } from "@mantine/core"
import React, { useState, useEffect } from "react"

const TableAllShop = () => {
  const [data, setdata] = useState(null)
  const [body, setBody] = useState(null)

  useEffect(() => {
    fetch("/api/shops").then((response) => {
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
            <td>{item.address}</td>
            <td>{`${item.tel.substring(0, 3)}-${item.tel.substring(
              3,
              6
            )}-${item.tel.substring(6, 10)}`}</td>
          </tr>
        )
      })
      setBody(rows)
    }
  }, [data])

  return (
    <div>
      <Table style={{ minWidth: "500px" }}>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อร้านค้า</th>
            <th>คำอธิบาย</th>
            <th>ที่อยู่</th>
            <th>เบอร์โทร</th>
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

export default TableAllShop
