import { useState } from 'react';
import './App.css';
import { ThemeContext } from '../../context/ThemeContext';
import ContextBackground from '../ContextBackground/ContextBackground';

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <ContextBackground />
      </div>
    </ThemeContext.Provider> 
  );
}

export default App;
