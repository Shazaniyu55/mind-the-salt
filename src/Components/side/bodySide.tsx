"use client"

import React, { useEffect, useState } from 'react'
import Activities from '../dashboard/activities';
import AssessmentInstructions from '../RiskAssessment/instructions';
import SideBlogsLink from '../blogs/sideLinks';
import CreatePost from '../community/PostQuestion';
import Profile from '../profile/main';
import QuizNotice from '../quiz/quizNotice';
import { usePathname, useSearchParams } from 'next/navigation';
import AdminIntroductions from '../admin/adminNotice';

const BodySide:React.FC=()=>{
    const pathName=usePathname();
    const searchParams = useSearchParams();
   
const [sideComponent,setSideComponent]=useState<any>()
useEffect(()=>{
 
  
switch(pathName){
case "/dashboard":
setSideComponent(<Activities/>)
break;
case "/risk-assessment":
setSideComponent(<AssessmentInstructions/>)
break;
case "/Education":
case "/Education":
setSideComponent(<SideBlogsLink/>)
break;
case "/quiz":
setSideComponent(<QuizNotice/>)
break;
case "/community":
case "/community-question-expand":

setSideComponent(<CreatePost/>)
break;
case "/admin":
setSideComponent(<AdminIntroductions/>)
    break;
}
if(searchParams?.get("profile")=='true'){
setSideComponent(<Profile/>)
}
},[pathName,searchParams]);

    return (
        <>
        
    {sideComponent}
        </>
    )
}

export default BodySide;