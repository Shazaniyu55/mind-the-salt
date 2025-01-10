import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ActivitiesCard from './activitiesCard';
import CommunityListCard from './communityCard';
import Link from 'next/link';
import CardSkeletonLoader from './communityCard.skeleton';
import { Post } from '../community/community.interface';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import getCommunityQuestions from '@/data/getCommunityQuestions';
// show fetch user activities 
// and render it 
const CommunityList:React.FC=()=>{
    const [isLoading,setIsLoading]=useState<boolean>(true);
  
    const [questions,setQuestions]=useState<Post[]>([]);

    useEffect(()=>{
async function setUpData(){
try{
const data=await getCommunityQuestions(6);
if(data)setQuestions(data)
}
catch(err:any){
    toast.error(err.message ||"Something went wrong");
}
finally{
setIsLoading(false);
}
}

setUpData()
    },[]);


return (
    <>
    <div className='myContainer'>
<Bold>Popular Community questions</Bold>
<Divider/>
{isLoading ? [1,2,3,4,5].map((e:any,i:number)=>{
     return (
        <CardSkeletonLoader key={i}/>
     )   
    }):questions.map((post:Post,i:number)=>{
    return (
        <>
   <CommunityListCard key={i} post={post}/>     
        </>
    )
})}


    </div>
    <br/>
    <div className='d-flex justify-content-center'><Link href={'/community'}>More related topics</Link>
    </div>
    </>
)
}
export default CommunityList;