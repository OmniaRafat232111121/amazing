import React from 'react'
import {container} from "../../globalStyles"
import { useInView } from 'react-intersection-observer'
import {ContentSec} from './ContentStyes'
const Content = () => {
    const {ref,inView}=useInView({
        threshold:0.2,
    })
  return (
    <ContentSec ref={ref}>
    </ContentSec>
  )
}

export default Content