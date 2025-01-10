import React from 'react'
import ResponsiveImage from './ResposiveImage'
import Bold from './Bold'

interface Props{
    children:any,
    image?:string
}
const NoData:React.FC<Props>=({children,image="/images/noData.jpg"})=>{
    return (
        <>
        <div className='noData d-flex justify-content-center' style={{padding:10}}>
<div >
<div className='d-flex justify-content-center'><ResponsiveImage src={image} containerSize={100}/></div>
<Bold style={{textAlign:"center",display:"block"}}>{children}</Bold>

</div>
        </div>
        </>
    )
}

export default NoData;