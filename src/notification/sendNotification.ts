import { NotificationInterface } from "@/Components/dashboard/features.interface";
import { DashboardProps } from "@/Components/dashboard/initUser";
import { docQr } from "@/Logics/docQr";
import { updateData } from "@/Logics/updateData";

export default async function sendNotification(userId:string,notificationObj:NotificationInterface){
/**
 * fetch dashboard
 * unshift notification 
 * update dashboard
 */

const dashboardDataQr=await docQr("Dashboards",{
    max:1,
    whereClauses:[
        {
            field:'userId',
            operator:"==",
            value:userId
        }
    ]
});
if(dashboardDataQr.length!=0){
const dashboardData:DashboardProps=dashboardDataQr[0]
//data ready

//push new Notification object
dashboardData.notification.unshift(notificationObj);
//update dashboard
await updateData("Dashboards",dashboardData.docId||"",{...dashboardData});
console.log('notification sent successfully')
}
else {
    return false;
}

}
