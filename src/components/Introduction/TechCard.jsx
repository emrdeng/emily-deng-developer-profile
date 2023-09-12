import React from 'react';
import { Card, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const CircularCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  width: '5rem',
  height: '5rem',
  borderRadius: '50%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const CircularShape = styled('div')(({ theme }) => ({
  content: '""',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 0,
  height: 0,
  border: `3px solid gray`, 
  borderRadius: '50%',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  [`${CircularCard}:hover &`]: {
    width: '110%',
    height: '110%',
    opacity: 1,
  },
}));

const CenteredImage = styled(CardMedia)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '3rem',
  height: '3rem',
});

const TechCard = ({ logoUrl, altText }) => {
  return (
    <CircularCard className="techCardCircle" >
      <CircularShape />
      <CenteredImage className="techCardImages" component="img" image={logoUrl} alt={altText} />
    </CircularCard>
  );
};

export default TechCard;
