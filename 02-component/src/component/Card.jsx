import React from 'react'

const Card = () => {

  const user = 'Gaurav';  
  const age = 23;  
  
  return (
  <div>
      <div className='card'>
        <h1>{user} Vishwakarma</h1>
        <h2> I am {age} years old, Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus nostrum dolores.</h2>
      </div>
    </div>
  )
}

export default Card
