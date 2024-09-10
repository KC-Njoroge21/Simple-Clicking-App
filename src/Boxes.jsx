import React from 'react'
import { useState } from 'react'
import boxesData from './boxesData'
import Box from './Box'

const Boxes = () => {

  const [boxes, setBoxes] = useState(boxesData)

  const toogle = (id) => {
    setBoxes((prevState) => {
      return (
        prevState.map((square) => {
          return (
            square.id === id ? {...square, on: !square.on} : square
          )
        })
      )
    })
  }

  const allBoxes = boxes.map((square) => {
    return (
      <Box handleClick={() => {toogle(square.id)}} key={square.id} on={square.on} />
    )
  })


  return (
    <div className='container'>
      {allBoxes}
    </div>
  )
}

export default Boxes