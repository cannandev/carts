import React from 'react'
import Text from "./Text/Text"
import { Radios } from './Radios'

export const FormElem = props => {
  switch (props.type) {
    case "textfield":
      return <Text {...props}/>

    case "radios":
      return <Radios {...props}/>
  
    default:
      return props.type
  }
}
