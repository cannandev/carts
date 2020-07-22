import React from "react"
import { Tabs, TabPanel } from "@cmsgov/design-system-core"
import { FormElem } from "../FormElem"
import { Button } from '@cmsgov/design-system-core'

export const Section = props => {
  const showTabs = props.properties.showTabs
  const formElements = props.properties.children
  const ConditionalTabs = ({ condition, wrapper, children }) => 
    condition ? wrapper(children) : children;
  return (
    <div className="section-content">
      <ConditionalTabs
        condition={showTabs}
        wrapper={
          children => 
            <TabPanel>
              <Tabs>{children}</Tabs>
            </TabPanel>
        }
      >
        <div className="section-content">
          <form>
            <p>{props.properties.description}</p>
            <h2>{props.properties.name}</h2>
            <ol>
              {
                formElements.map(elem => (
                  <li>
                    <FormElem
                      key={elem.uuid}
                      type={elem.type}
                      {...elem.properties}
                    />
                  </li>
                ))
              }
            </ol>
            <Button
              className="ds-u-margin-left--2"
              variation="primary"
              onClick={() => alert('Save this form to database!')}>Save</Button>
          </form>
        </div>
      </ConditionalTabs>
    </div>
  )
}