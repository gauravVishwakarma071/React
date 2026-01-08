import React from 'react'
import Card from './component/Card'
import User from './component/User'

const App = () => {


  const arr = ['gaurav','harsh','sarthak']

  return (
    <div className='parent'>
     {arr.map(function(elem){
      return <h1>{elem}</h1>
     })}
    </div>
  )
}

export default App
