import React, {useContext} from 'react'
import {MyContext} from "../../store/HookStore";

const Ch = () => {
  const store: any = useContext(MyContext);
  return (
    <div>
      <button onClick={() => store.handleCount()}>Counter Add</button>
    </div>)
}

export default Ch
