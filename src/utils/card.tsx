import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { IconButton } from '@mui/material';
import React from 'react'
interface Props{
title:string,
style?:any,
message:string | React.ReactElement,
image:string,
className?:string,
onClick?:()=>void;
button?:React.ReactElement;
}

const Card:React.FC<Props>=({title,message,image,style={},className,onClick,button})=>{
    return (<>
    
<div className={`card ${className}`}  style={{margin:5,...style}} >
    <div  className='d-flex align-items-center justify-content-between' style={{padding:5}}>

<div style={{flexGrow:"1"}} onClick={()=>{
    if(onClick){
        onClick();
    }
}}  className='d-flex align-items-center'><ResponsiveImage containerSize={50} style={{borderRadius:10}} src={image}/>
<div style={{paddingLeft:5}}>
    <Bold style={{fontWeight:500}}>{title}</Bold><br/>
    <span>{message}</span>
</div> 
</div>

{button || <></>}




</div>
</div>
    </>)
}

export default Card;