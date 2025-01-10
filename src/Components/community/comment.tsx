import React, { useEffect, useState } from 'react'
import HeaderProfile from './headerProfile';
import UpvoteDownVote from './upvote-downvote';
import { Post } from './community.interface';
import { CommunityQuestionSkeleton } from './communityQuestion';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { docQr } from '@/Logics/docQr';
import { getTimeAgoString, sortObjectsByDate } from '@/Logics/date';
import NoData from '@/utils/noData';
import useSessionStorageListener from '../hooks/useSessionStorageListener';
interface Props{
    post?:Post,
    setPostComments:(post:Post[] | any)=>void
}
const Comment:React.FC<Props>=({post,setPostComments})=>{
    const [isLoading,setIsLoading]=useState<boolean>(true);
const searchParams = useSearchParams();
const route=useRouter()
const postId=searchParams?.get("id");
const [commentData,setCommentData]=useState<Post[]>([]);
const [postComments1,setPostComments1]=useState<Post[]>([]);
const changedComment= useSessionStorageListener('changedComment');
    const getComments=async ()=>{
if(postId){
        console.log(postId);
    let commentsData:Post[]=await docQr("CommunityQuestionsComments",{
        max:100,
        whereClauses:[
            {
                field:"postId",
                operator:"==",
                value:postId
            },
            {
                field:"type",
                operator:"==",
                value:'comment'
            }
        ]
    })
    
commentsData=sortObjectsByDate(commentsData).reverse()
    setPostComments(commentsData as Post[])
     setCommentData(commentsData)
        setIsLoading(false)            
    
    }
    else{
        route.back()
    }
    }
    useEffect(()=>{
        getComments()
    },[])
useEffect(()=>{
getComments()
},[changedComment])

const [commentClass,setCommentClass]=useState<string>('hideComment');
    //fetch children of this comment and past inside when clicked
    

useEffect(()=>{
    console.log(postComments1);
    },[postComments1])
    return (
        <>
        {!isLoading && commentData.length==0 && <>
        <NoData>No comment found!</NoData>
        </>}
{isLoading ? <div>
    {[1,2,3].map((e:any,i:number)=>(
<CommunityQuestionSkeleton key={i}/>
    ))}
    </div>:commentData.map((item:Post,key:number)=>{
    return (<div className='upvote-downvote' key={key}>
        <HeaderProfile username={item?.profile?.name} timeAgo={getTimeAgoString(item?.updatedAt || item.createdAt)} />
        <div dangerouslySetInnerHTML={{__html:item?.htmlBody as string}}>
            </div> 
        <UpvoteDownVote commentClick={()=>{
            if(commentClass=='showComment'){
            setCommentClass('hideCommentAnimation');
            setTimeout(()=>{
                setCommentClass("hideComment")
            },300)
            }
            else{
                setCommentClass('showCommentAnimation');
                setTimeout(()=>{
                    setCommentClass("showComment")
                },800)
            }
        }} post={item} comments={postComments1} replyTo={item.profile.sid}/>
    <br/>
      
      <div className={commentClass}>
<CommentReply setPostComments={setPostComments1} comment={item}/>
        
        </div>
        </div>)
    })}
    </>
    )
}

export default Comment;

interface ReplyProps{
    comment:Post,
    setPostComments:(post:Post[] | any)=>void
}
const CommentReply:React.FC<ReplyProps>=({comment,setPostComments})=>{
    const [isLoading,setIsLoading]=useState<boolean>(true);
const [postComments2,setPostComments2]=useState<Post[]>([])
const [commentData,setCommentData]=useState<Post[]>([]);
    const getComments=async ()=>{

    let commentsData:Post[]=await docQr("CommunityQuestionsReplies",{
        max:100,
        whereClauses:[
            {
                field:"replyId",
                operator:"==",
                value:comment?.docId
            },
            {
                field:"type",
                operator:"==",
                value:'reply'
            }
        ]
    })
commentsData=sortObjectsByDate(commentsData)
    
     setCommentData(commentsData)
   
        setIsLoading(false)            
    
  
    }
    useEffect(()=>{
        getComments()
    },[])

    useEffect(()=>{
        setPostComments([...commentData]);
    },[commentData])
    //fetch children of this comment and past inside when clicked


    const [commentClass,setCommentClass]=useState<string>('showComment');
    
    return (
        <>
      {commentData.length>0 && <div style={{paddingLeft:30,borderLeft:"20px solid var(--our-grey)",padding:10,borderRadius:10}}>
{isLoading ? <div>
    {[1,2,3].map((e:any,i:number)=>(
<CommunityQuestionSkeleton key={i}/>
    ))}
    </div>:commentData.map((item:any,key:number)=>{
    return (<div className='upvote-downvote' key={key}>
        <HeaderProfile username={item?.profile?.name} timeAgo={getTimeAgoString(item?.updatedAt || item.createdAt)} />
        <div dangerouslySetInnerHTML={{__html:item?.htmlBody as string}}>
            </div> 
            <UpvoteDownVote  commentClick={()=>{
            if(commentClass=='showComment'){
            setCommentClass('hideCommentAnimation');
            setTimeout(()=>{
                setCommentClass("hideComment")
            },300)
            }
            else{
                setCommentClass('showCommentAnimation');
                setTimeout(()=>{
                    setCommentClass("showComment")
                },800)
            }
        }}  post={item} comments={postComments2} replyTo={item.profile.sid}/>
    
    <div className={commentClass}>    
<CommentReplyAgain setPostComments={setPostComments2} comment={item}/>
</div>
        </div>)
    })}
    </div>}
    </>
    )
}




const CommentReplyAgain:React.FC<ReplyProps>=({comment,setPostComments})=>{
    const [isLoading,setIsLoading]=useState<boolean>(true);
const [postComments3,setPostComments3]=useState<Post[]>([]);
const [commentData,setCommentData]=useState<Post[]>([]);
    const getComments=async ()=>{

    let commentsData:Post[]=await docQr("CommunityQuestionsReplies",{
        max:100,
        whereClauses:[
            {
                field:"replyId",
                operator:"==",
                value:comment?.docId
            },
            {
                field:"type",
                operator:"==",
                value:'reply'
            }
        ]
    })
    
    // console.log(commentsData)
commentsData=sortObjectsByDate(commentsData)

     setCommentData(commentsData)
     setPostComments(commentsData)
        setIsLoading(false)            
    
  
    }
    useEffect(()=>{
        getComments()
    },[])
    const [commentClass,setCommentClass]=useState<string>('showComment');

    //fetch children of this comment and past inside when clicked
    return (
        <>
      {commentData.length>0 && <div style={{paddingLeft:30,borderLeft:"20px solid var(--our-grey)",padding:10,borderRadius:10}}>
{isLoading ? <div>
    {[1,2,3].map((e:any,i:number)=>(
<CommunityQuestionSkeleton key={i}/>
    ))}
    </div>:commentData.map((item:any,key:number)=>{
    return (<div className='upvote-downvote' key={key}>
        <HeaderProfile username={item?.profile?.name} timeAgo={getTimeAgoString(item?.updatedAt || item.createdAt)} />
        <div dangerouslySetInnerHTML={{__html:item?.htmlBody as string}}>
            </div> 
        <UpvoteDownVote  commentClick={()=>{
            if(commentClass=='showComment'){
            setCommentClass('hideCommentAnimation');
            setTimeout(()=>{
                setCommentClass("hideComment")
            },300)
            }
            else{
                setCommentClass('showCommentAnimation');
                setTimeout(()=>{
                    setCommentClass("showComment")
                },800)
            }
        }} 
     post={item} replyTo={item.profile.sid} comments={postComments3}/>
      <div className={commentClass}>    
<CommentReply comment={item} setPostComments={setPostComments3}/>
    </div>
        </div>)
    })}
    </div>}
    </>
    )
}

export {CommentReply};