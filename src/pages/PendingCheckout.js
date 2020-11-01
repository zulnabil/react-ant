import React, { useState } from "react"
import { Row, Col, Table, Button } from "antd"

import { columns, data } from "constants/table.pendingCheckout"

function PendingCheckout() {
  // rowSelection object indicates the need for row selection

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      )
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  }

  const [selectionType, setSelectionType] = useState("checkbox")

  return (
    <section className="app-section">
      <Row justify="center">
        <div>
          <Table
            pagination={false}
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            footer={() => (
              <Row>
                <Col offset={20}>
                  <h3>Total = x 18</h3>
                </Col>
              </Row>
            )}
          />
        </div>
      </Row>
            
      <Row gutter={[8, 8]} justify="center">

          <Col xl={3} lg={8} md={6} xs={6} offset={5}>
            <Button type="primary" style={{ marginTop: 18 }}>
              Add Shipment
            </Button>
          </Col>
          <Col xl={8} lg={8} md={6} xs={6}>
            <Button danger style={{ marginTop: 18 }}>
              Remove Shipment
            </Button>
          </Col>
          <Col xl={8} lg={8} md={6} xs={6}>
            <Button
              type="primary"
              style={{ marginTop: 18, backgroundColor: "green" }}
            >
              Pay For Service
            </Button>
          </Col>
        </Row>

      
    </section>
  )
}

export default PendingCheckout
