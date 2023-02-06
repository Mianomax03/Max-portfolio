import './App.css';
import  Navbar from './components/Navbar';
import  Hero from './components/Hero';

import useLocalStorage from "use-local-storage"

function App() {
const [theme,setTheme]=useLocalStorage('theme'?'light' :'dark')

const toggleTheme = ()=>{
     const newTheme =theme=== 'dark'?'light':'dark';
     setTheme(newTheme)
}

  return (
    <div className="app"  data-theme={theme}>
     <Navbar theme={theme} toggleTheme={toggleTheme} />
     <Hero/>
    </div>
  );
}

export default App;
