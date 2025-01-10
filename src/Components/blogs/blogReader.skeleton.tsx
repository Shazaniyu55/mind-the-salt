import React, { useState, useEffect } from 'react';
import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { Divider, Skeleton } from '@mui/material';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import { BookOpen } from 'react-feather';
import ScrollBar from 'react-perfect-scrollbar';

const BlogReaderSkeleton: React.FC = () => {
    const route=useRouter()
  return (
    <div style={{ padding: 16 }}>
      <div className='myContainer' style={{ padding: 20 }}>
        <ScrollBar style={{ maxHeight: "80vh" }}>
          <div className='d-flex justify-content-between align-items-center'>
            <MDBBtn color='light' size="sm" onClick={()=>{
                route.push("/learn")
            }}>
              <BookOpen />  More blogs
            </MDBBtn>
            <MDBBadge style={{ maxHeight: "max-content" }} color='dark'>
              <Skeleton variant="text" width={100} />
            </MDBBadge>
          </div>
          <Divider />
          <br />
          <h3>
            <Skeleton variant="text" width={200} />
          </h3>
          <Skeleton variant="rectangular" height={200} width={200} />

          <div>
            <section>
              <Skeleton variant="text" style={{width:"100%"}} />
              <Skeleton variant="text" style={{width:"100%"}} />
              <Skeleton variant="text" style={{width:"100%"}} />
            </section><br />
            <section>
              <Skeleton variant="text" style={{width:"100%"}} />
              <Skeleton variant="text" style={{width:"100%"}} />
              <Skeleton variant="text" style={{width:"100%"}} />
            </section><br />
            <section>
              <Skeleton variant="text" style={{width:"100%"}} />
              <Skeleton variant="text" style={{width:"100%"}} />
              <Skeleton variant="text" style={{width:"100%"}} />
            </section><br />
          </div>
        </ScrollBar>
      </div>
    </div>
  );
};

export default BlogReaderSkeleton;
