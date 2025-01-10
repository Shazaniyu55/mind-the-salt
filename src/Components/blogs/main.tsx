import React,{useState,useEffect} from 'react';
import './style.css';
import '../generalStye.css';
import Bold from '@/utils/Bold';
import BlogCard from './blogCard';
import ScrollBar from 'react-perfect-scrollbar';

import { BlogProps } from './blog.interface';
import { getSingleDoc } from '@/Logics/getDoc';
import toast from 'react-hot-toast';
import BlogCardSkeleton from './blogCard.skeleton';
import NoData from '@/utils/noData';
  

const Main:React.FC=()=>{
    const [showCreateBlog,setShowCreateBlog]=useState<boolean>(false);
const toggleShowCreateBlog=()=>setShowCreateBlog(!showCreateBlog);
const [blogs,setBlogs]=useState<BlogProps[]>([]);
const [isLoading,setIsLoading]=useState<boolean>(false);
const getBlogs=async ()=>{
  setIsLoading(true)
  try{
  const blogsData=await getSingleDoc("blogs");
  console.log(blogsData);
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


        <ScrollBar style={{height:"90vh"}}>
        <div style={{padding:16}} className='dashboard'>
{!isLoading && blogs.length==0 && <NoData>No Blog found</NoData>}

<div className='d-flex ' style={{padding:10,gap:10,flexFlow:"row wrap"}}>
{isLoading ? [1,2,3,4,5,6].map((e,i)=>{
return <BlogCardSkeleton key={i}/>
}):blogs.map((e:any,i:number)=><BlogCard deleteCallback={()=>getBlogs()} blog={e} key={i}/>)}

    </div>


        </div>

        </ScrollBar>
        </>

    )
}

export default Main;