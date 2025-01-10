import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import './style.css';
import './saltTracker.css';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SaltTracker: React.FC = () => {
  const [saltIntake, setSaltIntake] = useState<number>(0);
  const [dailyLog, setDailyLog] = useState<{ date: string; amount: number }[]>([]);
  const [error, setError] = useState<string>("");

  const dailyLimit = 6; // Recommended salt intake in grams per day

  const addSaltIntake = () => {
    if (saltIntake <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    const today = new Date().toISOString().split("T")[0]; // Current date
    const updatedLog = [...dailyLog];
    const existingEntry = updatedLog.find((entry) => entry.date === today);

    if (existingEntry) {
      existingEntry.amount += saltIntake;
    } else {
      updatedLog.push({ date: today, amount: saltIntake });
    }

    setDailyLog(updatedLog);
    setSaltIntake(0);
    setError("");
  };

  const chartData = {
    labels: dailyLog.map((entry) => entry.date),
    datasets: [
      {
        label: "Salt Intake (g)",
        data: dailyLog.map((entry) => entry.amount),
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  useEffect(() => {
    // Warn if daily limit is exceeded
    const today = new Date().toISOString().split("T")[0];
    const todayEntry = dailyLog.find((entry) => entry.date === today);
    if (todayEntry && todayEntry.amount > dailyLimit) {
      alert("You have exceeded the recommended daily salt intake!");
    }
  }, [dailyLog]);

  return (
    <div className="salt-tracker">
      <h2>Salt Tracker</h2>

      <div className="input-section">
        <input
          type="number"
          value={saltIntake}
          onChange={(e) => setSaltIntake(Number(e.target.value))}
          placeholder="Enter salt intake (grams)"
        />
        <button onClick={addSaltIntake}>Add Intake</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="chart-section">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SaltTracker;


// import React, { useEffect, useState } from 'react';
// import './style.css';
// import '../generalStye.css';
// import {

//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody,
//     MDBModalFooter,
//   } from 'mdb-react-ui-kit';

//   import Bold from '@/utils/Bold';
//   import { docQr } from '@/Logics/docQr';
// import { useDispatch, useSelector } from 'react-redux';
// import { setData as setEditorHeaderData } from '@/features/dataSlice';
// import { AppDispatch } from "@/app/store";
// import useUser from '../hooks/useUser';
// import { closeAllMDBModal, sortObjectsByDate } from '@/Logics/date';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import useInnerWidth from '../pub/Hooks/useInnerWidth';
// import { Post } from '../community/community.interface';
// import SideNav from '../sideNav';
// import Navigation from '../landingPage/Navigation';



// const Main:React.FC=()=>{
//     const width=useInnerWidth()
//     const [isLoading_,setIsLoading]=useState<boolean>(true);
//     const {user,isLoading}=useUser()
//     const [data,setData]=useState<Post[]>([]);
//     const [error,setError]=useState<string>();

   

    
    
    
 
  
//     return (
//         <div className='dashboard' style={{padding:17}}>

//           <h1>niyu</h1>
      


//         </div>
//     )
// }

// export default Main;