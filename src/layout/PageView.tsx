import React, { useContext } from "react"
import "./PageView.css"
import { renderRoutes } from "react-router-config"
import routes from "../router"
// import { Menu } from "antd";
import { createHashHistory } from "history"
import { Menu } from "antd"

// interface PageViewProps {}
const PageView: React.FC = () => {
  const history = createHashHistory()
  const handleClick = (val: any) => {
    console.log(val, "val")
    history.push(`/${val.key}`)
  }
  return (
    <div className="PageView">
      <Menu
        theme="dark"
        onClick={handleClick}
        mode="horizontal"
        defaultSelectedKeys={["TodoList"]}
      >
        <Menu.Item key="TodoList">Todo List</Menu.Item>
        <Menu.Item key="ActivityManager">nav 2</Menu.Item>
        <Menu.Item key="Test">nav 3</Menu.Item>
      </Menu>
      <div style={{ padding: "20px" }}>{renderRoutes(routes)}</div>
    </div>
  )
}

export default PageView
