import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BiDownvote, BiMessage, BiUpvote } from 'react-icons/bi';
import { Post } from './community.interface';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { setData as setEditorHeaderData } from '@/features/dataSlice';
import { getTimeAgoString } from '@/Logics/date';
import useUser from '../hooks/useUser';
import BounceLoader from 'react-spinners/BounceLoader';
import toast from 'react-hot-toast';
import { updateData } from '@/Logics/updateData';

interface Props{
    post?:Post,
    comments?:Post[],
    commentClick?:()=>void;
    replyTo?:string
}
const UpvoteDownVote:React.FC<Props>=({post,comments,replyTo,commentClick})=>{
    const dispatch:AppDispatch=useDispatch()
    const {user}=useUser();
    const [voteScore,setVoteScore]=useState<string[]>([])
    const upvote=async ()=>{
        if(typeof post?.voteScore!=='object')return console.log(post?.voteScore);
if(!voteScore.includes(user.sid)){
    voteScore.push(user.sid);
    post.voteScore=voteScore
    setVoteScore([...voteScore]);
updatePost(post);
}
        //resave postx
    }

    const [isUpdating,setIsUpdating]=useState<boolean>(false);


    const updatePost=async (post:Post)=>{
        try{
        setIsUpdating(true);

        if(post.type=='post'){
            await updateData('CommunityQuestions',post?.docId as string,post);
        }
        else{
await updateData(post.type=='reply' ? 'CommunityQuestionsReplies':'CommunityQuestionsComments',post?.docId as string,post);
        }
        

}
    catch(err:any){
        toast.error(err?.message || "Something went wrong")
        console.log(err,post);
    }
    finally{
setIsUpdating(false);
    }
    }



    const downVote=async ()=>{
        if(typeof post?.voteScore!=='object')return console.log(post?.voteScore);
        post.voteScore=post?.voteScore.filter((e)=>{
            return e!=user.sid
        })
        setVoteScore(post.voteScore)

        updatePost(post);
    }

useEffect(()=>{

},[voteScore])

useEffect(()=>{
    console.log(post?.voteScore,post)
    setVoteScore(post?.voteScore || [])
},[post])
    return (
        <div className='d-flex' style={{gap:5}}>
        <div >
<div className='UpvoteDownVote d-flex align-items-center justify-content-between' style={{gap:5,width:"max-content"}}>
<IconButton style={{background:voteScore.includes(user.sid)? 'var(--red-opacity-02)':undefined}}  onClick={()=>{
upvote()
}} size='small'><BiUpvote/></IconButton>
<span>{isUpdating ?  <BounceLoader color='var(--red-opacity-02)' size={16}/>:voteScore.length}</span>
<IconButton onClick={()=>{
    downVote();
}} size='small'>
<BiDownvote/>
</IconButton>

</div>
        </div>


        {comments && <div className='UpvoteDownVote d-flex align-items-center justify-content-between' style={{gap:5,width:"max-content",height:"max-height"}}>
<IconButton size='small' onClick={()=>{
   if(!replyTo){
      dispatch(setEditorHeaderData("Write comment"));
     window.sessionStorage.removeItem("replyPost")
   }
   if(commentClick)commentClick();
}}>           <BiMessage/>
</IconButton> 
<span>{comments?.length}</span>
</div>}

{replyTo && 
<IconButton onClick={
    ()=>{
  dispatch(setEditorHeaderData("Replying to "+post?.profile?.name+ ("'s ( comment "+getTimeAgoString(post?.createdAt || post?.updatedAt ||""))+" ) "));
  window.sessionStorage.setItem("replyPost",JSON.stringify(post))
    }} className='UpvoteDownVote d-flex align-items-center justify-content-between' style={{gap:5,width:"max-content",height:"max-height"}} size='small'>      

<span style={{fontSize:'smaller'}}>{"Reply"}</span>
</IconButton> 
}


        </div>
    )
}

export default UpvoteDownVote;