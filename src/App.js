import React from 'react'
import data from "./data/basic.json"
import './App.css'
import { FormElem } from "./components/FormElem"

const App = _ => {
  return (
    <div className="App">
      <h1>Section 2B</h1>
      <ol>
      {
        data.map(item => (
          <li>
              <FormElem 
                key = {item.uuid}
                type={item.type} 
                label={item.properties.label} 
                hint={item.properties.hint}
                numeric={item.properties.numeric}
                size={item.properties.size}
                multiline={item.properties.multiline}
              />
          </li>
        ))
      }
      </ol>
    </div>
  )
}

export default App
