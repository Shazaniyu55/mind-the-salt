import React, { use, useEffect, useState } from 'react'
import "@/styles/sideNav.css";
import LogoAndText from '@/utils/LogoAndText';
import { Divider, IconButton } from '@mui/material';
import ScrollBar from 'react-perfect-scrollbar';
import { MdAssessment, MdDashboard, MdOutlineFitnessCenter, MdQuiz } from 'react-icons/md';
import { BiHealth, BiMicrochip } from 'react-icons/bi';
import { BookOpen } from 'react-feather';
import { GrGroup } from 'react-icons/gr';
import { GrTime } from 'react-icons/gr';
import ResponsiveImage from '@/utils/ResposiveImage';
import { MDBBtn } from 'mdb-react-ui-kit';
import Bold from '@/utils/Bold';
import useInnerWidth from './pub/Hooks/useInnerWidth';
import {usePathname} from 'next/navigation'
import { useRouter } from 'next/router';

interface Props{
    setShow?:(prop:any)=>void
}
const SideNav:React.FC<Props>=({setShow})=>{
    const route=useRouter();
  const pathName=usePathname();
  useEffect(()=>{
    setSideNavs([
        
            {
                isActive:pathName=='/' || pathName=='/dashboard',
                name:"Dashboard",
                icon:<MdDashboard size={20}/>,
                onClick:function(){
                route.push('/dashboard');
                    markAsSelected(this)
                }
            },
            {
                isActive:pathName=='/risk-assessment' || pathName=='/HypertensionRiskDetectionResult',
                name:"Hypertension Assessment",
                icon:<MdAssessment size={20}/>,
                onClick:function(){
                    route.push("/risk-assessment")
                  
                    markAsSelected(this)
                }
            },
            
{
    isActive:pathName?.includes("/bmi-test"),
    name:"BMI Calculator",
    icon:<MdOutlineFitnessCenter size={20}/>,
    onClick:function(){
        route.push("/bmi-test")
        markAsSelected(this)
    }
},
            // {
            //     isActive:pathName?.includes("/health-monitor"),
            //     name:"Health  Monitor",
            //     icon:<BiHealth size={20}/>,
            //     onClick:function(){
            //         route.push("/health-monitor")
            //         markAsSelected(this)
            //     }
            // },

            // {
            //     isActive:pathName?.includes("/test"),
            //     name:"Run Test",
            //     icon:<BiHealth size={20}/>,
            //     onClick:function(){
            //         route.push("/test")
            //         markAsSelected(this)
            //     }
            // },

            {
                isActive:pathName?.includes("quiz"),
                name:"Game",
                icon:<MdQuiz size={20}/>,
                onClick:function(){
                    console.log("Quiz health...");
                    route.push("/quiz")
                    markAsSelected(this)
                }
            },
            {
                isActive:pathName?.includes('/learn')  || pathName?.includes('/blogReader'),
                name:"Education",
                icon:<BookOpen size={20}/>,
                onClick:function(){
                    route.push("/learn")
                    markAsSelected(this)
                }
            }
            ,
            {
                isActive:pathName?.includes('/community'),
                name:"Community",
                icon:<GrGroup size={20}/>,
                onClick:function(){
                route.push("/community");
                    markAsSelected(this)
                }
            },

            {
                isActive:pathName?.includes('/salttracker'),
                name:"Salt Tracker",
                icon:<GrTime size={20}/>,
                onClick:function(){
                route.push("/salttracker");
                    markAsSelected(this)
                }
            }
        
    ])
  },[pathName])
const [sideNavs,setSideNavs]=useState<any>([  {
    isActive:false,
    name:"Dashboard",
    icon:<MdDashboard size={20}/>,
    onClick:function(){
    route.push('/dashboard');
        markAsSelected(this)
    }
},
{
    isActive:pathName?.includes("/risk-assessment"),
    name:"Hypertension Assessment",
    icon:<MdAssessment size={20}/>,
    onClick:function(){
        route.push("/risk-assessment")
        markAsSelected(this)
    }
},
{
    isActive:pathName?.includes("/bmi-test"),
    name:"BMI Test",
    // icon:<MdAssessment size={20}/>,
    icon:<MdOutlineFitnessCenter size={20}/>,

    onClick:function(){
        route.push("/bmi-test")
        markAsSelected(this)
    }
},


// {
//     isActive:pathName?.includes("/health-monitor"),
//     name:"Health  Monitor",
//     icon:<BiHealth size={20}/>,
//     onClick:function(){
//         route.push("/health-monitor")
//         markAsSelected(this)
//     }
// },

// {
//     isActive:pathName?.includes("/test"),
//     name:"Run Test",
//     icon:<BiHealth size={20}/>,
//     onClick:function(){
//         route.push("/test")
//         markAsSelected(this)
//     }
// },
{
    isActive:false,
    name:"Quiz",
    icon:<MdQuiz size={20}/>,
    onClick:function(){
        console.log("Quiz health...");
        route.push("/quiz")
        markAsSelected(this)
    }
},
{
    isActive:false,
    name:"Learn",
    icon:<BookOpen size={20}/>,
    onClick:function(){
        console.log("Learn...")
        markAsSelected(this)
    }
}
,
{
    isActive:false,
    name:"Community",
    icon:<GrGroup size={20}/>,
    onClick:function(){
        console.log("Community...")
        markAsSelected(this)
    }
},


{
    isActive:false,
    name:"Salt Tracker",
    icon:<GrTime size={20}/>,
    onClick:function(){
        console.log("Salt Tracker...")
        markAsSelected(this)
    }
},



])

const markAsSelected=(nav:any)=>{
    const newNav=sideNavs.map((e:any,i:number)=>{
        if(e.name==nav.name){
            e.isActive=true
        }
        else {
            e.isActive=false
        }
        return e;
    })
    setSideNavs([...newNav]);
}
useEffect(()=>{

},[sideNavs]);
const width=useInnerWidth();
return (<div className='sideNavContainer menu'>
    
<ScrollBar style={{maxHeight:"100vh",maxWidth:width > 700 ? "20vw":undefined}} >
{width > 700 && <div style={{paddingBottom:5}}>
        
<LogoAndText/>
</div>}

<Divider/>
<br/>
{sideNavs.map((e:any)=>{
return (<div onClick={()=>{
 if(setShow)setShow(false);
    e.onClick()
}} key={e.name} className={`listItem ${e.isActive ? 'active':''} d-flex align-items-center `}>
   {e.isActive && <div className='activeIndicator'></div>} 
  <IconButton >  {e?.icon}</IconButton>

    <span>{e?.name}</span>
</div>)
})}

<br/>
<div className='sideNavMessage'  style={{maxWidth:"100%",margin:"0 auto"}}>

<Bold style={{color:'var(--red-d-1)'}}>{`Maintain a Healthy Weight`}</Bold>
<p>{`Losing excess weight can significantly reduce blood pressure and improve heart health.`}</p>

<div><MDBBtn size='sm' style={{background:'var(--red-d-1)',width:"100%"}} rounded>Learn more</MDBBtn></div>
</div>


</ScrollBar>
</div>)
}

export default SideNav;