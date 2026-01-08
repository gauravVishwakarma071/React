import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
    return (
        <div className='card'>
            <div>
                <div className="top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv48DgacV_072bfO_oyhmMXGnNvIgQwWoH5Q&s" alt="canpany-image" />
                <button>Save <Bookmark size={12} /></button>
            </div>
            <div className="center">
                <h3>Amazon <span>5 days ago</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div className='tag'>
                    <h4>Full time</h4>
                    <h4>Senior level</h4>
                </div>
            </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <p>Mumbai</p>
                </div>
                <button>Apply now</button>
            </div>
        </div>
    )
}

export default Card
