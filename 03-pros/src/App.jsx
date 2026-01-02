import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card name = 'Guarav Vishwakarma' age={24} img='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card name = 'Pankaj Verma' age={34} img='https://plus.unsplash.com/premium_photo-1734498806647-cbce363b800f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D'/>
      <Card name = 'Aman Singh' age={24} img='https://images.unsplash.com/photo-1667314025795-d1e4fafcad8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'/>
      </div>
  )
}

export default App
