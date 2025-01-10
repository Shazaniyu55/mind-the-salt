export interface NotificationInterface{
    heading:string,
    sentAt:string,
    body:string,
    logo:"/images/notification.png" | string,
    toFCMToken?:string,
    sendFCMWhen?:string,
    FCMSent?:string,
    userId:string,
    read:boolean,
    link?:string,
    readAt:string
}

export interface ActivitiesInterface{
    heading:string,
    text:string,
    image:string,
    createdAt:string
}
export interface ActivitiesChart{
    day:"Sunday"|"Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Monday",
    date:string,
    score:number
}