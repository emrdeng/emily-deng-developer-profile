import React from 'react';
// MUI:
import { Typography, Link, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// IMPORTS:
import MailIconCircle from './MailIconCircle';
import WritingsTypography from '../../always_components/WritingsTypography';

const StyledContainer = styled(Box)({
  backgroundColor: '#333',
  color: 'white',
  padding: '5% 10%',
  borderRadius: '8px',
  textAlign: 'left',
  marginTop: '2rem',
  fontFamily: 'Poppins, sans-serif',
  width: '100%'
});

const StyledLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    color: '#147efb',
  },
});


const ContactMe = () => {

  return (
    <StyledContainer className="contactMeContainer" maxWidth="none">
      <Box>
        <WritingsTypography 
          typographyVariant="h4"
          typographyClassName="getInTouch"
          fontFamilyName="Poppins, sans-serif"
          fontWeight="bold"
          fontSize="600"
          paragraph="Get in Touch"
        />
        <WritingsTypography 
          typographyVariant="body1"
          typographyClassName="contactDescription"
          fontFamilyName="Poppins, sans-serif"
          fontWeight="bold"
          fontSize="600"
          paragraph="Have questions or just want to chat? I'm here for you! Reach out via email:"
        />
        <Box display="flex" alignItems="center" gap={2}>
          <MailIconCircle />
          <Typography style={{ fontFamily: "Poppins, sans-serif" }}>
            <StyledLink href="mailto:emrdeng21@gmail.com" className="emailLink">
              emrdeng21@gmail.com
            </StyledLink>
          </Typography>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default ContactMe;
