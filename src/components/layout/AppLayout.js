import { useState } from "react"
import { Link } from "react-router-dom"
import { Layout, Menu } from "antd"
import { MenuOutlined } from "@ant-design/icons"

import classes from "./AppLayout.module.css"
import { menus } from "constants/sider"

const { Header, Sider, Content } = Layout

const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const getCurrentPageName = () => {
    return menus.find((menu) => menu.path === props.location.pathname).name
  }

  return (
    <Layout>
      <Sider
        className={classes.sider}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className={classes.logo} />
        <Menu mode="inline" defaultSelectedKeys={[props.location.pathname]}>
          {menus.map((menu) => (
            <Menu.Item key={menu.path} icon={menu.icon}>
              <Link to={menu.path}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className={classes["site-layout"]}>
        <Header
          className="content-blue"
          justify="center"
          style={{ padding: 0 }}
        >
          <MenuOutlined className={classes.trigger} onClick={toggle} />
          <span className={classes["header-title"]}>
            {getCurrentPageName()}
          </span>
        </Header>
        <Content
          className={classes["site-layout-background"]}
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100vh",
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
