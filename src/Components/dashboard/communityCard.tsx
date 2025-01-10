import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { Chip, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { Post } from '../community/community.interface';

interface Props{
    post:Post
}
const CommunityListCard:React.FC<Props>=({post})=>{
   const {heading,postId,profile,voteScore,views}=post
   const route=useRouter();   
   const handleClick=()=>{
    sessionStorage.setItem("currentCommunityPost",JSON.stringify(post))
       route.push(`/community-question-expand?id=${postId}`)
   }
    return (<>
   
<div className='card cardHoverEffect' id='hoverEffect' style={{margin:5,cursor:"pointer"}} onClick={()=>handleClick()} >
    <div  className='d-flex align-items-center' style={{padding:5}}>
<ResponsiveImage containerSize={50} src={profile?.picture} style={{borderRadius:5}}/>
<div style={{paddingLeft:5,flexGrow:'1'}}>
    <Bold style={{fontWeight:500}}>{heading}</Bold><br/>
    <div className='d-flex justify-content-between align-items-center'>
<span style={{color:'var(--our-blue)',fontSize:'small'}}>{views || '0'} views</span>
<div className='d-flex' style={{gap:5}}>
<Chip size='small'  style={{cursor:"pointer"}} label={<><BiUpvote/><BiDownvote/><small> {voteScore.length}</small></>}/>
</div>
    </div>

</div> 
</div>
</div>
    </>)
}

export default CommunityListCard;