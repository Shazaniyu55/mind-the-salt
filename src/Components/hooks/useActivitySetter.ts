import { useDispatch, useSelector } from 'react-redux';
import { getDayOfWeek, DayAndMonth } from '@/Logics/date'; // Adjust the import path to your utility functions file
import { ActivitiesChart, ActivitiesInterface } from '../dashboard/features.interface';
import { DashboardProps } from '../dashboard/initUser';
import { RootState } from '@/app/store';
import { setDashboard } from '@/features/dashboard';
// import { getCurrentTimestamp } from '@/Logics/DateFunc';

const useActivitySetter = () => {
  const dispatch = useDispatch();
  const dashboardData:DashboardProps | null | any= useSelector((state: RootState) => {
      return state.dashboard.dashboard
  })
  const getCurrentTimestamp = () => {
    return new Date().toISOString();
  }
  const setNewActivity = (activityObj:ActivitiesInterface, score:number) => {
   

    const activity = {
      ...activityObj,
      createdAt: getCurrentTimestamp()
    };

    const newStore = { ...dashboardData };
    const new_activities = [activity, ...newStore.activities];

    const today_dayMonth = DayAndMonth(activity.createdAt);
    const activitiesChart = [...newStore.activitiesChart];

    const new_activitiesChart = activitiesChart.map((e) => {
      const activity_ = { ...e };
      if (e?.day?.toLowerCase() === getDayOfWeek(activity.createdAt).toLowerCase()) {
        if (DayAndMonth(e.date).toLowerCase() === DayAndMonth(activity.createdAt).toLowerCase()) {
          activity_.score += score;
        } else {
          activity_.score = score;
          activity_.date = getCurrentTimestamp();
        }
      }
      return activity_;
    });
console.log({ ...newStore, activities: new_activities, activitiesChart: new_activitiesChart })
    dispatch(setDashboard({ ...newStore, activities: new_activities, activitiesChart: new_activitiesChart }));
  };

  return { setNewActivity };
};

export default useActivitySetter;
