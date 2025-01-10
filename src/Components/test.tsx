'use client';
import React from 'react'
import useUser from './hooks/useUser';
import initUser, { DashboardProps } from './dashboard/initUser';
import { Profile } from './pub/interface';
import { ActivitiesInterface, NotificationInterface } from './dashboard/features.interface';
import { getCurrentTimestamp } from '@/Logics/DateFunc';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import dashboard, { setDashboard } from '@/features/dashboard';
import { AddData } from '@/Logics/addData';
import { db } from '@/firebase.config';
import { collection } from 'firebase/firestore';
import useActivitySetter from './hooks/useActivitySetter';
import toast from 'react-hot-toast';

const Test:React.FC=()=>{
    const {user}=useUser();
    const {setNewActivity}=useActivitySetter();
    const run=async ()=>{
     await AddData(collection(db,"admins"),{
        name:user?.name,
        uid:user?.uid
      })
      toast.success("Set as admin successfully")
      window.location.href="/dashboard";
    }
    return (
        <>
        <br/><br/>
        <button onClick={()=>run()}>click here to make admin</button></>
    )
}

export default Test;
