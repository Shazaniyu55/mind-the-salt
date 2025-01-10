import Bold from '@/utils/Bold'
import { Divider } from '@mui/material'
import React from 'react'
import ScrollBar from 'react-perfect-scrollbar'

const AssessmentInstructions:React.FC=()=>{
    return (<>
    <div className='myContainer'>
        <Bold style={{color:"var(--red-d-1)"}}>HYPERTENSION RISK ASSESSMENT QUESTIONNAIRE</Bold>
        <Divider/>
        <ScrollBar style={{maxHeight:"80vh"}}>
        <Bold>Introduction and Disclaimer</Bold>
<p style={{fontSize:'small'}}>
Welcome to our Hypertension Risk Assessment Questionnaire. This tool is designed to help you identify potential risk factors for hypertension, also known as high blood pressure, based on general health information and widely recognised risk factors.
</p>

        <Bold>Please read the following important information before proceeding:</Bold>
<p style={{fontSize:'small'}}>
    <Bold>Guidance Only:</Bold> This questionnaire is intended for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. The results should serve as a guide to understanding how certain lifestyle factors and health history might contribute to your risk of developing hypertension.<br/>
<Bold>Not Medical Advice: </Bold>The information provided by this assessment does not constitute medical advice and should not be used to make any health or medical decisions. Individual risk factors and health outcomes vary widely; this tool cannot take into account all possible personal health details or nuances.
Consult Healthcare Professionals: We strongly encourage you to discuss your results and any health concerns you may have with a qualified healthcare provider. They can offer a comprehensive evaluation and personalised advice based on your specific health needs and medical history.<br/>
<Bold>Privacy and Confidentiality:</Bold> Your responses are confidential, and we do not store any personally identifiable information you provide during the assessment. Please ensure you are in a private setting when completing the questionnaire to maintain your privacy.
</p>
<br/><br/><br/>
</ScrollBar>
    </div>
    </>)
}

export default AssessmentInstructions