import React from 'react'
import LeftContent from './LeftCont'
import RightContent from './RightCont'

const Center_sec1 = (props) => {
  return (
    <div className='h-[90vh] pt-5 pb-15 px-18 flex items-center justify-between  gap-10 '>
      <LeftContent/>
      <RightContent  users={props.users}/>
    </div>
  )
}

export default Center_sec1
