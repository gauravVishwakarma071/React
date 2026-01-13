import React from 'react'
import Card from './component/Card'
import User from './component/User'

const App = () => {


  const arr = [
    {
      user:'gaurav',
      age: 23
    },
    {
      user:'harsh',
      age: 29
    },
    {
      user:'sarthak',
      age: 25
    }
  ];

  return (
    <div className='parent'>
     {arr.map(function(elem){
      console.log(elem)
     })}
    </div>
  )
}

export default App
