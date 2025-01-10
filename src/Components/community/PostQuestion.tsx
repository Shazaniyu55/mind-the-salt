import Bold from '@/utils/Bold';
import Loader from '@/utils/Loader';
import { MDBBtn, MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useEffect, useRef, useState } from 'react'
import ScrollBar from 'react-perfect-scrollbar';

import 'react-quill/dist/quill.snow.css';
import { Post } from './community.interface';
import { FidgetSpinner, Hearts } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { getCurrentTimestamp } from '@/Logics/DateFunc';
import { AddData } from '@/Logics/addData';
import { collection } from 'firebase/firestore';
import { db } from '@/firebase.config';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import useUser from '../hooks/useUser';
import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { closeAllMDBModal, setSessionStorageItem } from '@/Logics/date';

import {

  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import handleCommunityUserEvent from '@/notification/handle.community.userevent';





export const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  
 export const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];


const CreatePost:React.FC=()=>{
const [editor,setEditor]=useState<React.ReactNode>(<Loader/>);
const {user,isLoading}=useUser()
const editorHeading = useSelector((state: RootState) => state.data.data);
const searchParams = useSearchParams();
const [data,setData]=useState<Post>({
  heading:"",
  htmlBody:"",
  textBody:"",
  voteScore:[],
  comments:[],
  createdAt:"",
  editedAt:"",
  updatedAt:"",
  profile:"",
  uid:"id"+Date.now()

})
useEffect(()=>{
if(isLoading){
}
},[isLoading])
const handleEditorChange=(content:any, delta:any, source:any, editor:any)=>{
  data.htmlBody=editor.getHTML()
  data.textBody=editor.getText()
  if(editorHeading=='Create Post' && (document.querySelector('.heading') as HTMLInputElement))setData({...data,heading:(document.querySelector('.heading') as HTMLInputElement).value});
  else{
    setData({...data});
  }
      }

useEffect(()=>{
   async  function getEditor(){
        const { default: ReactQuill }=await import("react-quill");
    setEditor(<ReactQuill className='editorClass' modules={modules}
        formats={formats} placeholder='Enter post body here'  theme="snow" value={data.htmlBody} onChange={handleEditorChange} />)
    }
getEditor();
},[]);
const [isSubmit,setIsSubmitted]=useState<boolean>(false);
const submit=async ()=>{
//validate
if(data.heading.length <=1 && editorHeading=='Create Post'){
  toast.error("Please enter valid heading")
  return
}
else if(data.textBody.length < 10){
  if(editorHeading=='Create Post'){
    toast.error("Please explain your question properly")
  return
  }
  else{
    if(data?.textBody.length <=0){
      return toast.error("No Comment text found")
    }
  }
}
if(data?.textBody.length <=1){
  return toast.error("Enter valid text found")
}

//end validate

setIsSubmitted(true)
data.profile=user
data.createdAt=getCurrentTimestamp();

try{
  if(editorHeading=="Create Post"){
    data.postId="postId"+Date.now() as string
    data.type='post';
await AddData(collection(db,"CommunityQuestions"),data)
  }
  else if(editorHeading?.includes("Reply to")){
    const postId=searchParams?.get("id");
    data.postId=postId as string;
    data.type='reply';
await AddData(collection(db,"CommunityQuestionsReplies"),data);
  }
  else if (editorHeading?.includes('Replying to')){
    console.log("replying to...");
    const Post=JSON.parse(sessionStorage.getItem("replyPost") || "{}");
    console.log(Post);
     if(!Post?.profile)return;
data.type="reply";
data.replyId=Post?.docId||"";
await AddData(collection(db,"CommunityQuestionsReplies"),data)

  }
  else{
    const postId=searchParams?.get("id");
    data.postId=postId as string;
    data.type='comment';
await AddData(collection(db,"CommunityQuestionsComments"),data)
  }
console.log(data)
await handleCommunityUserEvent(editorHeading as string, data,user,searchParams?.get("id") as string);
toast.success("Posted successfully");
const editor_=editor;
setEditor(<></>);
setData({
  heading:"",
  htmlBody:"",
  textBody:"",
  voteScore:[],
  comments:[],
  createdAt:"",
  editedAt:"",
  updatedAt:"",
  profile:user,
  uid:"id"+Date.now()
})
setSessionStorageItem("changedComment",Date.now()+"dsd" as string)
 setTimeout(()=>{
   setEditor(()=>{
   return editor_;
 })
 },1);

}
catch(err:any){
  toast.error(err?.message || " Something went wrong")
}
finally{
  setIsSubmitted(false)
}

}


useEffect(()=>{
  // console.log(data);
},[data]);


const isInit=useRef(false);
useEffect(()=>{
  if(!isInit.current){
isInit.current=true;
  }
  else{
if(window.innerWidth < 1024 && window.location.pathname=='/community-question-expand'){
  setShowMobilePost(true);
}
  }


},[editorHeading])
const [showMobilePost,setShowMobilePost]=useState<boolean>(false);
return (
        <>

<>
      <MDBModal open={showMobilePost} onClose={() => setShowMobilePost(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{editorHeading}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={()=>{
                setShowMobilePost(false)
                setTimeout(()=>{
                  closeAllMDBModal()
                },100);
              }}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>



{/* should save data in variable and for easy reset but leave it for now */}

            <div className='myContainer postQuestionContainer'>
            <ScrollBar style={{height:"80vh"}}>
<Bold>{editorHeading}</Bold>
{editorHeading=='Create Post' &&<MDBInput style={{fontWeight:"bolder",color:'var(--our-blue)'}} className='heading' value={data?.heading} label="Heading" onChange={(e)=>{
const {target:{value}}=e;
data.heading=value;
setData({...data})
}}/>}
<br/>
{editor}
<br/>
<div className='d-flex justify-content-center align-items-center'>
<MDBBtn color='dark' rounded  style={{background:"var(--our-blue)",width:180}} onClick={()=>{
    submit()
}}>{isSubmit ? <div className='d-flex justify-content-center'>Posting...</div>
:"Post questions"}</MDBBtn>
     </div>
     </ScrollBar>
        </div>
        







            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={()=>setShowMobilePost(!showMobilePost)}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>


        <div className='myContainer postQuestionContainer'>
            <ScrollBar style={{height:"80vh"}}>
<Bold>{editorHeading}</Bold>
{editorHeading=='Create Post' &&<MDBInput style={{fontWeight:"bolder",color:'var(--our-blue)'}} className='heading' value={data?.heading} label="Heading" onChange={(e)=>{
const {target:{value}}=e;
data.heading=value;
setData({...data})
}}/>}
<br/>
{editor}
<br/>
<div className='d-flex justify-content-center align-items-center'>
<MDBBtn color='dark' rounded  style={{background:"var(--our-blue)",width:180}} onClick={()=>{
    submit()
}}>{isSubmit ? <div className='d-flex justify-content-center'>Posting...</div>
:"Post"}</MDBBtn>
     </div>
     </ScrollBar>
        </div>
        
        </>
    )
}

export default CreatePost;