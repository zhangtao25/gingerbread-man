import React from "react"
import { HashRouter as Router } from "react-router-dom"
import { HookStore } from "./store/HookStore"
import PageView from "./layout/PageView"
import { store } from "./store/store"
import { Provider } from "mobx-react"
import Demo from "./views/Demo"

const App = (props: any) => {
  return (
    <Provider store={store}>
      <Demo />
    </Provider>
  )
}

export default App
