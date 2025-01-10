import React, { useEffect, useState } from 'react'
import Stepper from "@keyvaluesystems/react-stepper";
import Bold from '@/utils/Bold';
import { Avatar, Divider } from '@mui/material';
import Chip from '@mui/material/Chip';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import { MdDomainVerification, MdDone } from 'react-icons/md';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import {assessmentGameData} from '../../data/assessmentGame'
import toast from 'react-hot-toast';
import ScrollBar from 'react-perfect-scrollbar';
import { getBreakPoints, getDivision } from '@/Logics/date';
import { getSingleDoc } from '@/Logics/getDoc';
import {  Heart } from 'react-feather';
import { BiCheckDouble } from 'react-icons/bi';
import {HypertensionRiskCalculator} from './resultCalculator';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

const AssessmentGame:React.FC=()=>{
  const route=useRouter();
    const width=useInnerWidth();
    const [countBy,setCountBy]=useState<number>(5);
    const [countStart,setCountStart]=useState<number>(1);
    const [answersStore,setAnswerStore]=useState<any>({});
    const [questionsStore,setQuestionsStore]=useState<any>({});
    const [data,setData]=useState<any>([]);
    const [stepNumber,setStepNumber]=useState<number>(0);
    const [stepNumberBreakPoints,setStepNumberBreakPoints]=useState<number[]>([]);
    // const [stepNumberBreakPointsIndex,setStepNumberBreakPointsIndex]=useState<number[]>([]);
    const [currentSectionIndex,setSectionCurrentIndex]=useState<number>(0);
    const [currentStep,setCurrentStep]=useState(0);
    const [answer1,setAnswer1]=useState<any>(null);
    const [answer2,setAnswer2]=useState<any>(null);

    const [currentSection,setCurrentSection]=useState<any>();

const [isLoading,setIsLoading]=useState<boolean>(true);
    async function getAssessments(){
      setIsLoading(true)
      const data=await getSingleDoc("AssessmentGame");
      if(data.length > 0){
        const questions=data[0];
        if(questions?.docId)delete questions.docId;
        setQuestionsStore(questions);
        const sortedData=Object.values(questions).sort((a:any,b:any)=>a.questions[0].no - b.questions[0].no);
        setData([...sortedData])
        setCurrentSection(sortedData[currentSectionIndex])
        console.log(sortedData);
        setIsLoading(false)
      }    
  }

  useEffect(()=>{
console.log(data);
  },[data])
    const [steps,setSteps] =useState([
        {
          stepLabel: "step 1",
          stepDescription: "",
          completed: false,
        },
        {
          stepLabel: "Step 2",
          stepDescription: "",
          completed: false,
        },
        {
          stepLabel: "Step 3",
          stepDescription: "",
          completed: false,
        },{
            stepLabel: "Step 4",
            stepDescription: "",
            completed: false,
          },{
            stepLabel: "Step 5",
            stepDescription: "",
            completed: false,
          }
      ]);
useEffect(()=>{
  if(width < 700){
    setCountBy(3)
    
setStepNumber(getDivision(3,data.length))
setStepNumberBreakPoints(getBreakPoints(3,data.length))
  }
  else{
    
setStepNumber(getDivision(5,data.length))
setStepNumberBreakPoints(getBreakPoints(5,data.length))
  }
  const steps=data.map((e:any,i:number)=>{
return  {
  stepLabel: "step "+(i+1),
  stepDescription: "",
  completed: false,
}
  })
setSteps(steps);


},[]);

useEffect(()=>{
  getAssessments()
},[])

const Next=()=>{
if(!(answer1 && answer1.name && answer2 && answer2.name)){
return toast.error("Please select the right answer")
}
const nextStep=currentSectionIndex+1;
if(nextStep>=data.length){//final question
  answersStore['section_'+currentSectionIndex]=currentSection;//saved answer
// if(answersStore['section_'+(currentSectionIndex+1)]){
// setAnswer1(answersStore['section_'+(currentSectionIndex+1)].answer1)
// setAnswer2(answersStore['section_'+(currentSectionIndex+1)].answer2)
// }
const my_score=HypertensionRiskCalculator(answersStore);
sessionStorage.setItem("hypertensionRiskDetectionScore",my_score.toString())
  return route.push("/HypertensionRiskDetectionResult")

}

setSectionCurrentIndex(nextStep)
setCurrentStep(currentStep+1);
//saving answer
currentSection.answer1=answer1;
currentSection.answer2=answer2;
answersStore['section_'+currentSectionIndex]=currentSection;//saved answer
if(data['section_'+(currentSectionIndex+1)]){//moving to next question

if(data['section_'+(currentSectionIndex+1)])setAnswer1(data['section_'+(currentSectionIndex+1)].answer1)//next answer 1
  if(data['section_'+(currentSectionIndex+1)])setAnswer2(data['section_'+(currentSectionIndex+1)].answer2)//next answer 2

if(data['section_'+(currentSectionIndex+1)] && data['section_'+(currentSectionIndex+1)]){//use to know the current step and the final step
  if(steps[currentSectionIndex-1])steps[currentSectionIndex+1].completed=true;
  setSteps(steps);
}


}
else{


  setAnswer1(null)
setAnswer2(null)
throw ("function not working properly: data['section_'+(currentSectionIndex+1 is == "+(typeof data['section_'+(currentSectionIndex+1)]));
}







}//end next
   
const Previous=()=>{
  if(!currentSectionIndex)return
setSectionCurrentIndex(currentSectionIndex-1)
setCurrentStep(currentStep-1);

if(answersStore['section_'+(currentSectionIndex-1)])setAnswer1(answersStore['section_'+(currentSectionIndex-1)].answer1)
  if(answersStore['section_'+(currentSectionIndex-1)])setAnswer2(answersStore['section_'+(currentSectionIndex-1)].answer2)


    if(answersStore['section_'+(currentSectionIndex-1)] && answersStore['section_'+(currentSectionIndex-1)]){
    
      if(steps[currentSectionIndex-1])steps[currentSectionIndex-1].completed=true;
      setSteps(steps);
    }





if(stepNumberBreakPoints.includes(currentSectionIndex)){
const numIndex = stepNumberBreakPoints.indexOf(currentSectionIndex);
  const elValue=stepNumberBreakPoints[numIndex-1]?stepNumberBreakPoints[numIndex-1]:0;
  console.log({numIndex,elValue,stepNumberBreakPoints,currentSectionIndex});
  if(elValue!=undefined){
    setCountStart(elValue+1);
    setCountBy(stepNumberBreakPoints[numIndex])
  //  setCurrentStep(currentStep-1 ? currentStep-1:currentStep)
  console.log("my function runs")
  }
 }
}



useEffect(()=>{
setCurrentSection(data[currentSectionIndex]);
//stepper
// if((currentSectionIndex) >= (countBy+(countStart-1))){
//   setCountStart(countBy+1)
//   setCountBy(countBy*2)
//   setCurrentStep(0)
//   console.log("next phase")
// }
if(stepNumberBreakPoints.includes(currentSectionIndex)){
  const brPoint=stepNumberBreakPoints.filter((e:number)=>e===currentSectionIndex)[0];
  // const countBy=stepNumberBreakPoints.indexOf(currentSectionIndex);
  setCountStart(brPoint+1)
  setCountBy(brPoint+(width <700 ? 3:5))
  setCurrentStep(0)
  }

  
},[currentSectionIndex])

const styles = {
  LineSeparator: () => ({
    background: "var(--our-blue)",
  }),
  ActiveNode: () => ({
    background: "var(--our-blue)",
    backgroundColor: "var(--our-blue)",
  }),
  CompletedNode: () => ({
    background: "green",
    color:'white'
}),
Node: () => ({ background:"dimgrey"}),

}

const [showDialog,setShowDialog]=useState<boolean>(false);
if(isLoading){
  return <div style={{padding:20}}>
  <ClipLoader/>
  </div>
}
    return (<>
    
  
  
    <div style={{alignItems:"center",
        minHeight:"80vh",
        display:width > 700?undefined:"flex",
        
    }}>
<ScrollBar style={{maxHeight:"80vh"}}>
  
    <div className='myContainer'>
        <div className='d-flex align-items-center justify-content-between'> 
        <Bold style={{color:"var(--red-d-1)",paddingLeft:30}}>{currentStep === 0? "Hypertension Risk Detector":currentSection?.title}</Bold>
        <MDBBadge color='light' style={{color:"var(--red-d-1)"}}>step {currentSectionIndex+1} of 10 steps</MDBBadge>
</div>

    <Stepper
    renderNode={(step:any,stepIndex:any)=>{
      if(step.completed)return <BiCheckDouble size={16}/>
    return<Heart size={16}/>
    }}
     styles={styles}
    onStepClick={(step:any,stepIndex:number)=>{
//       stepIndex=stepIndex+(countStart-1)
//       if(step.completed){
//         console.log(step);
//       if(Number(step.stepLabel.split(" ")[1]))setSectionCurrentIndex(Number(step.stepLabel.split(" ")[1])-1);
//       console.log(Number(step.stepLabel.split(" ")[1])-1);
     
// if(answersStore['section_'+(stepIndex)]){
//   setAnswer1(answersStore['section_'+(stepIndex)]?.answer1)
//   setAnswer2(answersStore['section_'+(stepIndex)]?.answer2)
//   }
// }
    }}
    orientation='horizontal'
  steps={steps.slice(countStart-1,countBy).map((e:any,i:number)=>{
    if(currentStep > i || i>=data.length){
      e.completed=true
    }
    else{
      e.complete=false;
    }
    return e;
  })}
  currentStepIndex={currentStep}
/>
<br/>

<div style={{padding:'0px 30px',marginTop:"-10px",gap:10}}>
    <div className='d-flex' style={{gap:10}}>
    <Bold>
{currentSection?.questions[0]?.no}
    </Bold>

    <p>
{currentSection?.questions[0]?.question}
{currentSection?.questions[0]?.subText && <span style={{display:"block",color:"dimgray"}}>{currentSection?.questions[0]?.subText}</span>}
    </p>
    </div>



<div className='d-flex' style={{gap:5,maxWidth:"100%",flexFlow:"row wrap"}}>
{currentSection?.questions[0]?.options.map((e:any,i:number)=>(<Chip
key={i}
onClick={()=>{
    setAnswer1(e);
}}
avatar={answer1 ? (e.name==answer1.name? <Avatar src='/images/check.png'/>:undefined):undefined}
  label={e.name}
  deleteIcon={<MdDone/>}
/>)
)
}

</div>

</div>





<br/>

<Divider/>
<div style={{padding:'0px 30px',marginTop:"10px",gap:10}}>


<div className='d-flex' style={{gap:10}}>
    <Bold>
{currentSection?.questions[1]?.no}
    </Bold>

    <p>
{currentSection?.questions[1]?.question}
{currentSection?.questions[1]?.subText && <span style={{display:"block",color:"dimgray"}}>{currentSection?.questions[1]?.subText}</span>}
    </p>
    </div>



<div className='d-flex' style={{gap:5,maxWidth:"100%",flexFlow:"row wrap"}}>
{currentSection?.questions[1]?.options?.map((e:any,i:number)=>(<Chip
key={i}
onClick={()=>{
    setAnswer2(e);
}}
avatar={answer2 ? (e.name==answer2.name? <Avatar src='/images/check.png'/>:undefined):undefined}
  label={e.name}
  deleteIcon={<MdDone/>}
/>)
)
}

</div>




</div>


<br/>

<div className='d-flex justify-content-end' style={{gap:5}} >
  { currentSectionIndex > 0 && <MDBBtn color='dark' onClick={()=>Previous()} style={{background:"var(--red-d-1)"}}>Previous</MDBBtn>}
  <MDBBtn color='dark' style={{background:"var(--our-blue)"}} onClick={()=>Next()}> Next</MDBBtn>

</div>

<br/><br/>







</div>

</ScrollBar>
    </div>
    
    </>)
}

export default AssessmentGame;