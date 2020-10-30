import { Row, Col, Card, Typography, Button, Form, Input } from "antd"

import classes from "./Dashboard.module.css"

import { analytics } from "constants/dashboard"

function Dashboard() {
  const [form] = Form.useForm()
  return (
    <>
      {/* Analytic section */}
      <section className="app-section">
        <Row gutter={[32, 32]} justify="center">
          {analytics.map((analytic) => (
            <Col key={analytic.name} xl={4} lg={6} md={8} xs={12}>
              <p className="typo-grey">{analytic.name}</p>
              <Card className={classes["card-analytic"]}>
                <Row justify="center" align="middle">
                  <Typography.Title level={1} style={{ margin: 0 }}>
                    {analytic.value}
                  </Typography.Title>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Create shipment section */}
      <section className="app-section">
        <Row gutter={[8, 8]} justify="center">
          <Col span={24} className="typo-grey typo-center">
            <span>What do you want to ship?</span>
          </Col>
          <Col flex="0 0 150px" className="typo-center">
            <Button type="primary">Single shipment</Button>
          </Col>
          <Col flex="0 0 150px" className="typo-center">
            <Button type="primary">Bulk shipment</Button>
          </Col>
        </Row>
      </section>

      {/* Get quotes section */}
      <section className="app-section">
        <Row justify="center">
          <Col span={24} className="typo-grey typo-center">
            <span>Get instant quotes</span>
          </Col>
          <Col xl={16} lg={24} md={24} xs={24}>
            <Card className={classes["card-analytic"]}>
              <Form form={form} layout="vertical">
                <Form.Item
                  label="From"
                  required
                  tooltip="From where the package will be sent"
                  style={{ marginBottom: 18 }}
                >
                  <Input.Group compact>
                    <Form.Item
                      name={["country", "postal-code"]}
                      rules={[
                        { required: true, message: "Country is required" },
                      ]}
                      style={{ width: "70%" }}
                    >
                      <Input placeholder="Country" />
                    </Form.Item>
                    <Form.Item
                      name={["country", "postal-code"]}
                      rules={[
                        { required: true, message: "Postal code is required" },
                      ]}
                      style={{ width: "30%" }}
                    >
                      <Input placeholder="Postal code" />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>

                <Form.Item
                  label="To"
                  required
                  tooltip="Where will the package be sent"
                  style={{ marginBottom: 18 }}
                >
                  <Input.Group compact>
                    <Form.Item
                      name={["country", "postal-code"]}
                      rules={[
                        { required: true, message: "Country is required" },
                      ]}
                      style={{ width: "70%" }}
                    >
                      <Input placeholder="Country" />
                    </Form.Item>
                    <Form.Item
                      name={["country", "postal-code"]}
                      rules={[
                        { required: true, message: "Postal code is required" },
                      ]}
                      style={{ width: "30%" }}
                    >
                      <Input placeholder="Postal code" />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>

                <Form.Item
                  label="Parcel details"
                  required
                  tooltip="What is the weight of the package in kilogram"
                  style={{ marginBottom: 18 }}
                >
                  <Input placeholder="Weight (in kg)" />
                </Form.Item>

                <Row justify="center">
                  <Form.Item>
                    <Button type="primary">Submit</Button>
                  </Form.Item>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Dashboard