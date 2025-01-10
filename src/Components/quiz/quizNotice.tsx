import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { Alert } from '@mui/material';
import React from 'react'

const QuizNotice:React.FC=()=>{
return (<>
<br/>
<div className='quizNotice'>
<div className='d-flex justify-content-center'>
<ResponsiveImage containerSize={130} src="/images/quiz-marker.gif"/>
</div>

<Bold style={{textAlign:"center",width:"100%",display:"block",padding:30}}>Play earn up to 100 and be added to our special users for exclusive benefits</Bold>

<Alert color='warning'> <p>{`  Welcome to the Heart Health and Hypertension Quiz Hub! Choose a quiz from the list below to test your knowledge and learn more about your heart and hypertension. Simply select the quiz you want to take, and you'll be directed to the questions. Good luck!
      `}
</p>
</Alert>


</div>
</>)
}

export default QuizNotice;