import Card from '@/utils/card';
import { Divider } from '@mui/material';
import React, { useState } from 'react'
import { NotificationInterface } from '../dashboard/features.interface';
import NoData from '@/utils/noData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setDashboard } from '@/features/dashboard';
import { DashboardProps } from '../dashboard/initUser';
import { useRouter } from 'next/navigation';
import { updateData } from '@/Logics/updateData';
import { getTimeAgoString } from '@/Logics/date';

interface Props{
data:NotificationInterface[]
}
const Notifications:React.FC<Props>=({data})=>{
    const route=useRouter()
    const dispatch = useDispatch();
  const dashboardData:DashboardProps | null | any= useSelector((state: RootState) => {
    return state.dashboard.dashboard
});

const makeAsRead = async (notification: NotificationInterface, index: number) => {
    const newDashboard: DashboardProps = {
      ...dashboardData,
      notification: [
        ...dashboardData.notification.slice(0, index), // Copy elements before the updated item
        { ...notification, read: true }, // Update the item
        ...dashboardData.notification.slice(index + 1), // Copy elements after the updated item
      ],
    };
    console.log({link:notification.link})
  dispatch(setDashboard(newDashboard));
if(notification.link)route.push(notification.link);
const update=await updateData('Dashboards',dashboardData.docId,newDashboard);
console.log(update);


  };
  


    return (
        <>
        <Divider/>
        {data.length==0 && <NoData>Notification is empty</NoData>}
        <div style={{padding:10}}>
       {data.map((e,i)=><Card onClick={()=>{
        makeAsRead(e,i);
       }} style={{marginTop:5,borderRadius:4,background:!e.read ? 'lightgrey':undefined}} key={i} image={e.logo} title={e.heading} message={<>{e.body}<small>{getTimeAgoString(e.sentAt)}</small></>}/>)}
        </div>
        </>
    )
}

export default Notifications;