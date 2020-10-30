import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

const style = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}

function CircleFullscreen() {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} />
  return (
    <div style={style.container}>
      <Spin indicator={antIcon} />
    </div>
  )
}

export default CircleFullscreen
