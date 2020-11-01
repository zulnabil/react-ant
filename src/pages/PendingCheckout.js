import React, { useState } from 'react';
import { Row, Col, Table, Button} from "antd"
import {
  EditOutlined
} from "@ant-design/icons"


function PendingCheckout() {

  const columns = [
    {
      title: 'Courier',
      dataIndex: 'courier',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'From',
      dataIndex: 'from',
    },
    {
      title: 'To',
      dataIndex: 'to',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  const data = [
    {
      key: '1',
      courier: 'Courier 1',
      description: 'Sameday Delivery',
      from: 'Joseph, 100 Bukit Timah Road 01-23...',
      to: 'Jane Shepard, 1 Fuilerton rd #02-02',
      rate: 'x 3',
      action: <Button icon={<EditOutlined />} />
    },
    {
      key: '2',
      courier: 'Courier 2',
      description: 'Sameday Delivery',
      from: 'Joseph, 100 Bukit Timah Road 01-23...',
      to: 'Jane Shepard, 1 Fuilerton rd #02-02',
      rate: 'x 3',
      action: <Button icon={<EditOutlined />} />
    },
    {
      key: '3',
      courier: 'Courier 3',
      description: 'Sameday Delivery',
      from: 'Joseph, 100 Bukit Timah Road 01-23...',
      to: 'Jane Shepard, 1 Fuilerton rd #02-02',
      rate: 'x 3',
      action: <Button icon={<EditOutlined />} />
    },
    {
      key: '4',
      courier: 'Courier 4',
      description: 'Sameday Delivery',
      from: 'Joseph, 100 Bukit Timah Road 01-23...',
      to: 'Jane Shepard, 1 Fuilerton rd #02-02',
      rate: 'x 3',
      action: <Button icon={<EditOutlined />} />
    },
    {
      key: '5',
      courier: 'Courier 5',
      description: 'Sameday Delivery',
      from: 'Joseph, 100 Bukit Timah Road 01-23...',
      to: 'Jane Shepard, 1 Fuilerton rd #02-02',
      rate: 'x 3',
      action: <Button icon={<EditOutlined />} />
    },
    {
      key: '6',
      courier: 'Courier 6',
      description: 'Sameday Delivery',
      from: 'Joseph, 100 Bukit Timah Road 01-23...',
      to: 'Jane Shepard, 1 Fuilerton rd #02-02',
      rate: 'x 3',
      action: <Button icon={<EditOutlined />} />
    },
   
  ]; // rowSelection object indicates the need for row selection
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const [selectionType, setSelectionType] = useState('checkbox');

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

      <Row >
        
        <Col span={2} offset={6} > 
          
          <Button 
            type="primary"
            style={{ marginTop: 18 }}
            > 
            Add Shipment
          </Button>
        </Col>
        <Col span={2}> 
          <Button 
            danger
            style={{ marginTop: 18 }}
            > 
            Remove Shipment
          </Button>
        </Col>
        <Col span={3} offset={6}>
          
          <Button 
            type="primary"
            style={{ marginTop: 10, backgroundColor: 'green'}}
            > 
            Pay For Service
          </Button>
        </Col>

      </Row>
    
    </section>

    

  )
}

export default PendingCheckout
