import Image from 'next/image';
import React, { useState } from 'react';
import { Skeleton } from '@mui/material';

interface ResponsiveImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  containerSize: number;
  style?: any;
  onClick?:()=>void
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ onClick,src, alt = '', width = 500, height = 500, containerSize, style = {} }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ position: 'relative', width: containerSize, height: containerSize }}>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width={containerSize}
          height={containerSize}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Image
        onClick={()=>{
         if(onClick)onClick()
        }}
          layout="fill"
          objectFit="contain"
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          style={style}
        />
      </div>
    </div>
  );
};

export default ResponsiveImage;
