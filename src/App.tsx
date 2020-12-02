import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {HookStore} from "./store/HookStore";
import routes from "./router";
import {renderRoutes} from "react-router-config";

const App = (props:any) => {

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
