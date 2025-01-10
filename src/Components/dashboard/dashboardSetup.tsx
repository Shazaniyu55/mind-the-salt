import React, { useEffect, useRef, useState } from 'react'
import initUser, { DashboardProps } from '@/Components/dashboard/initUser';
import { docQr } from '@/Logics/docQr';
import useUser from '../hooks/useUser';
import { checkDatabaseExists, checkObjectStoreExists, delay, isNetworkError, isOnline } from '@/Logics/date';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { AppDispatch, RootState } from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { setDashboard } from '@/features/dashboard';
import { useIndexedDB } from '@/Logics/indexDB';
import { updateData } from '@/Logics/updateData';
import { Profile } from '../pub/interface';
import { setIsAdmin } from '@/features/isAdmin';
const DashboardSetup:React.FC=()=>{
    
const once=useRef(false);
const {user,isLoading}=useUser();
const route=useRouter();
const [dashboardData,setDashboardData]=useState<DashboardProps>();
const dispatch:AppDispatch=useDispatch()
const {addObject, getAllObjects, updateObject, deleteObject}=useIndexedDB("HeartAfricaDB",'dashboard')
const dashboardDataStore:DashboardProps | null | any= useSelector((state: RootState) => {
    return state.dashboard.dashboard
})
useEffect(()=>{
updateObject(1,dashboardDataStore)
},[dashboardDataStore])
const asyncDashboard = async (serverDashboard:DashboardProps)=>{
    console.log("running sync")
const dbExists=await checkDatabaseExists("HeartAfricaDB");
const storeExists=await checkObjectStoreExists("HeartAfricaDB","dashboard")
if(dbExists && storeExists){

//the one locally must be the one with changes so just update server
getAllObjects((result)=>{
if(result.length==0){
addObject(serverDashboard);
}
else{
    //send data to server
    const dashboard={...result[0],notification:serverDashboard.notification};
    const id=toast.loading("Syncing data...",{position:'bottom-right'})
     updateData('Dashboards',dashboard.docId,dashboard).then(()=>{
        toast.dismiss(id);
   toast.success("Data sync successfully",{position:"bottom-right"});   
})
dispatch(setDashboard(dashboard));
console.log("data has some changes on the localhost checkout and was updated",dashboard)
}
});
}
else{
addObject(serverDashboard);
}
console.log("end running sync")

}


const getDashboard = async (userObj:Profile) => {

    try {
    console.log("calling dashboard")
once.current=true

        const data = await docQr("Dashboards", {
            max: 1,
            whereClauses: [
                {
                    field: "userId",
                    operator: "==",
                    value: userObj?.sid // Ensure user.sid exists before accessing it
                }
            ]
        });
        
        // Check if data is empty or undefined
        if (!data || data.length === 0 ) {
            // Initialize user
            if(isOnline() && !isLoading)await initUser(userObj,dispatch);
            else {
                toast.error("Poor internet connection,will try again in 3 secs");
                console.log("Poor internet connection,will try again in 3 secs",userObj,isLoading)
                await delay(3000)
                getDashboard(user);
            }
        } else {
            // Data found, process it
            const dashboard: DashboardProps = data[0];
            console.log("Dashboard data retrieved successfully:", dashboard);
            dispatch(setDashboard(dashboard))
            setDashboardData(dashboard);
           console.log("dashboard dispatched successfully")
        }
    } catch (error:any) {
        console.error(error.message || "Something went wrong"); // Log error message
        // Retry only for network-related errors after a delay
        if (isNetworkError(error)) {
            const id=toast.loading("Error : Retrying after 1 seconds...");
            await delay(1000); // Delay for 3 seconds
            toast.dismiss(id);
             getDashboard(user); // Retry fetching dashboard data
        } else {
           // route.push("/ReportError");
           console.log("report error now")
        }
    }
};
const verifyAdmins=async (user:Profile)=>{
   const result=await docQr("Admins",{
        max:1,
        whereClauses:[
            {
                field:'sid',
                operator:'==',
                value:user.sid
            }
        ]
    });
   // console.log("verify admin result",result);
        if(result?.[0]){
        if(result.length==1)dispatch(setIsAdmin(true))
    }
}

useEffect(()=>{
if(!once.current){
if(user && !isLoading){
    getDashboard(user);
    verifyAdmins(user);
}
}
else{
console.log("once already called")
}
},[isLoading,user]);
useEffect(()=>{
    if(dashboardData && dashboardData.docId){
        delay(3000).then(()=>{
            asyncDashboard(dashboardData);
        })
    }
},[dashboardData])

    return (
        <>
       {/* <button onClick={()=>{
        if(dashboardData)asyncDashboard(dashboardData)
       }}>
async dashboard test
       </button> */}
        </>
    )
}

export default DashboardSetup;