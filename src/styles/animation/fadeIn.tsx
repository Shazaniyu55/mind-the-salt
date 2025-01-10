'use client';
import React,{useEffect,useState} from 'react';
import { useInView } from 'react-intersection-observer';


interface ContainerProps {
children:any,
style?:any,
initStyle?:any
}

const FadeInShade:React.FC<ContainerProps>=({children,style,initStyle={}})=>{

    const [ref,inView,entries]=useInView({

    })
const otherStyles={
    transition:"0.6 ease",
    transitionDuration:"1s",
    opacity:0.3,
    ...style,
    ...initStyle

}
useEffect(()=>{
if(inView){
//console.log(ref,"in screen");
const el=entries?.boundingClientRect ? entries?.boundingClientRect:{top:0,bottom:0}
if (el?.top <= 0) {
    otherStyles.opacity=0
  }
}
},[inView]);






    return (
        <>
<div ref={ref}
style={!inView ? {...otherStyles}: {
    transition:"0.6 ease",
    transitionDuration:"1s",
    opacity:1,
    ...style
}}>
{children}
</div>
        </>
     )
// return <>{children}</>
}

export default FadeInShade;