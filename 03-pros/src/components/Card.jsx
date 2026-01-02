import React from 'react'

const Card = (props) => {
    return (
            <div className='card'>
            <img src={props.img} alt="image" className='img' />
            <h1>{props.name}, {props.age}</h1>
            <p>An MCA student passionate about IT, Computer Science, and Mathematics.
            </p>
            <button className='btn'>View Profile</button>
        </div>
    )
}

export default Card
