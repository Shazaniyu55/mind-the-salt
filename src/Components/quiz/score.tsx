import { questionsProps, quizProps } from '@/data/quizData';
import Bold from '@/utils/Bold';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CountUp from 'react-countup';
import useActivitySetter from '../hooks/useActivitySetter';
import useDashboardCardSettings from '../hooks/useDashboardCardsSetters';
import { ActivitiesInterface } from '../dashboard/features.interface';
import { getCurrentTimestamp } from '@/Logics/DateFunc';


interface Props {
    score: number;
    questions: questionsProps[];
    quizData:quizProps
}

const Score: React.FC<Props> = ({quizData, score, questions }) => {
    const route = useRouter();
console.log(score);
    // Calculate the total possible score
    const totalScore = questions.length * 5;

    // Calculate the percentage score
    const percentage = (score / totalScore) * 100;
const once=useRef(false);
const {setNewActivity}=useActivitySetter();
const {updateCardNumber}=useDashboardCardSettings();

const saveActivity=()=>{
    const activity:ActivitiesInterface={
        heading: quizData.name+" Complete quiz",
        text: `You successfully completed a quiz with ${score} scores, well done!`,
        image: "/images/quiz.png",
        createdAt: getCurrentTimestamp()
    }
    setNewActivity(activity,3);
    updateCardNumber(score,2);

}

useEffect(()=>{
if(!once.current){
    once.current=true
saveActivity()
}
},[]);


    return (
        <>
            <div className='d-flex' style={{ height: "80vh", padding: 20 }}>
                <div className='myContainer' style={{ height: "max-content" }}>
                    <div>
                        <br />
                        <div style={{ textAlign: "center", width: 100, height: 100, margin: "0 auto", padding: 15 }} className='scoreCircle'>
                            <Bold style={{ fontSize: "larger" }}>
                                <CountUp end={percentage} />%
                            </Bold>
                        </div>
                    </div>
                    <div className='text-center'>
                        Well done, your score is {score}/{totalScore}
                    </div>
                    <div style={{ padding: 10 }} className='d-flex justify-content-center'>
                        <MDBBtn rounded onClick={() => {
                            route.push("/quiz")
                        }} color='dark' style={{ background: "var(--our-blue)" }}>
                            Take another quiz
                        </MDBBtn>
                    </div>
                    <br /><br />
                </div>
            </div>
        </>
    );
};

export default Score;
