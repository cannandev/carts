import React from 'react'
import Text from "./Text/Text"

export const FormElem = props => {
  if (props.type === "textfield") {
    return <Text {...props}/>
  }
  return props.type
}
