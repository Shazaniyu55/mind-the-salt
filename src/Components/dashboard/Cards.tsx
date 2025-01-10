import { useRouter } from 'next/router';
import Card, { CardProps } from './card';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { DashboardProps } from './initUser';
import CardLoader from './CardLoader';

const Cards:React.FC=()=>{

  const dashboardData:DashboardProps | null | any= useSelector((state: RootState) => {
    return state.dashboard.dashboard
});




    // const cards = {
    //     card1: {
    //       num: 100,
    //       name: 'Assessment score',
    //       image: "/images/AssessmentScore.png",
    //       link: "/risk-assessment"
    //     },
    //     card2: {
    //       num: 55,
    //       name: 'Quiz score',
    //       image: "/images/quiz-score.png",
    //       link: "/quiz"
    //     },
    //     card3: {
    //       num: 5,
    //       name: 'Games',
    //       image: "/images/game1.png",
    //       link: "/quiz"
    //     },
    //     card4: {
    //       num: 56,
    //       name: 'Learn',
    //       image: "/images/healthcare-and-medical.png",
    //       link: "/learn"
    //     }
    //   }
      
    return (
        <div className='cards' onDoubleClick={()=>{
          console.log(dashboardData)

        }}>
          {!(dashboardData && dashboardData.dashboardCards) ? <>
            <div className='d-flex justify-content-around'>
           <CardLoader/>
           <CardLoader/>
</div>
<div className='d-flex justify-content-around'>
           <CardLoader/>
           <CardLoader/>
</div>

          </>:
        <><div className='d-flex justify-content-around'>
            <Card {...dashboardData.dashboardCards.card1}/>
            <Card  {...dashboardData.dashboardCards.card2}/>
            </div>


        <div  className='d-flex justify-content-around'>
            <Card  {...dashboardData.dashboardCards.card3}/>
            <Card  {...dashboardData.dashboardCards.card4}/>
        </div>
        </>
        }


        </ div>
    )
}

export default Cards;