import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Timeline from './components/Timeline/Timeline'
import Widget from './components/Widget/Widget'

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <Timeline />
      <Widget />
    </div>
  )
}

export default App
