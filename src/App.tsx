import React from "react"
import { HashRouter as Router } from "react-router-dom"
import { HookStore } from "./store/HookStore"
import PageView from "./layout/PageView"
import { renderRoutes } from "react-router-config"
import routes from "./router"

const App = (props: any) => {
  return (
    <HookStore>
      <Router>
        {/*<PageView/>*/}
        {renderRoutes(routes)}
      </Router>
    </HookStore>
  )
}

export default App
