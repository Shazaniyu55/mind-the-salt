import Bold from '@/utils/Bold';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BlogProps } from './blog.interface';
import { Trash } from 'react-feather';
import { IconButton } from '@mui/material';
import useUser from '../hooks/useUser';
import toast from 'react-hot-toast';
import { truncateString } from '@/Logics/date';
import swal from 'sweetalert';
import { deleteData } from '@/Logics/deleteData';
import ClipLoader from 'react-spinners/ClipLoader';
import ResponsiveImage from '@/utils/ResposiveImage';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import Image from 'next/image';
interface Props{
    blog:BlogProps,
    deleteCallback:()=>void
}
const BlogCard:React.FC<Props>=({blog,deleteCallback})=>{
    const route=useRouter();
    const {user}=useUser();
    const [isDeleting,setIsDeleting]=useState<boolean>(false);
    const width=useInnerWidth()
   const deleteBlog=async ()=>{
if(user.sid!==blog.postedBy)return toast.error("No sufficient permission to delete this item")
  
    const willDelete = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this blog?",
        icon: "warning",
        buttons:['No',"Delete"],
        dangerMode: true,
      });
      if(willDelete){
try{
    setIsDeleting(true);
    await deleteData("blogs",blog.docId || "");
   if(deleteCallback)deleteCallback()
}
catch(err:any){
toast.error(err?.message||"Something went wrong");
}
finally{
setIsDeleting(false);
}
      }


   }
//    console.log(blog.postedBy );
    return (
        <>
        <div className='blogCard'>
{user.sid==blog.postedBy && <div className='blogCardDelete'>
<IconButton onClick={deleteBlog}>{isDeleting ? <ClipLoader/> :<Trash/>}</IconButton>
</div>}



<div style={{ width: '100%', position: 'relative', height: 'auto' }}>
            <Image
              src={blog?.image}
              alt=''
              layout='responsive'
              width={500}
              height={500}
              style={{ borderRadius: 10 }}
            />
          </div>


<Bold>{blog.heading}</Bold>
<p  onClick={()=>{
            route.push("/blogReader?blog="+blog.docId);
        }} >{truncateString(blog?.textBody,100)}</p>
<br/>
<MDBBtn  onClick={()=>{
            route.push("/blogReader?blog="+blog.docId);
        }} 
        rounded color='light' style={{width:"100%"}}>View Blog</MDBBtn>
        </div>
        </>
    )
}

export default BlogCard;