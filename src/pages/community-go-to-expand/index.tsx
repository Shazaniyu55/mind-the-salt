import React, { useEffect } from 'react'
import CommunityQuestionExpand from '@/Components/community/community-questions-expand';
import { useSearchParams } from 'next/navigation';
import ClipLoader from 'react-spinners/ClipLoader';
import { useRouter } from 'next/router';
import { docQr } from '@/Logics/docQr';
const Page:React.FC=()=>{
    const searchParams=useSearchParams();
    const route=useRouter();
    
    useEffect(()=>{
async function getPost(id:string){
const qr=await docQr('CommunityQuestions',{
    max:1,
    whereClauses:[
        {
            field:"postId",
            operator:"==",
            value:id
        }
    ]
})

if(qr?.[0]){
    window.sessionStorage.setItem("currentCommunityPost",JSON.stringify(qr[0]))
    route.replace("/community-question-expand?id="+id);
}
else{
    route.push("/community")
}

}
const id=searchParams?.get('id');
if(id){
getPost(id);
}
else{
    route.push("/community");
}




    },[]);

    return (<>
    <div className='myContainer'>
 <ClipLoader/>
 </div>

    </>)
}

export default Page;