import React, { useState, useEffect } from 'react';
import { Skeleton, Chip } from '@mui/material';
const CardSkeletonLoader: React.FC = () => {
  return (
    <div className='card' style={{ margin: 5 }}>
      <div className='d-flex align-items-center' style={{ padding: 5 }}>
        <Skeleton variant="circular" width={50} height={50} style={{ borderRadius: '50%' }} />
        <div style={{ paddingLeft: 5, flexGrow: 1 }}>
          <Skeleton variant="text" width="80%" height={20} />
          <Skeleton variant="text" width="50%" height={20} />
          <div className='d-flex justify-content-between align-items-center'>
            <span><Skeleton variant="text" width={30} height={20} /> </span>
            <div className='d-flex' style={{ gap: 5 }}>
              <Chip size='small' label={<> <Skeleton variant="text" width={30} height={20} /><small></small></>} />
              <Chip size='small' label={<><Skeleton variant="text" width={30} height={20} /><small></small></>} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeletonLoader;
