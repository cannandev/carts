import React from 'react'
import PageInfo from "./components/Header/PageInfo"
import { Section } from './components/Section/Section'
import data from "./data/section3.json"

import './App.css'

const App = _ => {
  return (
    <div className="App">
      <div className="ds-l-col--9 content">
        <div className="main">
          <PageInfo />
          <div className="print-only">
          </div>
          <Section {...data.section} />
        </div>
      </div>
    </div>
  )
}

export default App
