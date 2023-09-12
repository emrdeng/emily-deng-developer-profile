// CSS:
import './App.css';
import './fonts.css'
// MUI:
import { CssBaseline, Box } from '@mui/material';
import { styled } from '@mui/system';
// COMPONENTS:
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

const SimpleBox = styled(Box)`
  width: "100vw";
  max-width: none;
`;

function App() {
  return (
    <>
    <CssBaseline />
      <Navbar/>
      <SimpleBox>
        <SimpleBox id="about">
          <Introduction/>
        </SimpleBox>
        <SimpleBox id="projects">
          <Projects/>
        </SimpleBox>
        <SimpleBox id="contact">
          <ContactMe/>
        </SimpleBox>
      </SimpleBox>
    </>
  );
}

export default App;
