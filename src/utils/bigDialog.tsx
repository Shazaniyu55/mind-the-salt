import { Divider, IconButton } from '@mui/material'
import React from 'react'
import { BiTime } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'
import Bold from './Bold'
import ScrollBar from 'react-perfect-scrollbar'
interface Props {
    children: React.ReactNode,
    header:string | React.ReactNode,
    closeBtn:()=>void
}
const BigDialog: React.FC<Props> = ({ children,header,closeBtn }) => {
    return (
        <>
            <div className='dialogContainer'>
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <IconButton onClick={()=>{
if(closeBtn)closeBtn()
                        }}><MdCancel/></IconButton>
                        <Bold>{header}</Bold>
                        </div>
                    <Divider/>

                   <ScrollBar style={{height:"76vh"}}>{children}</ScrollBar> 

                </div>
            </div>
        </>
    )
}


export default BigDialog;