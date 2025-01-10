'use client'
import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ActivitiesCard from './activitiesCard';
import ScrollBar from 'react-perfect-scrollbar';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import { DashboardProps } from './initUser';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import NoData from '@/utils/noData';
import { ActivitiesInterface } from './features.interface';
// show fetch user activities 
// and render it 
const Activities:React.FC=()=>{
    const width=useInnerWidth();
       const [activities,setActivities]=useState<ActivitiesInterface[]>([]);
const dashboardData:DashboardProps | null | any= useSelector((state: RootState) => {
    return state.dashboard.dashboard
})

    const [ClientComponent,setClientComponent]=useState<any>('');
    useEffect(()=>{
        console.log("client loaded")
if(typeof window=='object'){
    const getActivity=async ()=>{
    const { default: ActivityLineChart }=await import("./ActivityChart");
setClientComponent(<ActivityLineChart/>)
}

getActivity();

}
    },[])

useEffect(()=>{
if(dashboardData){
    setActivities(dashboardData?.activities);
}
console.log(dashboardData);
},[dashboardData])
    return (
    <>
<Bold style={{fontSize:'large'}}>Activities</Bold>
<ScrollBar style={{height:width > 1030 ? "80vh":"auto"}}>
    <div className='myContainer'>
{ClientComponent ? ClientComponent : <p>Loading...</p>}
    </div>
    <br/>
    
    <div className='myContainer'>
<Divider/>
        
   
        {activities.length === 0 && <>
       <NoData image='/images/noActivity.png'>No Activity for the week</NoData> 
        </>}
   {activities.map((e:any,i:number)=>{
    return (
        <ActivitiesCard activity={e} key={i}/>
    )
   })}


    </div>
   </ScrollBar>

    </>
)
}
export default Activities;