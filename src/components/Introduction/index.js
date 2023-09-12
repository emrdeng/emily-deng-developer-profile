import React from 'react';
// COMPONENTS:
import ContainerTitles from '../../always_components/ContainerTitles.jsx';
import FlexBox from '../../always_components/FlexBox.jsx';
import WritingsTypography from '../../always_components/WritingsTypography.jsx';
import TechCard from './TechCard.jsx';
// MUI:
import { 
  Grid, 
  Avatar, 
  IconButton, 
  useMediaQuery 
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// MUI Icons:
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Introduction = () => {
  const customBreakpoints = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        md: 951, 
      },
    },
  });

  const vpwidth950 = useMediaQuery('(max-width:950px)');

  return (
    <ThemeProvider theme={customBreakpoints}>
    <FlexBox className="introductoryFlexbox" customBackgroundColor="#f9f9f9" customHeight="100vh">
      <Grid container className="IntroductionContainer" style={{ padding: "10% 20%" }} justifyContent="center" alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6} className="left-side">
          <Grid container spacing={0.2} direction="column">
            <Grid item xs={6}>
              <ContainerTitles
                boxClassName="introductionTitleContainer"
                typographyClassName="introductionTitle"
                title="Full Stack Developer"
                fontFamilyName="Poppins, sans-serif"
                fontSize="5rem"
                fontWeight="800"
              />
            </Grid>
            <Grid item xs={5} p={1}>
              <WritingsTypography
                boxClassName="introductionParagraphContainer"
                typographyClassName="introductionParagraph"
                typographyVariant="subtitle1"
                paragraph="Hi, I'm Emily Deng, CPA. A passionate Full Stack Developer and Machine Learning enthusiast based in New York City."
                fontFamilyName="Poppins, sans-serif"
                fontWeight="400"
                fontSize="1.3rem"
              />
            </Grid>
            <Grid item xs={6} p={5} className="linksSection">
              <IconButton
                href="https://www.linkedin.com/in/emily-deng-cpa-0914301a7/"
                target="_blank"
                rel="noopener noreferrer"
                size = "large"
              >
                <LinkedInIcon sx={{ fontSize: 40, color: "black"}} color="primary" />
              </IconButton>
              <IconButton
                href="https://github.com/emrdeng"
                target="_blank"
                rel="noopener noreferrer"
                size = "large"
              >
                <GitHubIcon sx={{ fontSize: 40, color: "black" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6} container className="right-side">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}>
            <Avatar 
              className="responsive-avatar"
              alt="Profile Picture" 
              src={process.env.PUBLIC_URL + '/assets/emily_modified.png'} 
              style={{ width: '50%', height: 'auto' }} 
            />
          </div>
        </Grid>

      {/* TECHNICAL PROFILE */}
      <Grid container pt={vpwidth950 ? 0 : 5} spacing={3} className="tech-section">
        {/* Title */}
        <Grid item xs={12} className="techProfileParagraph">
          <WritingsTypography
            boxClassName="technicalProfile"
            typographyClassName="technicalProfileParagraph"
            typographyVariant="subtitle2"
            paragraph="Technical Profile"
            fontFamilyName="Poppins, sans-serif"
            fontWeight="bold"
            fontSize="1.3rem"
            textAlign="center"
          />
        </Grid>

        {/* First Row of Tech Cards */}
        <Grid item xs={12} container justifyContent="center" spacing={1} className="techRow">
          {['html5', 'css', 'js', 'react', 'express'].map((tech, idx) => (
            <Grid item xs={12/5} key={idx}>
              <TechCard
                logoUrl={`${process.env.PUBLIC_URL}/assets/techLogos/${tech}.svg`}
                altText={tech.toUpperCase()}
              />
            </Grid>
          ))}
        </Grid>

        {/* Second Row of Tech Cards */}
        <Grid item xs={12} container justifyContent="center" spacing={1} className="techRow">
          {['python', 'nodejs', 'mongodb', 'numpy', 'pandas'].map((tech, idx) => (
            <Grid item xs={12/5} key={idx}>
              <TechCard
                logoUrl={`${process.env.PUBLIC_URL}/assets/techLogos/${tech}.svg`}
                altText={tech.toUpperCase()}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    </FlexBox>
    </ThemeProvider>
  );
};

export default Introduction;
