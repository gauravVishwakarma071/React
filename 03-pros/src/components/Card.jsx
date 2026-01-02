import React from 'react'

const Card = () => {
    return (

        <div className='parent'>
            <div className='card'>
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className='img' />
                <h1>Gaurav Vishwakarma</h1>
                <p>An MCA student passionate about IT, Computer Science, and Mathematics.
                </p>
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default Card
