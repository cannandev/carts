import React from 'react'
import Text from "./Text/Text"
import { Radios } from './Radios'

export const FormElem = props => {
  switch (props.type) {
    case "text_short":
      return <Text {...props} />

    case "text_long":
      return <Text multiline {...props} />

    default:
      return props.type
  }
}
