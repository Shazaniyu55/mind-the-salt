import { getCurrentTimestamp } from "@/Logics/DateFunc";
import { Profile } from "../pub/interface";
import { ActivitiesChart, ActivitiesInterface, NotificationInterface } from "./features.interface";
import { AddData } from "@/Logics/addData";
import { collection } from "firebase/firestore";
import { db } from "@/firebase.config";
import { Login } from "@/Auth/AuthRoutes";
import { useDispatch } from "react-redux";
import { setDashboard } from "@/features/dashboard";

export interface DashboardProps {

    docId?:string,
    userId: string | undefined;
    dashboardCards: {
        card1: {
            num: number;
            name: string;
            image: string;
            link: string;
        };
        card2: {
            num: number;
            name: string;
            image: string;
            link: string;
        };
        card3: {
            num: number;
            name: string;
            image: string;
            link: string;
        };
        card4: {
            num: number;
            name: string;
            image: string;
            link: string;
        };
    };
    profile: Profile; // Define your profile type here
    notification: NotificationInterface[]; // Define your notification type here
    activities: ActivitiesInterface[]; // Define your activities type here
    activitiesChart: ActivitiesChart[];
    level: {
        level: number;
        levelProgress: string;
        levelUpAt: string;
    };
}

const  initUser=async (user:Profile,dispatch:any)=>{
if(!user?.sid)return console.log(user)
if(!user?.sid)return Login()
//this function should fire immediately once after signup
    const userInitData:DashboardProps={
        userId:user?.sid,
        dashboardCards:{
            card1: {
              num: 0,
              name: 'Assessment score',
              image: "/images/AssessmentScore.png",
              link: "/risk-assessment"
            },
            card2: {
              num: 0,
              name: 'Quiz score',
              image: "/images/quiz-score.png",
              link: "/quiz"
            },
            card3: {
              num: 0,
              name: 'Games',
              image: "/images/game1.png",
              link: "/quiz"
            },
            card4: {
              num: 0,
              name: 'Learn',
              image: "/images/healthcare-and-medical.png",
              link: "/learn"
            }
          },
          profile:user,
          notification:[],
          activities:[],
          activitiesChart:[
            {
                day: "Monday",
                date: getCurrentTimestamp(),
                score: 0
            },
            {
                day: "Tuesday",
                date: getCurrentTimestamp(),
                score: 0
            },
            {
                day: "Wednesday",
                date: getCurrentTimestamp(),
                score: 0
            },
            {
                day: "Thursday",
                date: getCurrentTimestamp(),
                score: 0
            },
            {
                day: "Friday",
                date: getCurrentTimestamp(),
                score: 0
            },
            {
                day: "Saturday",
                date: getCurrentTimestamp(),
                score: 0
            },
            {
                day: "Sunday",
                date: getCurrentTimestamp(),
                score: 0
            }
          ],
          level:{
            level:1,
            levelProgress:"0%",
            levelUpAt:getCurrentTimestamp()
          }
    
    }

    await AddData(collection(db,"Dashboards"),userInitData);
    dispatch(setDashboard(userInitData));
return true
    }

export default initUser;