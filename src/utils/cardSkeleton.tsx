import React from 'react';
import { Skeleton } from '@mui/material';

const CardSkeleton = () => {
  return (
    <div className="card" style={{ margin: 5, padding: 5 }}>
      <div className='d-flex align-items-center'>
        <Skeleton variant="rectangular" width={50} height={50} style={{ borderRadius: 10 }} />
        <div style={{ paddingLeft: 5, flex: 1 }}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="80%" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
