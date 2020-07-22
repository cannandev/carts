import React from 'react'
import { ChoiceList } from '@cmsgov/design-system-core'

export const Radios = props => {

  return (<ChoiceList
    choices={props.children}
    label={props.label}
    name={props.name}
    hint={props.hint}
    type="radio" 
  />)
}