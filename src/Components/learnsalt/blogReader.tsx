import { getDocumentById } from '@/Logics/getDocById';
import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { Divider } from '@mui/material';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BookOpen } from 'react-feather';
import ScrollBar from 'react-perfect-scrollbar';
import { BlogProps } from './blog.interface';
import toast from 'react-hot-toast';
import BlogReaderSkeleton from './blogReader.skeleton';
import { calculateReadingTime } from '@/Logics/date';
import useDashboardCardSettings from '../hooks/useDashboardCardsSetters';

const BlogReader:React.FC=()=>{
    const route=useRouter();
    const searchPram=useSearchParams();
    const [blogData,setBlogData]=useState<BlogProps>();
const [isLoading,setIsLoading]=useState<boolean>(true);

let timeoutId:number | null | any =null;

const {updateCardNumber}=useDashboardCardSettings();

    const fetchBlogData=async (blogId:string)=>{
setIsLoading(true);
try{
const data:BlogProps | null=await getDocumentById("blogs",blogId);
if(data){
setBlogData(data);
const mins=(calculateReadingTime(data?.textBody || "")/2)*60;
console.log("update learn timeout id set",{mins})
 timeoutId=setTimeout(()=>{
updateCardNumber(1,4);
console.log("updated timer")
},mins*1000);
}
else{
    toast.error("Blog not data fail to fetch");
    route.back();
}
}
catch(err:any){

}
finally{
setIsLoading(false);
}
    }
useEffect(()=>{
const id:string | null | any =searchPram?.get('blog');
if(!id){
    route.back();
}
else{
 fetchBlogData(id);
}


return ()=>{
    console.log("update learn timeout cleared");
    clearTimeout(timeoutId)
}
},[]);

return (<>
{isLoading ? <BlogReaderSkeleton/>:
<div className='myContainer'  style={{padding:20}}>
<ScrollBar style={{maxHeight:"80vh"}}>
<div className='d-flex justify-content-between align-items-center'>
    <MDBBtn color='light' size="sm" onClick={()=>{
        route.push("/learn")
    }}><BookOpen/>  More blogs</MDBBtn>
 <MDBBadge style={{maxHeight:"max-content"}} color='dark'>   {calculateReadingTime(blogData?.textBody || "")} mins read</MDBBadge>
</div>
<Divider/>
<br/>
<h3><Bold>{blogData?.heading}</Bold></h3>
<ResponsiveImage containerSize={200} src={blogData?.image||""}/>
<div dangerouslySetInnerHTML={{__html:blogData?.htmlBody ||""}}>

</div>
</ScrollBar>
</div>}
</>)
}

export default BlogReader;