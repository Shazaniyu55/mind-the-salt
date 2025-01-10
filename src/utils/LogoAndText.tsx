import Image from 'next/image';
import React from 'react'
import ResponsiveImage from './ResposiveImage';
import { useRouter } from 'next/router';
interface Props{
    size?:number,
    text?:string
    text2?:string
}
const LogoAndText:React.FC<Props>=({size=50,text='Mind The Salt',text2='Less Salt, More Life'})=>{
    const dark=typeof window!=='undefined' ? window.localStorage.getItem("darkMode"):false;
    const route=useRouter()
    return (<>
    
   <div onClick={()=>{
    window.location.href="/"
   }} className='logoAndText d-flex align-items-center'>
   <ResponsiveImage containerSize={size} src='/images/logo.png'/>
   {!dark ? <b style={{padding:10,fontSize:'small', fontWeight: 700,}}><span>{text}</span> <br /> <span>{text2}</span></b>:
   <span style={{padding:10,fontWeight:"bolder",fontSize:'large'}}><span>{text}</span> <span>{text2}</span></span>}

</div>
    </>)
}

export default LogoAndText;