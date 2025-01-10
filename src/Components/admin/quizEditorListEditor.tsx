import { IconButton } from '@mui/material';
import { MDBBtn, MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Trash, Trash2 } from 'react-feather';
import ScrollBar from 'react-perfect-scrollbar';
import { FileUploader } from "react-drag-drop-files";
import Bold from '@/utils/Bold';
import Loader from '@/utils/Loader';
import PulseLoader from "react-spinners/PulseLoader";
import { formats, modules } from '../community/PostQuestion';
import toast from 'react-hot-toast';
import { generateUniqueString, UploadCallBackProps, uploadToFirebase } from '@/Logics/date';
import { geteuid, getuid } from 'process';
import { getCurrentTimestamp } from '@/Logics/DateFunc';
import { AddData } from '@/Logics/addData';
import { collection } from 'firebase/firestore';
import { db } from '@/firebase.config';
const fileTypes = ["JPG", "PNG", "GIF"];
export interface quizProps{
    name:string,
    title:string,
    image:string,
    quizId:string,
    createdAt:string,
    updatedAt:string |null,
    docId?:string
}
interface QuizListEditorProps{
successCallback:()=>any
}
const QuizListEditor:React.FC<QuizListEditorProps>=({successCallback})=>{
    const [file, setFile] = useState(null);

    
const [editor,setEditor]=useState<React.ReactNode>(<Loader/>);

const [quizName,setQuizName]=useState<string>("")
const [quizTitle,setQuizTitle]=useState<string>("")
const [image,setImage]=useState<string>("");
const [instructionHTML,setInstructionHTML]=useState<string>("");
const [instructionText,setInstructionText]=useState<string>("");
const [isUploading,setIsUploading]=useState<boolean>(false);
const [fileType,setFileType]=useState<string>("");
useEffect(()=>{
   async  function getEditor(){
        const { default: ReactQuill }=await import("react-quill");
    setEditor(<ReactQuill  modules={modules}
        formats={formats} placeholder='Enter post body here'  theme="snow" value={instructionHTML} onChange={(content, delta, source, editor)=>{
setInstructionHTML(editor.getHTML());
setInstructionText(editor.getText());
    }} />)
    }
getEditor();
},[]);
    const handleChange = (file:any) => {
        console.log(file)
        setFileType(file.type)
      setFile(file);
    }

    const [isSubmitting,setIsSubmitting]=useState<boolean>(false);
const submit=async ()=>{
    setIsSubmitting(true);
if(quizName.length < 4){
toast.error("Please enter quiz name")
return setIsSubmitting(false);
}
if(instructionText.length < 10){
toast.error("please enter a valid quiz instruction")
console.log({instructionText,instructionHTML});
return setIsSubmitting(false);
}
if(!file){
 toast.error("Please select quiz image")
return setIsSubmitting(false);
}
//upload image
const data:quizProps={
    name:quizName,
    image:"",
    title:quizTitle,
    quizId: generateUniqueString(10)+""+"id",
    createdAt:getCurrentTimestamp(),
    updatedAt:null
}
const uploadProps:UploadCallBackProps={
    success:async (url)=>{//complete upload on success
        toast.success("image upload successfully")
        data.image=url
        await AddData(collection(db,"Quiz"),{...data,image:url,title:quizTitle})
        toast.success("Quiz create successfully")
        setQuizName("")
        setQuizTitle("");
        setFile(null)
        successCallback()
    },
    error:(error:any)=>{
        toast.error(error?.message || "Something went wrong")
        setIsUploading(false)
    },
    
}
await uploadToFirebase(file,uploadProps,fileType); 
  
        setIsSubmitting(false);


}



    return (
        <>
        <div className='addEditAssesments d-flex m-block'>

      <div style={{minWidth:"300px",width:"58%",margin:"0 auto",padding:15}}>
            <Bold>Create</Bold>
            <MDBTextArea onChange={(e)=>{
                const {target:{value}}=e;
                setQuizTitle(value)
            }} label="Quiz name" style={{width:"100%"}}></MDBTextArea>
          <br/>
          <MDBInput onChange={(e)=>{
                const {target:{value}}=e;
                setQuizName(value)
            }} label='Enter sub-Name' />
            <br/>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
         <br/>   <div style={{}}>
                <MDBBtn onClick={()=>{
                    submit();
                }}>{isSubmitting
                     ? <PulseLoader size={15} color='white'/>:"Create Quiz"}</MDBBtn>
            </div>
        </div>

        <div className='' style={{width:"58%",padding:15}}>
<Bold>Quiz instructions</Bold>
{editor}
        </div>

</div>


        </>
    )
}

export default QuizListEditor;