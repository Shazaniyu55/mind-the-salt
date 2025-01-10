import React, { useState } from 'react';
import Navigation from './navigation';
import './style.css';
import '../generalStye.css';
import Cards from './Cards';
import Activities from './activities';
import ScrollBar from 'react-perfect-scrollbar';
import CommunityList from './communityList';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import Bold from '@/utils/Bold';
import { MDBBtn } from 'mdb-react-ui-kit';
import BigDialog from '@/utils/bigDialog';
import {AddEditAssessments} from '../admin/main';

const Main:React.FC=()=>{
    const width=useInnerWidth();
    const [showEditAssessment,setShowEditAssessment]=useState<boolean>(false);
    return (
        <div className='dashboard'>
            {showEditAssessment && <BigDialog closeBtn={()=>{
                setShowEditAssessment(false);
            }} header={"Edit and Add assessments"} ><AddEditAssessments/></BigDialog>}


        <ScrollBar style={{maxHeight:"80vh"}}>
        <div className='dashboardMain' style={{padding:10}}>
<Cards/><br/>
<CommunityList/>
{width < 1030 && <>
<br/>
<Activities/>
<br/><br/>

<div className='sideNavMessage'  style={{maxWidth:"100%",margin:"0 auto"}}>

<Bold style={{color:'var(--red-d-1)'}}>{`Maintain a Healthy Weight`}</Bold>
<p>{`Losing excess weight can significantly reduce blood pressure and improve heart health.`}</p>

<div><MDBBtn size='sm' style={{background:'var(--red-d-1)',width:"100%"}} rounded>Take a quiz</MDBBtn></div>
</div>

</>}
        </div>
        </ScrollBar>


        </div>
    )
}

export default Main;