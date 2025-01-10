import { questionsProps, quizBody, quizData } from '@/data/quizData';
import Bold from '@/utils/Bold';
import { Divider, IconButton } from '@mui/material';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Circle } from 'react-feather';
import { BiArrowBack} from 'react-icons/bi';
import Score from './score';
import { docQr } from '@/Logics/docQr';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import GameSkeletonLoader from './gameGame';
import swal from 'sweetalert';
import useDashboardCardSettings from '../hooks/useDashboardCardsSetters';

const QuizGame:React.FC=()=>{

    const [index,setIndex]=useState<number>(0)
    const route=useRouter()
const [isLoading,setIsLoading]=useState<boolean>(true)
const [timeLeft,setTimeLeft]=useState<number>(20)
const {updateCardNumber}=useDashboardCardSettings();

    const [bodyQuiz,setBodyQuiz]=useState<quizBody>({
            questions:[{
                question:"What phase of the cardiac cycle involves the heart muscles contracting to pump blood?",
                options:[
                    {
                        name:"Diastole",
                        type:"",
                        isSelected:false
                    },{
                        name:"Systole",
                        type:"",
                        isSelected:false
                    },{
                        name:"Hypotension",
                        type:"",
                        isSelected:false
                    },{
                        name:"Hypertension",
                        type:"",
                        isSelected:false
                    }
                ]
            },
            {
                question:"Hypertension often shows clear and obvious symptoms.?",
                options:[
                    {
                        name:"True",
                        type:"",
                        isSelected:false
                    },{
                        name:"False",
                        type:"",
                        isSelected:false
                    }
                ]
            }
        
        
        
        
        ],
            quiz:quizData[0],
        })
        const [showScore,setShowScore]=useState<boolean>(false);
        const [showQuizAdder,setShowQuizAdder]=useState<boolean>(false);

      async  function getQuizQuestionsData(quizId:string){
        const data:any=await docQr("quizQuestionsData",{
            max:100,
            whereClauses:[{
                field:"quizId",
                operator:"==",
                value:quizId 
            }]
        })
        const quiz=await docQr("Quiz",{
            max:1,
            whereClauses:[
            {
                field:'quizId',
                operator:"==",
                value:quizId
            }
            ]
        })
        if(data?.[0]?.data){
            bodyQuiz.questions=data[0].data
        }
        else{
            route.back();
        return    toast.error("This quiz is empty")

        }
        if(quiz?.[0]){
            bodyQuiz.quiz
        }
        else{
            route.back();
return toast.error('fail fetch quiz details please try again');
        }
        setBodyQuiz({...bodyQuiz,questions:data[0]?.data,quiz:quiz[0]});
   
        const yes=await swal({
            title:"Are you ready?",
            text:'This quiz start immediately after this dialog',
            buttons:['Later','Start Quiz']
      })

        if(yes){
updateCardNumber(1,3);
            
    startQuiz();
            
        }
        else{
            toast.error("Quiz declined by user");
            route.back();
        }
    }
    async  function getQuiz(quizId:string){
        const data:any=await docQr("Quiz",{
            max:100,
            whereClauses:[{
                field:"quizId",
                operator:"==",
                value:quizId 
            }]
        })
        if(data?.[0])bodyQuiz.quiz=data[0]
    }

async function getQuizList(quizId:string){
    setIsLoading(true)
    await getQuiz(quizId)
    await getQuizQuestionsData(quizId)
    setIsLoading(false)

}


useEffect(()=>{
    const params = new URLSearchParams(window.location.search) 
  const quizId=params.get("quizId");
if(quizId){
    getQuizList(quizId)
}
else{
    toast.error("please select a quiz to play")
    route.push("/game")
}
},[route])
const [intervalId,setIntervalId]=useState<any>()
const startQuiz=async ()=>{
   const intervalId=setInterval(()=>{
    console.log("interval runs");
    setTimeLeft((prevValue:number)=>{
if(prevValue>0){

    return prevValue-1
}
else{
    Next(true);
    return 20;
}
   })

},1000);
setIntervalId(intervalId);
}

useEffect(()=>{
return ()=>{
    console.log("clear interval called")
    clearInterval(intervalId);
}
},[intervalId])
const Next=(force?:boolean)=>{
    const SelectedAnswer=bodyQuiz.questions[index].options.filter((e)=>e.isSelected)
    const noSelectedAnswer=SelectedAnswer.length==0;
    if(noSelectedAnswer && !force)return toast.error('Please select the right answer');
   if(index < bodyQuiz.questions.length-1){
    // mark as correct or wrong
setIndex(index+1)

if (SelectedAnswer?.[0].isAnswer) {
    toast.success('Correct, +5');
    setScore(score+5)
    navigator.vibrate(200); // Vibrate for 200 milliseconds on correct answer
} else {
    toast.error("Wrong answer");
    navigator.vibrate([100, 50, 100]); // Vibrate pattern for wrong answer: vibrate 100ms, pause 50ms, vibrate 100ms
}


setTimeLeft(20);  
} 
   else{
 
 
if (SelectedAnswer?.[0].isAnswer) {
    toast.success('Correct, +5');
    setScore(score+5)
    navigator.vibrate(200); // Vibrate for 200 milliseconds on correct answer
} else {
    toast.error("Wrong answer");
    navigator.vibrate([100, 50, 100]); // Vibrate pattern for wrong answer: vibrate 100ms, pause 50ms, vibrate 100ms
}


    setShowScore(true);
    clearInterval(intervalId)
   }
}
useEffect(()=>{

},[index])

const [score,setScore]=useState<number>(0);


return (
        <>


        {showScore ? <Score quizData={bodyQuiz.quiz} questions={bodyQuiz.questions} score={score}/>: 
       isLoading ? <GameSkeletonLoader/>:<div style={{padding:10}}>
<div className='game myContainer'>
    <div className='d-flex align-items-center justify-content-between' style={{padding:10}} >
<Bold style={{gap:10,display:'flex',alignItems:'center',color:"var(--red-d-1)"}}><IconButton onClick={async ()=>{
  const yes = await swal({
    title: "Are you sure you want to exit?",
    icon: "warning",
    text: "You might lose your progress, and your score is only recorded if you complete the quiz.",
    buttons:['Stay',"Exit quiz"]
});

    if(yes)route.push('/quiz')
}}><BiArrowBack/></IconButton> {bodyQuiz.quiz.name}</Bold>

<div>
    <div className='d-flex' style={{gap:10}}>
    <Bold>      <MDBBadge color='info'> {timeLeft} Secs Left</MDBBadge></Bold>
<Bold>     <MDBBadge color='dark' style={{background:'var(--our-blue)'}}>score : {score}</MDBBadge></Bold>
</div>

<MDBBadge style={{width:'100%'}} color="secondary">(1:00) {index+1} of {bodyQuiz.questions.length} questions</MDBBadge>
</div>

    </div>
<Divider/>
<div className='w3-padding' style={{padding:10,borderRadius:10}}>
<Bold style={{color:"var(--our-blue)",fontSize:"larger"}}>
{bodyQuiz.questions[index].question}
</Bold>
</div>


{bodyQuiz.questions[index].options.map((e:any,i:number)=>(<div className='quiz-option d-flex' onClick={()=>{
    bodyQuiz.questions[index].options=bodyQuiz.questions[index].options.map((e:any,click_i:number)=>{
        if(click_i==i){
            e.isSelected=true;
        }
        else{
            e.isSelected=false;
        }
return e;
    })
    setBodyQuiz({...bodyQuiz});
    console.log("..d....")
}} key={i} style={{border:"1px solid var(--our-grey)",padding:10,borderRadius:10,gap:8,marginTop:2}}>
{e.isSelected ? <Circle fill='var(--red-d-1)' color='var(--our-blue)'/>:<Circle color='var(--our-blue)'/>}
<div>{e.name}</div>
</div>))}




<br/><br/>

<div className='d-flex justify-content-end ' style={{gap:6}}>
    <MDBBtn onClick={()=>{
  if(index > 0){
    setIndex(index-1)
           } 

    }} color='dark' style={{background:"var(--our-blue)"}}>Prev </MDBBtn>
    <MDBBtn  onClick={()=>Next()}>Next </MDBBtn>
</div>
</div>


<br/><br/>
</div>}

        </>
    )
}

export default QuizGame;