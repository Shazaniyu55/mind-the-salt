import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import Bold from '@/utils/Bold';
import { highRisk, lowRisk, moderateRisk, veryHighRisk } from './resultAdvice';
import ScrollBar from 'react-perfect-scrollbar';
import { MDBBtn } from 'mdb-react-ui-kit';
import { ActivitiesChart, ActivitiesInterface } from '../dashboard/features.interface';
import { getCurrentTimestamp } from '@/Logics/DateFunc';
import { DashboardProps } from '../dashboard/initUser';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setDashboard } from '@/features/dashboard';
import { DayAndMonth, getDayOfWeek } from '@/Logics/date';
import useActivitySetter from '../hooks/useActivitySetter';
import useDashboardCardSettings from '../hooks/useDashboardCardsSetters';


const AssessmentResult:React.FC=()=>{
    const [score,setScore]=useState<number | string >()
    const route=useRouter();
    const once=useRef(false);
    const {updateCardNumber}=useDashboardCardSettings();
    const [heading,setHeading]=useState<string | React.ReactElement>("");
    const [html,setHtml]=useState<string>(``);
    const {setNewActivity}=useActivitySetter();
    useEffect(()=>{
        const score=window.sessionStorage.getItem('hypertensionRiskDetectionScore');
        console.log({score})
        if(!score){
            route.back();
        }
        else{//save activitie as 20
            getAdvice(score)
        setScore(score)
        }

        if(!once.current){
            once.current=true;
            //save activitiy
        }
    },[])


      
    function getAdvice(score:any){
        if(score < 10){
setHeading(<Bold style={{color:undefined}}>Low risk</Bold>);
setHtml(lowRisk)
        }
        else if(score > 10 && score < 21){
setHeading(<Bold style={{color:'var(--red-d-2)'}}>Moderate Risk</Bold>)
setHtml(moderateRisk)
        }
        else if(score > 21 && score <=30){
            setHeading(<Bold style={{color:'var(--red-d-1)'}}>High Risk</Bold>)
            setHtml(highRisk);
        }
        else if(score > 30){
            setHeading(<Bold style={{color:'var(--red)'}}>Very High Risk</Bold>)
            setHtml(veryHighRisk)
        }

        
      const activity: ActivitiesInterface = {
        heading: 'Hypertension Risk Assessment',
  text: 'You have completed the health assessment. Your Hypertension Risk Score has been calculated. Please review your score and consider the recommended actions.',
        image: '/images/heartDoctor.jpg',
        createdAt: getCurrentTimestamp()
      }
setNewActivity(activity,5);
console.log("updating score activities")

setTimeout(()=>{
    updateCardNumber(score,1)
//window.sessionStorage.removeItem("hypertensionRiskDetectionScore");
    },500)
    }
    return (
        <>

<ScrollBar style={{maxHeight:"80vh"}}>
     <h2 style={{padding:30,textAlign:"center"}}>   <Bold>{"Health Risk Assessment"}</Bold></h2>

       <div className='result' dangerouslySetInnerHTML={{__html:html}}>
        </div>
        <br/>
        <div className='d-flex justify-content-center'>
        <MDBBtn color='dark' rounded onClick={()=>{
            route.push('/risk-assessment')
        }}>Take Another Assessment</MDBBtn>
</div>


        </ScrollBar>

        </>
    )
}

export default AssessmentResult;