import React, { useEffect, useState } from 'react';
import './style.css';
import '../generalStye.css';
import ResponsiveImage from '@/utils/ResposiveImage';
import Bold from '@/utils/Bold';
import { Camera } from 'react-feather';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Skeleton } from '@mui/material';
import { useRouter } from 'next/router';
import { AddData } from '@/Logics/addData';
import { collection } from 'firebase/firestore';
import { app, db } from '@/firebase.config';
import useUser from '../hooks/useUser';
import { LogOut } from '@/Auth/AuthRoutes';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { DashboardProps } from '../dashboard/initUser';
import { updateData } from '@/Logics/updateData';
import toast from 'react-hot-toast';
import useSyncData from '../hooks/useSyncData';

const Profile:React.FC=()=>{
    const { user, error, isLoading } = useUser();
    const route=useRouter();
    const sync=useSyncData()


const [picture,setPicture]=useState<string>("");
useEffect(()=>{
if(!isLoading && user){
    console.log(user);
  setPicture(user?.picture || "");
  console.log(user ||"")
}
},[user,isLoading])
    return (
        <div className='dashboard'>
            <div className='myContainer'>

                <div className='profilePicture'>
                    <ResponsiveImage containerSize={100} src={isLoading ? "/images/user.png":picture}/>
                    <label><Camera/></label>
                    
                </div>

<div className='d-flex justify-content-center' style={{gap:10}}><Bold style={{textAlign:"center", display:"block"}}>{isLoading ? <Skeleton width={80} style={{borderRadius:3}}/> : user?.name}</Bold>
</div>

<br/>
<div className='profileLi d-flex align-items-center' style={{gap:10}}>
    <Bold>nickname: </Bold>  <span>{isLoading ? <Skeleton width={80} style={{borderRadius:3}}/> : user?.name}</span>
</div>

<div className='profileLi d-flex align-items-center' style={{gap:10}}>
    <Bold>email: </Bold>  <span>{isLoading ? <Skeleton width={80} style={{borderRadius:3}}/> : user?.email}</span>
</div>
<div className='profileLi d-flex align-items-center' style={{gap:10}}>
    <Bold>locale: </Bold>  <span>{isLoading ? <Skeleton width={80} style={{borderRadius:3}}/> : (user?.locale as string)}</span>
</div>

<div className='profileLi d-flex align-items-center' style={{gap:10}}>
    <Bold>first name: </Bold>  <span>{isLoading ? <Skeleton width={80} style={{borderRadius:3}}/> : (user?.given_name as string)}</span>
</div>


<div className='profileLi d-flex align-items-center' style={{gap:10}}>
    <Bold>family name: </Bold>  <span>{isLoading ? <Skeleton width={80} style={{borderRadius:3}}/> : (user?.family_name as string)}</span>
</div>

<MDBBtn style={{width:"100%"}} color="danger" onClick={async ()=>{
   LogOut(async ()=>{
    await sync();
}) 
}} rounded>Log out</MDBBtn>
            </div>
        </div>

    )
}

export default Profile;