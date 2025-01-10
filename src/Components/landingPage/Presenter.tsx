import Bold from '@/utils/Bold';
import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useRef, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import { useRouter } from 'next/router';


const Presenter: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const width=useInnerWidth()
const slides=[
    {
        title:"Welcome to Mind the Salt",
        name:"Discover simple ways to reduce salt without losing flavour.",
        image:""
    },
    {
        title:"Learn and grow in health",
        name:"Learn to protect your health",
        image:""
    }
    ,
    {
        title:"Get professionals advice",
        name:"get professionals advice to protect your health",
        image:""
    }
]



  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    const interval=setInterval(()=>{
        console.log("interval runs",index+1)
setIndex((index:number)=>{
    if(index < (slides.length -1))return index+1
    else return 0;
        })

    },3000)
return ()=>{
    console.log("interval cleared")
    clearInterval(interval);
}
}, []);
const [index,setIndex]=useState<number>(0);
const route=useRouter()
  return (
    <div className='presenter'>
      <div style={{padding:17}} className='d-flex align-items-center justify-content-center'>
      
        <div className='text-center' >
            <div style={{height:"max-content"}}>
<Bold style={{fontSize:width < 600 ? 30:50}}>
  <div className='d-flex align-items-center justify-content-center'>  
<TextTransition springConfig={presets.gentle}> {slides[index].title}</TextTransition>
  </div>

  </Bold>
  </div>
{slides[index].title.length > 13 && width < 600 &&<div style={{height:50}}>
    
    </div>}
  <div className='d-flex justify-content-center'>
  <TextTransition style={{textAlign:'center'}} springConfig={presets.molasses}> {slides[index].name}</TextTransition>
  </div>

<br/>
<MDBBtn rounded size='lg'  onClick={()=>{
  window.location.href="/dashboard"
}

}>Get Started</MDBBtn>
<br/>
<br/>
<div style={{gap:10,margin:"0 auto",width:"max-content",flexFlow:"row wrap"}} className='boxs d-flex align-items-center'>

<div>
</div>

<div>
</div>

<div>
</div>

<div>
</div>


</div>


</div>

      </div>
      <video style={{objectFit:'cover'}} height={600} ref={videoRef} autoPlay muted src='/video/salt_backgroundVideo.mp4' loop></video>
    </div>
  );
};

export default Presenter;
