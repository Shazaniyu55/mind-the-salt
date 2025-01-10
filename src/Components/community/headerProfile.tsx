import Bold from '@/utils/Bold';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
export interface Props{
backButton?:()=>void;
timeAgo:string,
username:string,
profile?:string 
sideButton?:any
}

const HeaderProfile:React.FC<Props>=({backButton,timeAgo,username,profile,sideButton})=>{
    return (
        <>
        <div className='headerProfile d-flex align-items-center justify-content-between'>

<div style={{gap:5}} className='d-flex align-items-center '>
{backButton && <IconButton onClick={backButton}><BiArrowBack/></IconButton>}
    <Avatar src={profile ? profile:undefined}/>

<div><Bold>{username}</Bold><br/>
<small>{timeAgo}</small>
</div>

</div>

{sideButton}

        </div>
        </>
    )
}

export default HeaderProfile;