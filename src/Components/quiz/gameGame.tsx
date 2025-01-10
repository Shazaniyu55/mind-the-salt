import React from 'react';
import { Skeleton } from '@mui/material';
import Divider from '@mui/material/Divider';

const GameSkeletonLoader = () => {
  return (
    <div style={{ padding: 10 }}>
      <div className='game myContainer'>
        <div className='d-flex align-items-center justify-content-between' style={{ padding: 10 }}>
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="rectangular" width={100} height={30} />
        </div>
        <Divider />
        <div className='w3-padding' style={{ padding: 10, borderRadius: 10 }}>
          <Skeleton variant="text" width="60%" height={30} />
        </div>
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className='quiz-option d-flex'
            style={{
              border: "1px solid var(--our-grey)",
              padding: 10,
              borderRadius: 10,
              gap: 8,
              marginTop: 2
            }}>
            <Skeleton variant="circular" width={24} height={24} />
            <Skeleton variant="text" width="80%" />
          </div>
        ))}
        <br /><br />
        <div className='d-flex justify-content-end' style={{ gap: 6 }}>
          <Skeleton variant="rectangular" width={80} height={36} />
          <Skeleton variant="rectangular" width={80} height={36} />
        </div>
      </div>
    </div>
  );
};

export default GameSkeletonLoader;
