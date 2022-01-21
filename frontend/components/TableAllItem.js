import { Table } from "@mantine/core"
import React, { useState, useEffect } from "react"

const TableAllItem = () => {
  const [data, setdata] = useState(null)
  const [body, setBody] = useState(null)
  const [mapId, setmapId] = useState(null)

  useEffect(() => {
    fetch("/api/shops").then((response) => {
      response.json().then((res) => {
        const mapping = {}
        res.map((item) => {
          mapping[item._id] = item.name
        })
        setmapId(mapping)
      })
    })

    fetch("/api/items").then((response) => {
      response.json().then((res) => {
        setdata(res)
      })
    })
  }, [])

  useEffect(() => {
    if (data && mapId) {
      const rows = data.map((item, idx) => {
        return (
          <tr key={item._id}>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.tag}</td>
            <td>{mapId[`${item.shopId}`]}</td>
          </tr>
        )
      })
      setBody(rows)
    }
  }, [data, mapId])

  return (
    <div>
      <Table style={{ minWidth: "500px" }}>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อร้านค้า</th>
            <th>คำอธิบาย</th>
            <th>ราคา</th>
            <th>หน่วยสินค้า</th>
            <th>ร้านค้า</th>
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
              <td>loading</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default TableAllItem
