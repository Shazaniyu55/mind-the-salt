// Import necessary libraries
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { DashboardProps } from './initUser';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import Loader from '@/utils/Loader';
import { ActivitiesChart } from './features.interface';

export const dayOrder: { [key: string]: number } = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
  }
  
interface Dataset {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
    tension: number;
  }
  
  // Interface for the main data object
export  interface ChartData {
    labels: string[];
    datasets: Dataset[];
  }
  
// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ActivityLineChart: React.FC = () => {
    // Data for the chart
    const [data,setData]=useState<ChartData>(
        {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Activities in last 7 days',
                    data: [0, 0, 0, 0, 0, 0, 0],
                    fill: false,
                    backgroundColor: 'white',
                    borderColor: '#00224D',
                    tension: 0.4, // Smooth the line
                },
            ],
        }
    )
  const dashboardData:DashboardProps | null | any= useSelector((state: RootState) => {
    return state.dashboard.dashboard
});
const setUpData =  (activitiesChart: ActivitiesChart[]) => {
  
    // Sort activities by day of the week
    const sortedActivities = [...activitiesChart].sort((a, b) => dayOrder[a.day] - dayOrder[b.day]);
  
    const labels = sortedActivities.map(activity => activity.day.slice(0,3));
    const scores = sortedActivities.map(activity => activity.score);
  
    const data: ChartData = {
      labels: labels,
      datasets: [
        {
          label: 'Your weekly activities',
          data: scores,
          fill: false,
          backgroundColor: 'white',
          borderColor: '#00224D',
          tension: 0.4, // Smooth the line
        },
      ],
    };
  
  
    setData({...data});
    return data;
  };
  
    useEffect(()=>{
if(dashboardData && dashboardData?.activitiesChart && typeof dashboardData?.activitiesChart=='object'){
    setUpData(dashboardData.activitiesChart);
}
    },[dashboardData]);



    // Options for the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display:false,
                text: 'My Activities ',
            },
        },
    };
useEffect(()=>{

},[data]);
    return dashboardData ? <Line data={data} options={options} />:<Loader/>
};

export default ActivityLineChart;
