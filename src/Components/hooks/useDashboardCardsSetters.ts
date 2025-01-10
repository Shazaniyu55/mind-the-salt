import { useDispatch, useSelector } from 'react-redux';
import { DashboardProps } from '../dashboard/initUser';
import { RootState } from '@/app/store';
import { setDashboard } from '@/features/dashboard';

const useDashboardCardSettings = () => {
  const dispatch = useDispatch();  
  const dashboardData:DashboardProps | null | any= useSelector((state: RootState) => {
    return state.dashboard.dashboard
})
  const updateCardNumber =async (number:number, cardIndex:1 | 2 | 3 | 4) => {
    const newStore = { ...dashboardData };
console.log("update start...");
    if (newStore.dashboardCards[`card${cardIndex}`]) {
      newStore.dashboardCards={...newStore.dashboardCards,['card'+cardIndex]:{...newStore.dashboardCards[`card${cardIndex}`],num:Number(newStore.dashboardCards[`card${cardIndex}`].num)+Number(number)}};

      console.log(newStore);
     dispatch(setDashboard(newStore));
    } else {
      console.error(`Card${cardIndex} does not exist.`);
    }
    console.log("card update ends");
  };

  return { updateCardNumber };
};

export default useDashboardCardSettings;
