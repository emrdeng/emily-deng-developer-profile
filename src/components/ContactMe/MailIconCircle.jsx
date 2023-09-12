import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ButtonBase from '@mui/material/ButtonBase';

const MailIconCircle = () => {
  const [hover, setHover] = useState(false);

  const circleStyle = {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '50%',
    color: hover ? '#147efb' : 'black',
    display: 'flex',
    height: '5rem',
    justifyContent: 'center',
    width: '5rem',
    transition: 'color 0.3s ease' // smooth transition for color change
  };

  return (
    <ButtonBase 
      component="a"
      href="mailto:emrdeng21@gmail.com"
      onFocus={event => event.stopPropagation()}
      style={{ borderRadius: '50%' }}
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <div className="mailIconCircle" style={circleStyle}>
        <MailOutlineIcon className="mailIcon" style={{ fontSize: '3rem' }} />
      </div>
    </ButtonBase>
  );
};

export default MailIconCircle;
