import { TextField }  from "@cmsgov/design-system-core"
import React from "react"

const Text = props => {
  return (
    <TextField
      defaultValue={props.value}
      label={props.label}
      labelClassName={props.labelClassName}
      name={props.name}
      hint={props.hint}
      numeric={props.numeric}
      size={props.size}
      multiline={props.multiline}
  />
  )
}

Text.defaultProps = {
  labelClassName: 'ds-u-margin-top--0',
};

export default Text