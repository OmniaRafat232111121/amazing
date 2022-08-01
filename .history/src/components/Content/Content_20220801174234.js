import React from 'react'
import {container} from "../../globalStyles"
import { useInView } from 'react-intersection-observer'
const Content = () => {
    const {ref,inView}=useInView({
        threshold:0.2,
    })
  return (
    <ContentSec>
    </ContentSec>
  )
}

export default Content