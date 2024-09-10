import React from 'react'
import { useState } from 'react'
import boxesData from './boxesData'

const Boxes = () => {

  const [boxes, setBoxes] = useState(boxesData)

  const allBoxes = boxes.map((square) => {
    return (
      <div className='square' key={square.id}></div>
    )
  })


  return (
    <div className='container'>
      {allBoxes}
    </div>
  )
}

export default Boxes