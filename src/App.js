import React from 'react'
import data from "./data/basic.json"
import Text from "./components/Text/Text"
import './App.css'

const FormElem = props => {
  if (props.type === "textfield") {
    return <Text {...props}/>
  }
  return props.type
}

const App = _ => {
  return (
    <div className="App">
      <h1>Section 2B</h1>
      <ol>
      {
        data.map(item => (
          <li>
              <FormElem 
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
