import React from 'react'
import { useState } from 'react'

const Box = (props) => {

  const styles = {
    backgroundColor: props.on ? "black" : "white"
  }

  return (
    <div onClick={props.handleClick} style={styles} className='square'></div>
  )
}

export default Box