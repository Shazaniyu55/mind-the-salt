import React from 'react'
interface Props{
    children:any,
    style?:any
}
const Bold:React.FC<Props>=({children,style={}})=>{
    return (
        <>
        <b style={{color:'var(--our-blue)',...style}}>{children}</b>
        </>
    )
}

export default Bold;