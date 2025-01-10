import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { Badge } from '@mui/material';
import { MDBBadge } from 'mdb-react-ui-kit';
import React from 'react'

const IntroCard:React.FC=()=>{
    return (
        <>
        <div className='introCard' style={{padding:10}}>
<div className='d-flex justify-content-between  align-items-center'><Bold style={{color:"white"}}>
{"Mind The Salt Quiz"}
</Bold>
<MDBBadge color='success'>Verified</MDBBadge>


</div>

<br/>
<div className='d-flex align-items-start'>
<h5>
<Bold style={{color:"lightgrey"}}>How much do you know about your heart and Hypertension? Lets find Out!</Bold>
</h5>
<ResponsiveImage src='/images/heart.png' style={{marginTop:'-10px'}} containerSize={120}/>
</div>


        </div>
        
        </>
    )
}

export default IntroCard;