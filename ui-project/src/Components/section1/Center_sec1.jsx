import React from 'react'
import LeftContent from './LeftCont'
import RightContent from './RightCont'

const Center_sec1 = () => {
  return (
    <div className='h-[90vh] py-10 px-18 flex items-center justify-between bg-amber-900 gap-10'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Center_sec1
