import React, { useState } from 'react';
import './style.css';
import '../generalStye.css';
import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Alert } from '@mui/material';
import AssessmentResult from './AssessmentResult';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import AssessmentInstructions from './instructions';
import AssessmentGame from './AssessmentGame';


const Main:React.FC=()=>{
    const width=useInnerWidth();
const [start,setStart]=useState<boolean>(false);
    const [basicModal, setBasicModal] = useState(width < 1200);

  const toggleOpen = () => setBasicModal(!basicModal);
    return (
        <>
         
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Risk Assessment Instructions</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><AssessmentInstructions/></MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
         <div style={{padding:16,borderRight:'1px solid lightgrey'}}>
         {!start ?<>
          <div className='myContainer'>
           <div className='d-flex justify-content-center' style={{maxHeight:width<700?170:250}}><ResponsiveImage containerSize={width <700 ? 200:300} src='/images/girlHeartDevice.png'/></div>
<Bold style={{fontSize:"large",textAlign:"center",display:"block"}}>Take your Hypertension Risk Assessment</Bold>
<div className='d-flex align-items-center justify-content-center' style={{marginTop:7}}>
<Alert title='Note' color='info' style={{maxWidth:'500px'}}>
Take Charge of Your Heart Health: Discover Your Hypertension Risk with Our Comprehensive Assessment. Get Personalized Insights and Recommendations to Manage and Reduce Your Risk Factors – Start Your Journey to Better Health Today!
</Alert>
</div>

     <div className='d-flex align-items-center justify-content-center' style={{marginTop:8}}>
     <MDBBtn style={{maxWidth:"200px",width:"100%"}} rounded color='dark' onClick={()=>{
        setStart(true);
     }}>Get Started</MDBBtn>      </div>
     </div>
           <br/>
           {width < 1200 && <div className='d-flex justify-content-center'><MDBBtn onClick={toggleOpen} color='link'>Show instructions</MDBBtn></div>}<br/>
           </>:<>
         <AssessmentGame/>
         
         {width < 1200 && <><br/><div className='d-flex justify-content-center'><MDBBtn onClick={toggleOpen} color='link'>Show instructions</MDBBtn></div></>}
           </>
        }

           </div>
           </>

    )
}

export default Main;
export {AssessmentResult}