'use client'

import { cloneElement, FC, ReactElement, use } from "react"

export const ClientComponent: FC<{ children: ReactElement }> = ({ children }) => { 
  // @ts-ignore uncomment the next line for a workaround
  // if(children.$$typeof === Symbol.for('react.lazy')) { children = use(children._payload); }

  return cloneElement(children, {
    ref: (element) => console.log('ref', element)
  })
}
