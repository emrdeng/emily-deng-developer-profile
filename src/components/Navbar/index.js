import { React, useEffect, useState } from 'react'
import { styled } from '@mui/system';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  CssBaseline,
} from '@mui/material';

// MUI ICONS:
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

//////////////// APPBAR FOR BOTH DESKTOP AND MOBILE: ////////////////
// Styled AppBar with black background
const StyledAppBar = styled(AppBar)`
  background-color: white;
`;

// Styled Typography for "My Portfolio" with white bold font
const PortfolioTitle = styled(Typography)`
  color: black;
  font-weight: bold;
`;

// .css-1h9z7r5-MuiButtonBase-root-MuiTab-root

//////////////// APPBAR FOR DESKTOP: ////////////////
const StyledTab = styled(Tab)`
  color: black;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem
`;

const StyledTabs = styled(Tabs)`
  margin-left: auto;
`;

//////////////// APPBAR FOR MOBILE: ////////////////
const MenuIconButton = styled(IconButton)`
  margin-left: auto;
`;

const FullHeightDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 100%; 
    height: 100%;
    display: flex;
    justify-content: center;  // Horizontally center
    align-items: center;      // Vertically center
  }
`;

const StyledListItemText = styled(ListItemText)`
  & .MuiTypography-root {
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

// Adds space between ListItems
const CenteredListItem = styled(ListItem)`
  margin: 30px 0;  
`;

// This is the close button for the drawer when the user wants to exit the drawer.
const CloseButton = styled(IconButton)`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
`;

function Navbar() {
  const [mobileView, setMobileView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const matches = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    setMobileView(matches);
  }, [matches]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const displayDesktop = () => {
    return (
      <StyledTabs>
        <StyledTab label="About" component="a" href="#details" />
        <StyledTab label="Projects" component="a" href="#projects" />
        <StyledTab label="Contact" component="a" href="#contact" />
      </StyledTabs>
    );
  };


  const displayMobile = () => {
    return (
      <>
        <MenuIconButton onClick={handleDrawerToggle}>
          <MenuIcon color="inherit" fontSize="large" />
        </MenuIconButton>

        <FullHeightDrawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          <CloseButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </CloseButton>
          <List>
            <CenteredListItem component="a" href="#details" onClick={handleDrawerToggle}>
              <StyledListItemText primary="About" />
            </CenteredListItem>
            <CenteredListItem component="a" href="#projects" onClick={handleDrawerToggle}>
              <StyledListItemText primary="Projects" />
            </CenteredListItem>
            <CenteredListItem component="a" href="#contact" onClick={handleDrawerToggle}>
              <StyledListItemText primary="Contact" />
            </CenteredListItem>
          </List>
        </FullHeightDrawer>
      </>
    );
  };
    
  return (
    <div>
      <CssBaseline />
      <StyledAppBar position="sticky">
        <Toolbar>
          <PortfolioTitle variant="h6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", fontStyle: "bold", fontSize: "1.5rem" }}>Emily Deng</PortfolioTitle>
          {mobileView ? displayMobile() : displayDesktop()}
        </Toolbar>
      </StyledAppBar>
    </div>
  )
}

export default Navbar