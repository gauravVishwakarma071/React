import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const leftContent = () => {
  return (
    <div className='h-full w-3/11 justify-between flex flex-col justify-between'>
      <HeroText />
      <Arrow />
    </div>
  )
}

export default leftContent
