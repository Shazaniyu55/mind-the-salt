import React, { useEffect, useState } from 'react';
import './style.css';
import '../generalStye.css';
import { MdElderlyWoman } from 'react-icons/md';
import CommunityQuestion, { CommunityQuestionSkeleton } from './communityQuestion';
import Bold from '@/utils/Bold';
import ScrollBar from 'react-perfect-scrollbar';
import { docQr } from '@/Logics/docQr';
import { Post } from './community.interface';
import NoData from '@/utils/noData';

import { useDispatch, useSelector } from 'react-redux';
import { setData as setEditorHeaderData } from '@/features/dataSlice';
import { AppDispatch, RootState } from "@/app/store";
import useUser from '../hooks/useUser';
import { closeAllMDBModal, sortObjectsByDate } from '@/Logics/date';
import { MDBBtn } from 'mdb-react-ui-kit';
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
  

const Main:React.FC=()=>{
    const width=useInnerWidth()
const [isLoading_,setIsLoading]=useState<boolean>(true);
const {user,isLoading}=useUser()
const [data,setData]=useState<Post[]>([]);
const [error,setError]=useState<string>();
const editorHeading = useSelector((state: RootState) => state.data.data);

const getQuestions=async (user:any)=>{
    setIsLoading(true);
try{
    const data=await docQr("CommunityQuestions",{
    
    max:100,
    whereClauses:[
        {
            field:"profile",
            operator:"!=",
            value:""
        }
    ]
})
setData(sortObjectsByDate(data).reverse());
}
catch(err:any){
setError(err.error || "Something went wrong")
}
finally{
    setIsLoading(false);
}
}

const [BodySide_, setBodySide_] = useState<any>(<></>)


useEffect(()=>{
if(!isLoading && user){
    getQuestions(user)
  dispatch(setEditorHeaderData("Create Post"));
}
    else{
console.log("no user",user)
}

///get editor
const getComponent = async () => {
    const { default: BodySide } = await import("../side/bodySide");
    if (width < 1024) setBodySide_(<BodySide />);
}
getComponent();
setShowPostQuestion(false)


setTimeout(()=>{
      closeAllMDBModal()
},800);



},[]);





  
const dispatch: AppDispatch = useDispatch();

const [showPostQuestion,setShowPostQuestion]=useState<boolean>(false);




    return (
        <div className='dashboard' style={{padding:17}}>
            <h3 className='d-flex align-items-center justify-content-between'><Bold>Community Question</Bold> {width < 1024 && <MDBBtn color='dark' rounded size='sm' onClick={()=>{
                setShowPostQuestion(true)
            }} >Post new</MDBBtn>}</h3>
          
            <MDBModal className='mdb-modal' open={showPostQuestion} onClose={() => setShowPostQuestion(false)} >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{editorHeading}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={()=>setShowPostQuestion(false)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                {BodySide_}
                </MDBModalBody>
</MDBModalContent>
</MDBModalDialog>
</MDBModal>

            {isLoading_ ? [1,2,3,4,5].map((e,i)=><div key={i} style={{marginTop:18}}><CommunityQuestionSkeleton/></div>):
<ScrollBar style={{maxHeight:"75vh"}}>
            <div className="myContainer">


            {!isLoading_  && data?.length <= 0 && !error && <div>
<>
<NoData>No question available</NoData>
</>
</div>}

{!isLoading_  && data?.length<=0 && error && <div>
<>
<NoData image='/images/error.png'>{error}</NoData>
</>
</div>}



{
data?.map((e:any,i:number)=>{
    
return (<CommunityQuestion post={e} key={i}/>)

})
}
</div>
<br/><br/>
</ScrollBar> 
}
        </div>
    )
}

export default Main;