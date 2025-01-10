import NoData from '@/utils/noData';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './style.css';
import ResponsiveImage from '@/utils/ResposiveImage';
import Bold from '@/utils/Bold';
import { Book, Edit2 } from 'react-feather';
import { MdCreate } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import BigDialog from '@/utils/bigDialog';
import QuizListEditor from './quizEditorListEditor';
import QuizQuestionAdder from './quiz.questionAdder';



import {

    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { closeAllMDBModal } from '@/Logics/date';
import {AddEditAssessments, CreateBlog} from '../admin/main';

const AdminUI:React.FC=()=>{
    const isAdmin=useSelector((state:any)=>state.isAdmin.isAdmin);
    console.log({isAdmin});
    const route=useRouter()
    
const  [createQuiz,setCreateQuiz]=useState<boolean>(false);
const [showQuizAdder,setShowQuizAdder]=useState<boolean>(false);
const [showCreateBlog,setShowCreateBlog]=useState<boolean>(false);
const [showEditAssessmentDialog,setShowEditAssessmentDialog]=useState<boolean>(false);
if(!isAdmin)return<NoData>No sufficient permission to view this page<br/><MDBBtn onClick={()=>route.push("/")}>Back to app</MDBBtn></NoData>
return (<>
   

   {showQuizAdder &&  <BigDialog header={"Edit/create quiz"} closeBtn={()=>{
    setShowQuizAdder(false);
}}><QuizQuestionAdder/>
    </BigDialog>}



{createQuiz &&  <BigDialog header={"Edit/create quiz"} closeBtn={()=>{
    setCreateQuiz(false);
}}>
    <QuizListEditor successCallback={()=>{
        setCreateQuiz(false);
        
        //probably reload files
    }}/>
    </BigDialog>}



        
    <MDBModal open={showCreateBlog} onClose={() => setShowCreateBlog(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Create new Blog</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={()=>{
                setShowCreateBlog(false)
                setTimeout(()=>{
                  closeAllMDBModal()
                },100);
              }}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

                <CreateBlog uploadSuccessCallback={()=>console.log("upload complated and successful")}/>
</MDBModalBody>
</MDBModalContent>
</MDBModalDialog>
</MDBModal>



{showEditAssessmentDialog &&  <BigDialog header="Edit assessment " closeBtn={()=>{
    setShowEditAssessmentDialog(false)
   }}>
    <AddEditAssessments/>
    </BigDialog>
    }
{/* for admin  */}















    <div style={{padding:15}}>
    <h3><Bold>Admin Settings</Bold></h3>
<div className='adminBoxContainer d-flex ' style={{flexFlow:'row wrap'}}>

<div className='ui_' onClick={()=>{
    setShowEditAssessmentDialog(true)
}}>
   <Edit2 color='var(--our-blue)'  size={30}/><br/>
    <Bold>Edit Assessment List</Bold><br/>
    <MDBBtn rounded>Edit here</MDBBtn>
</div>

<div className='ui_' onClick={()=>{
    setCreateQuiz(true);
}}> 
   <MdCreate color='var(--our-blue)'  size={30}/><br/>
    <Bold>Create Quiz</Bold><br/>
    <MDBBtn rounded>Edit here</MDBBtn>

</div>


<div className='ui_' onClick={()=>{
    setShowQuizAdder(true)
}}>
    <GrAdd color='var(--our=' size={30}/><br/>
    <Bold>Add Quiz Questions</Bold><br/>
    <MDBBtn rounded> Edit here</MDBBtn>
</div>


<div className='ui_' onClick={()=>{
      setShowCreateBlog(true)
}}>
<Book color='var(--our-blue)' size={30}/><br/>
    <Bold>Create new blog</Bold><br/>
    <MDBBtn rounded>Edit here</MDBBtn>

</div>

</div>

    </div>
</>)
}

export default AdminUI