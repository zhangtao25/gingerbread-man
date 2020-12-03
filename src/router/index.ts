import { RouteConfig } from "react-router-config"
import Home from "../views/Home"
import Test from "../views/Test"
import TodoList from "../views/TodoList"

const routes: RouteConfig[] = [
  {
    path: "/TodoList",
    component: TodoList,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/Test",
    component: Test,
  },
]

export default routes
