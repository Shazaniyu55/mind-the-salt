import ResponsiveImage from '@/utils/ResposiveImage';
import React from 'react';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import Bold from '@/utils/Bold';
import Image from 'next/image';
import FadeInShade from '@/styles/animation/fadeIn';

interface Props {
  text: string | React.ReactElement;
heading:string,
initStyle:any
}

const Box_: React.FC<Props> = ({ text,heading,initStyle = {} }) => {
  return (
    <>
      <FadeInShade initStyle={initStyle} style={{
        width:200,
        height:240
      }} >
   <div className="Box_">
    <b>{heading} </b><br/>
    <span>{text}</span>
   </div>
      </FadeInShade>
    </>
  );
};

export default Box_;
