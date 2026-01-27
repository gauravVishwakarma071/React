import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className=' h-full w-75 shrink-0 rounded-4xl overflow-hidden relative'>
            <img className='h-full w-full object-cover' src={props.img} alt="Image" />
            <RightCardContent intro={props.intro} tag={props.tag} id={props.id}/>
        </div>
    )
}

export default RightCard