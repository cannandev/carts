import React from 'react'
import PageInfo from "./components/Header/PageInfo"
import { Section } from './components/Section/Section'
import data from "./data/basic.json"

import './App.css'

const App = _ => {
  return (
    <div className="App">
      <div className="ds-l-col--9 content">
        <div className="main">
          <PageInfo />
          <div className="print-only">
          </div>
          <Section {...data[0][0]}/>
        </div>
      </div>
    </div>
  )
}

export default App
