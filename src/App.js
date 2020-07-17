import React from 'react'
import data from "./data/basic.json"
import './App.css'
import { FormElem } from "./components/FormElem"

const App = _ => {
  return (
    <div className="App">
      <h1>Section {data[0].id}</h1>
      <ol>
      {
        data[0].properties.children.map(item => (
          <li>
              <FormElem 
                key={item.uuid}
                type={item.type} 
                label={item.properties.label} 
                hint={item.properties.hint}
                numeric={item.properties.numeric}
                size={item.properties.size}
                multiline={item.properties.multiline}
                name={item.name}
                children={item.children}
              />
          </li>
        ))
      }
      </ol>
    </div>
  )
}

export default App
