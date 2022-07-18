import React from 'react'
import { Timeline } from 'react-twitter-widgets'

const Test = () => {
  return (
    <>
    <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'Ali22063062'
  }}
  options={{
    height: '200',
    width:'200'
  }}
/>
    </>
  )
}

export default Test