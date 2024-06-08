import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, Input} from "antd";
import {GcPool} from "./gcpool/page";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <GcPool />
      <Button />
    </>
  )
}

export default App
