import RightCard from './RightCard'

const RightCont = (props) => {
  return (
    <div id='right' className='h-full  w-3/4 p-3 overflow-auto rounded-4xl flex flex-nowrap gap-8'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} img={elem.img} intro={elem.intro} tag={elem.tag} id={elem.id}/>
      })}
    </div>
  )
}

export default RightCont
