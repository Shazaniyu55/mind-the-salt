import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import React from 'react'
import useInnerWidth from '../pub/Hooks/useInnerWidth';

import Skeleton from '@mui/material/Skeleton';
const CardLoader:React.FC=()=>{

    const width=useInnerWidth();
    const isMob=width < 700
return <> <div className='frontCard d-flex align-items-center' style={{ gap: 10 }}>
{!isMob && (
  <div style={{ position: 'relative', width: 50, height: 50 }}>
    <Skeleton style={{borderRadius:"3px"}} variant="rectangular" width={50} height={50} />
  </div>
)}
<div style={{ width: '100%' }}>
  <Skeleton variant="text" width="80%" />
  {!isMob && <Skeleton variant="text" width="50%" />}

  {isMob && (
    <div className='d-flex justify-content-between align-items-center' style={{ marginTop: 4 }}>
      {isMob && (
        <div style={{ position: 'relative', width: 40, height: 40 }}>
          <Skeleton variant="rectangular" width={40} height={40} />
        </div>
      )}
      <Skeleton variant="text" width="20%" />
    </div>
  )}
</div>
</div>
</>
}

export default CardLoader;