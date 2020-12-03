import React from "react"
import { HashRouter as Router } from "react-router-dom"
import { HookStore } from "./store/HookStore"
import PageView from "./layout/PageView"

const App = (props: any) => {
  return (
    <HookStore>
      <Router>
        <PageView />
      </Router>
    </HookStore>
  )
}

export default App
