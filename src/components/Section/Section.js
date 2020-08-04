import React from "react"
// import { Part } from "./Part"
// import { Tabs, TabPanel } from "@cmsgov/design-system-core"

export const Section = props => {
  const subsections = props.subsections


  return (
    <div className="section-content">
      {
        subsections.map(sub => (
          sub &&
          <div>
            {sub.title}
          </div>
        ))
      }
    </div >
  )
}