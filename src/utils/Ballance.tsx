import { formatToNaira } from '@/Logics/date';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
interface Props{
    ballance:number
}
const BallanceDisplay:React.FC<Props> = ({ ballance }) => {
  const [showNumber, setShowNumber] = useState(false);

  const handleClick = () => {
    setShowNumber(!showNumber);
  };

  return (
    <div className='d-flex  justify-content-between' style={{width:'100%'}}>
      {showNumber ? (
        <div style={{width:"80%",fontSize:'small'}} className='d-flex align-items-center'>{formatToNaira(ballance,true)}</div>
      ) : (
        <div style={{width:"80%"}}  className='d-flex align-items-center'>*****</div>
      )}
     <IconButton onClick={handleClick}>   {showNumber ? <Eye size={20}  /> : <EyeOff size={20}/>}</IconButton>
    </div>
  );
};

export default BallanceDisplay;
