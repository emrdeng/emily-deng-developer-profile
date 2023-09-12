import React from 'react';
import { Grid, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [{
    title: "Weight Tracker",
    description: "Discover the path to your fitness goals with our intuitive weight tracker. Log daily calories, monitor consumption vs. burnt, and visualize your progress over time. Your journey to a healthier you starts here!",
    emojis: ["🥦","🥕","🍎"],
    techStack: ["MongoDB", "Express", "React", "Nodejs"],
    codeLink: "https://github.com/emrdeng/weightTracker-HerokuDeployment",
    demoLink: "https://weight-tracker-diary-2dad58c2fcb4.herokuapp.com/",
    imagePaths: [`${process.env.PUBLIC_URL}/assets/WT1.png`, `${process.env.PUBLIC_URL}/assets/WT2.png`, `${process.env.PUBLIC_URL}/assets/WT3.png`],
    phoneAccess: false
  }, {
    title: "House Price Prediction",
    description: "Created a machine learning model for a competition that predicts house prices and proudly secured an RMSE score of 0.15431. Check out my Jupyter notebook for the creation process!",
    emojis: ["🏡","💲"],
    techStack: ["Python", "Numpy", "Pandas", "Sci-kit Learn"],
    codeLink: "https://github.com/emrdeng/kaggle_house_price",
    imagePaths: [`${process.env.PUBLIC_URL}/assets/housePredict1.png`, `${process.env.PUBLIC_URL}/assets/housePredict2.png`, `${process.env.PUBLIC_URL}/assets/housePredict3.png`, `${process.env.PUBLIC_URL}/assets/housePredict4.png`, `${process.env.PUBLIC_URL}/assets/housePredict5.png`],
    phoneAccess: true
  }, {
    title: "NYC Date Ideas",
    description: "Swipe right on the perfect NYC date night! Dive into spontaneous adventures, delectable eats, and cozy sips—all a stroll away.",
    emojis: ["🗽","❤️"],
    techStack: ["HTML", "CSS", "Javascript"],
    codeLink: "https://github.com/emrdeng/NYCDateIdeas-HerokuDeployment",
    demoLink: "https://nyc-date-planner-224c86480c8a.herokuapp.com/",
    imagePaths: [`${process.env.PUBLIC_URL}/assets/NYCD1.png`, `${process.env.PUBLIC_URL}/assets/NYCD2.png`],
    phoneAccess: false
  }, {
    title: "Ping Pong Game",
    description: "Test your reflexes with Ping pong! Ready for the challenge? Paddle up and let the games begin!",
    emojis: ["🏓"],
    techStack: ["Python"],
    codeLink: "https://github.com/emrdeng/PingPong",
    imagePaths: [`${process.env.PUBLIC_URL}/assets/PP1.png`, `${process.env.PUBLIC_URL}/assets/PP2.png`],
    phoneAccess: true
  }];

  return (
    <section>
      <Grid container direction="column" className="overallProjectsContainer" justifyContent="center" style={{ 
          margin: '0 auto',
          maxWidth: '107rem',
          padding: '0 4rem',
          fontFamily: "Poppins, sans-serif",
          marginTop: '5%'
      }}>
      <Typography
        variant="h4"
        className="passionProjects"
        style={{
          fontFamily: "Bebas Neue, sans-serif",
          fontWeight: "600",
          paddingBottom: "4%"
        }}
      >
        PASSION PROJECTS
      </Typography>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Grid>
    </section>
  );
};

export default Projects;
