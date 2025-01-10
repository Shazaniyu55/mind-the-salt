import React from 'react'


import { Skeleton } from '@mui/material';

const BlogCardSkeleton:React.FC=()=>{
    return (
        <>
         <div className='blogCard' style={{margin:1,maxWidth:190}}>
          <Skeleton variant="rectangular"  height={200}  style={{width:"100%"}}/>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" height={36} style={{ width: "100%", borderRadius: 4 }} />
    </div>

        </>
    )
}

export default BlogCardSkeleton