import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/themes';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import Roadmap from './components/sections/Roadmap';
import About from './components/sections/About';
import Showcase from './components/sections/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <GlobalStyles />
  <ThemeProvider theme={light}>
    <Navigation />
    <Home/>
    {/* <About/>
    <Roadmap/>
    <Showcase/>
    <Footer/> */}
  </ThemeProvider>
    </>
  );
}

export default App;
