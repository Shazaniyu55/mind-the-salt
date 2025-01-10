import toast from "react-hot-toast";
import { DashboardProps } from "../dashboard/initUser";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { updateData } from "@/Logics/updateData";
import { docQr } from "@/Logics/docQr";
import { getDocumentById } from "@/Logics/getDocById";
import { signOut } from "next-auth/react";

export default function useSyncData(){
    const dashboardDataStore:DashboardProps | null | any= useSelector((state: RootState) => {
        return state.dashboard.dashboard
    })

async function sync(){
    const id=toast.loading("Syncing data...")
    if(!dashboardDataStore)return true
    const dashboard:DashboardProps=await getDocumentById("dashboards",dashboardDataStore.docId);
    if(dashboard){
   await  updateData('Dashboards',dashboardDataStore.docId,{
    ...dashboardDataStore,
    notification:dashboard.notification})
    }
    else{
   await  updateData('Dashboards',dashboardDataStore.docId,dashboardDataStore)

    }
        toast.dismiss(id);
   toast.success("Data sync successfully");  
}

return sync;
}