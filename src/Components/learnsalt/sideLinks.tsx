import { getSingleDoc } from '@/Logics/getDoc';
import Bold from '@/utils/Bold';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ScrollBar from 'react-perfect-scrollbar';
import { BlogProps } from './blog.interface';
import Skeleton from 'react-loading-skeleton';

const SideBlogsLink:React.FC=()=>{

    const [blogs,setBlogs]=useState<BlogProps[]>([]);
    const [isLoading,setIsLoading]=useState<boolean>(false);

    const getBlogs=async ()=>{
        setIsLoading(true)
        try{
        const blogsData=await getSingleDoc("blogs");
        setBlogs(blogsData);
        }
        catch(err:any){
      toast.error(err.message || "Something went wrong")
        }
        finally{
          setIsLoading(false)
        }
      }
useEffect(()=>{
getBlogs();
},[])

    return (
        <>
        <div className='myContainer' style={{padding:20}}>
        <Bold>Learn something new</Bold>
<ScrollBar style={{height:"80vh"}}>
{isLoading ? [1,2,3,4,5,6,7,8,9].map((e,i:number)=>{
return (
    <>
    <Skeleton key={i}
    style={{width:"100%"}} /></>
)
}):blogs.map((blog:BlogProps,i:number)=>(<li className='sideLink' key={i}>
<Link href={"http://localhost:3000/blogReader?blog="+blog.docId}>{blog?.heading}</Link>
</li> ))}  
        

        </ScrollBar>
        </div>
        </>
    )
}

export default SideBlogsLink;