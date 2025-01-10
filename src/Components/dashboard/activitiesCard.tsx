import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import React from 'react'
import { ActivitiesInterface } from './features.interface';


interface Props{
    activity:ActivitiesInterface
}
const ActivitiesCard:React.FC<Props>=({activity})=>{
    return (<>
    
<div className='card' style={{margin:5}} >
    <div  className='d-flex' style={{padding:5}}>
<ResponsiveImage containerSize={80} style={{borderRadius:10}} src={activity?.image}/>
<div style={{paddingLeft:5,maxWidth:'80%'}}>
    <Bold style={{fontWeight:600}}>{activity?.heading}</Bold><br/>
    <span>{activity?.text}</span>
</div> 
</div>
</div>
    </>)
}

export default ActivitiesCard;