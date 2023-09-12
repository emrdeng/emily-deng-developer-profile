import React from 'react';
import { Grid, Typography, Link, Box, Card } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function ProjectCard({ project }) {

    const linkStyles = {
        color: '#2d2e32',
        fontSize: '1.3rem',
        fontWeight: 500,
        gap: '5px',
        textDecoration: 'none',
        alignItems: 'center',
        display: 'flex',
        marginRight: '1rem'
    };

    const handleHover = (event) => {
        const imgHeight = event.currentTarget.offsetHeight;
        const containerHeight = event.currentTarget.parentElement.offsetHeight;
        const offset = imgHeight - containerHeight;
        if (offset > 0) {
            event.currentTarget.style.transform = `translateY(-${offset}px)`;
        }
    };
    
    const handleMouseOut = (event) => {
        event.currentTarget.style.transform = "translateY(0%)";
    };

    return (
        <Card className="projectCardContainer" style={{
            flexDirection: 'row',
            gap: '8rem',
            height: 'auto',
            padding: '2rem',
            backgroundColor: '#fff',
            borderRadius: '1.7rem',
            boxShadow: '0 0 10px rgba(0,0,0,.1)',
            display: 'flex',
            marginBottom: '5%',
            width: '100%'
        }}>
            <Grid container className="projectCardGrid" spacing={3} height="auto" overflow="hidden">
            <Grid item className="projectImageGrid" xs={12} md={6} container direction="column" justifyContent="center" alignItems="center" style={{ textAlign: 'center', width: '50rem' }}>
                    <Box className= "projectImageContainer" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "20px",
                        boxShadow: '0 0 10px rgba(0,0,0,.1)',
                        color: '#000',
                        overflow: 'hidden',
                        height: 'auto',
                        margin: '24px',
                    }}>
                        <Carousel 
                            showThumbs={false} 
                            autoPlay={true} 
                            infiniteLoop={true} 
                            interval={5000}
                            transitionTime={1000} 
                            showStatus={false}      
                        >
                            {project.imagePaths.map((path, index) => (
                                <div key={index} className="test" style={{ overflow: 'hidden', height: '450px', width: '100%' }}> 
                                    <img 
                                        key={index}
                                        src={path} 
                                        alt={`${project.title} - ${index + 1}`} 
                                        onMouseOver={handleHover}
                                        onMouseOut={handleMouseOut}
                                        style={{
                                            transition: 'transform 10s ease-in-out 0s',
                                            position: 'relative',
                                            top: '0',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'fill'
                                        }}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </Box>
                </Grid>
                <Grid className="projectDetailsGrid" item xs={12} md={6} container direction="column" justifyContent="center" alignItems="center" style={{ textAlign: 'center', width: '50rem' }}>
                    <Typography 
                        variant="h4" 
                        className="projectTitle" 
                        style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            fontFamily: "Poppins, sans-serif", 
                            fontWeight: "800", 
                            marginBottom: "20px" 
                        }}
                    >
                        <span className="projectTitleSpan">{project.title}</span>
                        {project.emojis.map((eachEmoji) => (
                            <span className="emojiTypography" style={{ fontSize: "1em" }}>{eachEmoji}</span>
                        ))}
                    </Typography>
                    <Typography variant="body1" className="projectDescription" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: "Poppins, sans-serif", fontWeight: "600", fontStyle: "bold", color: "#767676", textAlign: "center" }}>{project.description}</Typography>
                    <Box className="stack" mt={2} display="flex" justifyContent="center" alignItems="center">
                        {project.techStack.map((tech) => (
                            <Box 
                                key={tech}
                                className="projectTechNameBoxes"
                                style={{
                                    backgroundColor: '#fff',
                                    boxShadow: '0 0 10px rgba(0,0,0,.1)',
                                    color: '#000',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 600,
                                    padding: '1rem 1rem',
                                    marginRight: '0.6rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <Typography 
                                    variant="body2" 
                                    className="projectTechNames"
                                    style={{
                                        color: '#767676',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        textTransform: 'none',
                                    }}
                                >
                                    {tech}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box className="links" mt={2} display="flex" justifyContent="center" alignItems="center" marginTop="30px">
                        {project.codeLink && (
                            <Link className="linksTypography" href={project.codeLink} target="_blank" rel="noreferrer" style={linkStyles}>
                                Code <GitHubIcon />
                            </Link>
                        )}
                        {project.demoLink && (
                            <Link className="linksTypography" href={project.demoLink} target="_blank" rel="noreferrer" style={{...linkStyles, marginLeft: project.codeLink ? '20px' : '0'}}>
                                Live Demo <ArrowForwardIosIcon />
                            </Link>
                        )}
                    </Box>
                    {!project.phoneAccess && (
                        <Typography 
                          className="limitNotice" 
                          variant="body1" 
                          style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            fontFamily: "Poppins, sans-serif", 
                            fontWeight: "200", 
                            color: "#767676", 
                            fontStyle: "italic", 
                            textAlign: "center", 
                            marginTop:"30px" 
                          }}>
                          Computer access only. Phone accessibility will be made in future updates.
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Card>
    );
}

export default ProjectCard;
