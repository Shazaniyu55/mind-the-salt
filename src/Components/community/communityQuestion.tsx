import React from 'react'
import HeaderProfile from './headerProfile';
import Bold from '@/utils/Bold';
import { BiExpand } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { Skeleton } from '@mui/material';
import { Post } from './community.interface';
import { getTimeAgoString } from '@/Logics/date';

interface Props{
    post:Post
}
const CommunityQuestion:React.FC<Props>=({post})=>{
    const route=useRouter()
    return (
        <>
<div className='communityQuestion' onClick={()=>{
    sessionStorage.setItem("currentCommunityPost",JSON.stringify(post))
    route.push("/community-question-expand?id="+(post?.postId||post?.docId ))
}}>
<HeaderProfile timeAgo={getTimeAgoString(post.createdAt)} profile={post.profile.picture} username={post.profile.nickname}
 sideButton={<BiExpand onClick={()=>{
}}/>}/>
<Bold style={{fontSize:"larger",color:"dimgrey",padding:10}}>
{post?.heading}
</Bold>
</div>
        </>
    )
}

export default CommunityQuestion;

export function CommunityQuestionSkeleton(){
return (<><div style={{ display: 'flex', alignItems: 'center', marginTop:10}}>
<Skeleton variant="circular" width={40} height={40} />
<div style={{ marginLeft: 8 }}>
  <Skeleton variant="text" width={100} height={20} />
  <Skeleton variant="text" width={60} height={15} />
</div>
</div>
<Skeleton variant="text" width="80%" height={30} />
<Skeleton variant="rectangular" width="100%" height={60} style={{ marginTop: 8 }} />
</>)
}