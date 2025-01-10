import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'react-feather';
import { GrLinkedin } from 'react-icons/gr';
import { IconButton } from '@mui/material';

const SocialMediaIcons = () => {
  const handleLinkClick = (url:string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <IconButton onClick={() => handleLinkClick('https://www.facebook.com/HEART%20AFRICA')}>
        <Facebook />
      </IconButton>
      <IconButton onClick={() => handleLinkClick('https://www.x.com/@heartafrica')}>
        <GrLinkedin />
      </IconButton>
      <IconButton onClick={() => handleLinkClick('https://www.linkedin.com/in/HEART-AFRICA')}>
        <Twitter />
      </IconButton>
      <IconButton onClick={() => handleLinkClick('https://www.instagram.com/heartafrica')}>
        <Instagram />
      </IconButton>
    </div>
  );
};

export default SocialMediaIcons;
