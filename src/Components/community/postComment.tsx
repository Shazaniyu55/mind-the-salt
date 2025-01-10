import Bold from '@/utils/Bold';
import Loader from '@/utils/Loader';
import { MDBBtn, MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import ScrollBar from 'react-perfect-scrollbar';

import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];


const CreatePost:React.FC=()=>{
const [questionHtml,setQuestionHtml]=useState<string>("");
const [editor,setEditor]=useState<React.ReactNode>(<Loader/>);
useEffect(()=>{
   async  function getEditor(){
        const { default: ReactQuill }=await import("react-quill");
    setEditor(<ReactQuill  modules={modules}
        formats={formats} placeholder='Enter post body here'  theme="snow" value={questionHtml} onChange={(content, delta, source, editor)=>{
console.log(editor.getHTML());
    }} />)
    }
getEditor();
},[]);
return (
        <>
        <div className='myContainer postQuestionContainer'>
            <ScrollBar style={{height:"80vh"}}>
<Bold>Post Comment</Bold>

{editor}
<br/>
<div className='d-flex justify-content-center'>
<MDBBtn color='dark' rounded  style={{background:"var(--our-blue)"}} onClick={()=>{
    console.log(questionHtml);
}}>Post comment</MDBBtn>
     </div>
     </ScrollBar>
        </div>
        
        </>
    )
}

export default CreatePost;