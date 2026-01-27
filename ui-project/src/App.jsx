import React from 'react'
import Sec1 from './Components/section1/Sec1'
import Sec2 from './Components/section2/Sec2'

const App = () => {

  const users = [
    {
      id : '1',
      img: 'https://images.unsplash.com/photo-1732210038531-9cefab37885a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Focused marketing professional who balances deadlines, creativity, and coffee while building brands people trust.',
      tag: 'Satisfied'
    },
    {
      id : '2',
      img: 'https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Results-driven finance manager passionate about strategy, teamwork, and turning complex problems into growth opportunities.',
      tag: 'Underservied'
    },
    {
      id : '3',
      img: 'https://images.unsplash.com/photo-1581090604093-b89d92ae3bc0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Detail-oriented software consultant blending technical expertise, clear communication, and leadership in fast-paced environments daily.',
      tag: 'Underservied'
    },
    {
      id : '4',
      img: 'https://images.unsplash.com/photo-1633605435219-654abe70d37e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Strategic operations specialist driven by efficiency, collaboration, and delivering measurable results in dynamic workplaces.',
      tag: 'Satisfied'
    }
  ]

  return (
    <div>
      <Sec1 users={users} />
      <Sec2 />
    </div>
  )
}

export default App
