import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='p-5 h-full w-full rounded-4xl absolute top-0 left- flex flex-col justify-between'>
            <h2 className='bg-white text-black h-10 w-10 flex items-center justify-center rounded-full text-lg font-bold '>{props.id}</h2>
            <div>
                <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-10 font-medium'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className="bg-[#4169E1] hover:bg-[#365fd6] transition-colors text-white font-semibold px-8 py-2 rounded-full">
                        {props.tag}
                    </button><button className='bg-[#4169E1] hover:bg-[#365fd6] transition-colors text-white font-semibold rounded-full px-4 py-2'><i className="ri-arrow-right-line"></i></button>
                </div>

            </div>
        </div>
    )
}

export default RightCardContent
