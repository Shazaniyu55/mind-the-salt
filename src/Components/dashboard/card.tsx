import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import React from 'react'
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import { useRouter } from 'next/router';

export interface CardProps{
    num:number,
    name:string,
    image:string,
   link:string
}
const Card:React.FC<CardProps>=({num,image,name,link})=>{

    const width=useInnerWidth();
    const isMob=width < 700
    const route=useRouter()
return <>
<div className='frontCard d-flex align-items-center' style={{gap:10}} onClick={()=>{
    route.push(link)
    
}}>
{!isMob && <ResponsiveImage containerSize={50} src={image}/>}
<div style={{width:"100%"}}>
<span style={{color:"white",fontSize:isMob ?'small':undefined}}>{name}</span><br/>
{!isMob && <Bold style={{color:"white"}}>{num}</Bold>}


{isMob && <div className='d-flex justify-content-between align-items-center' style={{marginTop:4}}>{isMob && <ResponsiveImage containerSize={40} src={image}/>}
<Bold style={{color:"white"}}>{num}</Bold>
</div>}

</div>


</div>
</>
}

export default Card;