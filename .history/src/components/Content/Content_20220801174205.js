import React from 'react'
import {container} from "../../globalStyles"
import { useInView } from 'react-intersection-observer'
const Content = () => {
    const {ref,inView}=useInView({
        t
    })
  return (
    <div>Content</div>
  )
}

export default Content