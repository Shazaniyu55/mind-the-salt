import ResponsiveImage from '@/utils/ResposiveImage';
import React from 'react';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import Bold from '@/utils/Bold';
import Image from 'next/image';
import FadeInShade from '@/styles/animation/fadeIn';

interface Props {
  image: string;
  text: string | React.ReactElement;
  style?: any;
  initStyle?: any;
}

const FlexBox: React.FC<Props> = ({ image, text, style, initStyle = {} }) => {
  const width = useInnerWidth();
  return (
    <>
      <FadeInShade initStyle={initStyle}>
        <div
          style={{ gap: 10, ...style }}
          className='flexBox m-block d-flex justify-content-between align-items-start'
        >
          <div style={{ width: width > 700 ? '30%' : '100%', position: 'relative', height: 'auto' }}>
            <Image
              src={image}
              alt=''
              layout='responsive'
              width={500}
              height={500}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div style={{ width: width > 700 ? '70%' : '100%' }}>{text}</div>
        </div>
      </FadeInShade>
    </>
  );
};

export default FlexBox;
