import { questionsProps } from '@/data/quizData';
import { db } from '@/firebase.config';
import { AddData } from '@/Logics/addData';
import { generateUniqueString } from '@/Logics/date';
import { docQr } from '@/Logics/docQr';
import { getSingleDoc } from '@/Logics/getDoc';
import { updateData } from '@/Logics/updateData';
import CardSkeleton from '@/utils/cardSkeleton';
import NoData from '@/utils/noData';
import { FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import { collection } from 'firebase/firestore';
import { MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Circle, Trash, Trash2 } from 'react-feather';
import toast from 'react-hot-toast';
import { FidgetSpinner } from 'react-loader-spinner';
import ScrollBar from 'react-perfect-scrollbar';
import BounceLoader from 'react-spinners/BounceLoader'
const QuizQuestionAdder:React.FC=()=>{
    const [quizData,setQuizData]=useState<questionsProps[]>([])
    const [index,setIndex]=useState<number>(0);
    const [quiz,setQuiz]=useState<any>([]);
    const [hasData,setHasData]=useState<boolean>(false);
    const [selectedQuiz,setSelectedQuiz]=useState<any>({});
    const [newQuestion,setNewQuestion]=useState<questionsProps>(
        {
            question:"",
            options:[]
        }
    )


    async function getQuiz(){//load quiz for quiz selection before seeing the questions
        const data=await getSingleDoc("Quiz");
    setQuiz(data);

    }


useEffect(()=>{
    getQuiz()
setHasData(typeof quizData[index]!='undefined')
},[index,quizData])

const [isLoading,setIsLoading]=useState<boolean>(false);
const saveQuizQuestions=async (quizId:string,quizQuestions:questionsProps[],docId:string | boolean)=>{
    if(!quizId)return console.error({quizId,message:"No QuizId Found"})
setIsLoading(true)

    try{
if(docId){
   //get the right document  
const data:any=await docQr("quizQuestionsData",{
    max:100,
    whereClauses:[{
        field:"quizId",
        operator:"==",
        value:quizId 
    }]

})
//update the document
const d_data=data.filter((e:any)=>e.quizId==quizId);
if(d_data.length===1){
   await  updateData('quizQuestionsData',d_data[0].docId as string,{data:quizQuestions})
   toast.success("updated successfully")
}
else{
    console.info("Nothing to be updated");
// await AddData(collection(db,"quizQuestionsData"),{quizId, data:quizQuestions})
}
}
else {
await AddData(collection(db,"quizQuestionsData"),{quizId, data:quizQuestions})
}
setIsLoading(false)
    }
    catch(err:any){
setIsLoading(false)

        toast.error(err?.message || "Something went wrong")
    }
}

const [isLoadingQuizData,setIsLoadingQuizData]=useState<boolean>(false);
async function getQuizQuestionsData(quizId:string){
setIsLoadingQuizData(true)
const data:any=await docQr("quizQuestionsData",{
    max:100,
    whereClauses:[{
        field:"quizId",
        operator:"==",
        value:quizId 
    }]

})

// console.log({quizDate:data,quizId,type:"getting quiz question data result"})
if(data.length > 0 && data?.[0]?.data){
    setQuizData(data?.[0]?.data);
    setDocId(data?.[0]?.docId)
    setQuizGameId(data?.[0].quizId);
}
else{
    setQuizData([])
}

setIsLoadingQuizData(false)

}
const [quizGameId,setQuizGameId]=useState<string | undefined>()
const [docId,setDocId]=useState<string | undefined>()
async function smartUpdate(quizData:any,selectedQuiz:any){
    setIsLoadingQuizData(true)
       await saveQuizQuestions(selectedQuiz.quizId as string,quizData,docId as string);
 await       getQuizQuestionsData(selectedQuiz.quizId as string);
}
useEffect(()=>{
   if(selectedQuiz.quizId)getQuizQuestionsData(selectedQuiz.quizId)
},[selectedQuiz])

    return (
        <>
        <div className='addEditAssesments d-flex m-block'>
<div className='questionEditContainer'>

<ScrollBar style={{height:"70vh"}}>

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select quiz first</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectedQuiz.title}
    label="Age"
    onChange={(e)=>{
const {target:{value}}=e;
const selectedQuiz=quiz[value]
setSelectedQuiz(selectedQuiz)

    
    }}
  >
    
   {quiz.map((e:any,index:number)=><MenuItem key={index} value={index}>{e?.title}<br/> <small>{e?.name}</small></MenuItem>)}


  </Select>
</FormControl>


{hasData ? <>



<MDBTextArea style={{margin:'3px'}} onChange={(e:any)=>{
    const {target:{value}}=e;
    if(quizData[index].question !=undefined)quizData[index].question=value;
    setQuizData([...quizData])
    
}} value={quizData[index]?.question}></MDBTextArea>
<br/>
{quizData[index]?.options.map((e,i)=>(<div className='d-flex align-items-center '  style={{marginTop:10,gap:10}} key={i}>
<div className='circle'>{i+1}</div>
<input placeholder='Enter option value' value={e?.name} onChange={(e)=>{
    const {target:{value}}=e;
    if(quizData[index]?.options[i]){
        quizData[index].options[i].name=value;
        setQuizData([...quizData])
    }

}}/>


<div className='d-flex'>

<IconButton onClick={()=>{
   quizData[index].options=quizData[index].options.map((e)=>{
        e.isAnswer=false
        return e;
    });

    quizData[index].options[i].isAnswer=true;
    setQuizData([...quizData])
}}>{e?.isAnswer ? <Circle fill='var(--our-blue)'/>:<Circle/>} 
</IconButton>


 <IconButton onClick={()=>{
    quizData[index].options.splice(i,1);
    setQuizData([...quizData])
}}><Trash2/></IconButton>
</div>

</div>))}
</>:
<>
<div className='d-flex align-items-center justify-content-center'>
<NoData>No Question selected</NoData>
</div>
</>}
<br/>
</ScrollBar>
<div className='d-flex justify-content-center' onClick={()=>{
 if(!hasData)return;
 quizData[index].options.push({
name:"",
type:"text",
isSelected:false
    })
    setQuizData([...quizData])
    
}} ><MDBBtn rounded color='dark' style={{background:"var(--our-blue)"}}>Add option</MDBBtn>
</div>



    </div>














    <div className='questionListContainer'>
        {/* {quizData.length===0 && <NoData>No question, please click add button</NoData>} */}
       <div  className='d-flex justify-content-end'><MDBBtn className='d-flex align-items-center' rounded style={{background:"var(--our-blue)",gap:10}} onClick={()=>{
            saveQuizQuestions(selectedQuiz.quizId as string,quizData,docId as string);
        }}>{isLoading ? <>Saving <BounceLoader color='white' size={16}/></>:"Save Changes"} </MDBBtn>
</div> 

<ScrollBar style={{height:"auto",minHeight:"45vh"}}>
{isLoadingQuizData && <>
{[1,2,3,4].map((e:any,i:number)=>{
    return (<CardSkeleton key={i}/>)
})}
</>}
{!isLoadingQuizData &&  quizData.map((e:any,i:number)=>{
return (<div key={i} onClick={()=>{
   setIndex(i)
}} style={{gap:10}} className='question d-flex align-items-center justify-content-between'>
<div className='d-flex align-items-center' style={{gap:10}}><span className='circle' >1</span>
<p>
    {e.question}
    <br/><small style={{color:"var(--our-blue)"}}>{e.options.length} options</small>
</p>
</div>


<div>
    <IconButton onClick={()=>{
        quizData.splice(i,1);
        setQuizData([...quizData]);
        toast.success("Quiz question deleted successfully")
    }}>
    <Trash2 />
    </IconButton>
</div>
{/* <IconButton><Trash/></IconButton> */}
    </div>)
})}
</ScrollBar>
<br/>


<div className=''>
    
    <div style={{width:"80%"}}>
        <MDBTextArea value={newQuestion?.question} onChange={(e)=>{
const {target:{value}}=e;
setNewQuestion({...newQuestion,question:value})
        }}  label='Enter new question'>

        </MDBTextArea>
    </div>
    <br/>
    <MDBBtn onClick={()=>{
        if(newQuestion.question.length > 4){
        if(!selectedQuiz.title){
            console.log(selectedQuiz);
            return toast.error("Please select a quiz")
        }
            quizData.push(newQuestion);
            setQuizData([...quizData])
            setNewQuestion(
                {
                    question:"",
                    options:[]
                })
        }
        else{
            toast.error("Please enter a valid question")
        }
    }} rounded color='dark' style={{background:"var(--our-blue)",display:'0 auto',margin:"0 auto"}}>Add question</MDBBtn>
</div>

        </div>

</div>


        </>
    )
}

export default QuizQuestionAdder;