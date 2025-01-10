import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import '../generalStye.css';
import IntroCard from './introCard';
import { Divider, IconButton } from '@mui/material';
import Card from '@/utils/card';
import ScrollBar from 'react-perfect-scrollbar';
import { useRouter } from 'next/router';
import BigDialog from '@/utils/bigDialog';
import {QuizListEditor} from '../admin/main';
import CardSkeleton from '@/utils/cardSkeleton';
import { getSingleDoc } from '@/Logics/getDoc';
import NoData from '@/utils/noData';
import { docQr } from '@/Logics/docQr';
import { MDBBtn } from 'mdb-react-ui-kit';
import useUser from '../hooks/useUser';
import { Trash2 } from 'react-feather';
import swal from 'sweetalert';
import { deleteData } from '@/Logics/deleteData';
import { quizProps } from '../admin/quizEditorListEditor';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
const Main:React.FC=()=>{

const [quizList,setQuizList]=useState<any>()
const [isLoading,setIsLoading]=useState<boolean>(true);
const route=useRouter()
useEffect(()=>{

},[quizList]);
const isAdmin=useSelector((state:any)=>state.isAdmin.isAdmin);
const once:any=useRef(false)
const fetchQuiz=async ()=>{
    console.log("fetching quiz...")
    setIsLoading(true)
    const data=await docQr("Quiz",{
        max:100,
        whereClauses:[
            {
                field:"name",
                operator:"!=",
                value:""
            }
        ]
    })
    console.log({data});
    setQuizList(data.map((e)=>{
        return ({
            ...e,
            message:e.name
        })
    }));
    setIsLoading(false);
}

useEffect(()=>{
  if(!once.current){
    fetchQuiz();
    once.current=true
  }

},[]);
const deleteQuiz=async (quiz:quizProps,callback:any)=>{
    if(!isAdmin)return false
    const willDelete = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this quiz?, will be permanently delete",
        icon: "warning",
        buttons:["No","Delete"],
        dangerMode: true,
      });
       
      if (willDelete) {
        const deleteId=toast.loading("deleting quiz");
        try{
      await  deleteData("Quiz",quiz?.docId||"")
      toast.success("delete successful")
      if(callback)callback()
        }
        catch(err:any){
            toast.error(err?.message || "Something went wrong")
        }
        finally{
            toast.dismiss(deleteId);
        }
    }
}
    return (
        <div className='dashboard'>



            <div style={{padding:"10px"}}>
        <IntroCard/>
        </div>
        <Divider/>
<ScrollBar style={{maxHeight:"60vh"}}>
        <div style={{padding:10}}>
<div className='myContainer' style={{padding:10}}>
{!isLoading && quizList.length ==0 && <>
<NoData>No Quiz available </NoData>
</>}
{!isLoading && quizList.map((e:any,i:number)=>{
    // console.log(e.image)
return (<Card button={isAdmin ? <IconButton onClick={()=>deleteQuiz(e,()=>{
    quizList.splice(i,1);
    setQuizList([...quizList]);

})}><Trash2 /></IconButton>:undefined} message={e.type} className='quizCard' onClick={()=>{
    route.push("quiz-game?quizId="+e.quizId)
}} style={{boxShadow:"none",borderRadius:"10px",border:"1px solid var(--our-grey)"}} key={i} image={e.image}  title={e.title}/>)
})}


{isLoading && [1,2,3,4].map((e:any,i:number)=>{
return (<CardSkeleton key={i}/>)
})}


</div>
</div>
</ScrollBar>

    
        </div>
    )
}

export default Main;