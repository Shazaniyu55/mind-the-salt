import { IconButton } from '@mui/material';
import { MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Trash, Trash2 } from 'react-feather';
import ScrollBar from 'react-perfect-scrollbar';
import {assessmentGameData} from '@/data/assessmentGame'
import { AddData } from '@/Logics/addData';
import { db } from '@/firebase.config';
import { collection } from 'firebase/firestore';
import { updateData } from '@/Logics/updateData';
import { docQr } from '@/Logics/docQr';
import { getSingleDoc } from '@/Logics/getDoc';
import toast from 'react-hot-toast';
import {Circles } from 'react-loader-spinner'
import Bold from '@/utils/Bold';

const AddEditAssessments:React.FC=()=>{
    const [data,setData]=useState<any>([]);

    const [dataIndex,setDataIndex]=useState<number>(0);
    const [question,setQuestion]=useState<any>({});
    const [questionIndex,setQuestionIndex]=useState<number>(0);
    const [docId,setDocId]=useState<string>("")
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const [dataIdentation,setDataIdentation]=useState<any>();
   
    useEffect(()=>{
    getAssessments();
    },[])
    async function getAssessments(){
        const data=await getSingleDoc("AssessmentGame");
        if(data[0]){
        setDocId(data[0].docId);
        setIdentation(data[0]);
        }
        else{
            toast.error("Error while loading...")
        }
    }
    const submit=async ()=>{
        setIsLoading(true);
        try{
        const data_:any={}

        // data.map((e:any,i:number)=>{
        //     data_['section_'+(i+1)]=e;
        // });
        dataIdentation.forEach((e:any,i:any)=>{
data_[e.section]=data[e.index];
        });
console.log(data_);
        const result=await updateData("AssessmentGame",docId,data_)
        toast.success("questions updated successfully")
    }
    catch(error:any){
        toast.error(error?.message || "Something went wrong")
    }
    setIsLoading(false);
    }

    function setIdentation(data:any){
        let props=[];
        let index=0;
        const data_=[];
        console.log({data,before:true})
        for(let i in data){
        if(typeof data[i]=="object"){
            props.push({
                index,
                section:i
            })
            const dataObj={section:i,...data[i]}
            data_.push(dataObj)
index++
        }

        
        }

        console.log({data_,after:true});
        setDataIdentation(props);
        setData(data_.sort((a:any,b:any)=>{
            const a_=a.section.split("_")[1];
            const b_=b.section.split("_")[1];
            return a_ - b_;
        }));
    }
    useEffect(()=>{
   //  setIdentation(assessmentGameData);
    },[]);


    console.log(data);
    return (
        <>
        <div className='addEditAssesments d-flex m-block'>
<div className='questionEditContainer'>
{question.options ? 
<ScrollBar style={{height:"70vh"}}>
<MDBTextArea onChange={(e)=>{
    const value=(e.target as HTMLTextAreaElement).value;
    data[dataIndex].questions[questionIndex].question=value;
    setData(data);
    setQuestion({...question,question:value});
}} value={question?.question}></MDBTextArea>
<br/>
<small>{(data[dataIndex].section) + " "}</small> <small style={{fontSize:"smaller"}}>{data[dataIndex].title}</small>

{question?.options?.map((e:any,i:number)=>(<div className='d-flex align-items-center '  style={{marginTop:10,gap:10}} key={i}>
<div className='circle'>{i+1}</div>
<input placeholder='Enter question name' onChange={(e)=>{
     const value=(e.target as HTMLInputElement).value;
     data[dataIndex].questions[questionIndex].options[i].name=value;
     question.options[i].name=value;
     setData([...data]);
     setQuestion({...question})
     console.log(data,question,value);
}} value={e?.name}/> <IconButton onClick={()=>{
    data[dataIndex].questions[questionIndex].options.splice(i,1);
    question.options.splice(i,1);
    setQuestion({...question});
}}><Trash2/></IconButton></div>))}
<br/>

</ScrollBar>:<>
<div className='d-flex align-items-center text-center' style={{height:100}}>
<Bold style={{display:"block",textAlign:"center"}}>No Question Selected</Bold>
</div>


</>}


<div onClick={()=>{
    // question.options.push({
    //     "type": "select",
    //     "name": ""
    // })
    data[dataIndex].questions[questionIndex].options.push({
            "type": "select",
            "name": ""
    })
    setData([...data]);
   // setQuestion({...question})
}} className='d-flex justify-content-center'><MDBBtn rounded color='dark' style={{background:"var(--our-blue)"}}>Add option</MDBBtn>
</div>



    </div>














    <div className='questionListContainer'>

    <div className='d-flex justify-content-center'><MDBBtn onClick={submit} rounded color='success' >{isLoading ? <Circles
  height="20"
  width="20"
  color="white"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />:"Save Changes"}</MDBBtn>
</div>
<ScrollBar style={{height:"75vh"}}>
{data.map((e:any,i:number)=>{
    const selectedQuestion=question
return e.questions.map((question:any,qIndex:number)=>{
    return (<div onClick={()=>{
        setDataIndex(i);
        setQuestion(question);
        setQuestionIndex(qIndex);
    }} key={i+''+qIndex} style={{gap:10}} className={`question d-flex align-items-center ${question.question===selectedQuestion.question ? 'active':''}`}>
{/* <span className='circle'>{i+1*2}</span> */}
<div>
    {question.question}
    <div className='d-flex' style={{gap:5}}><small style={{color:"var(--our-blue)"}}>{question.options.length} options</small>
    <small style={{color:"var(--our-blue)"}}> {e.section} </small></div>

</div>
{/* <IconButton><Trash/></IconButton> */}
    </div>)
})

})}
</ScrollBar>
<br/>


        </div>

</div>


        </>
    )
}

export default AddEditAssessments;