import { useState } from 'react';
import './App.css';
import { ThemeContext } from '../../context/ThemeContext';
import ContextBackground from '../ContextBackground/ContextBackground';
import ModalWindow from '../ModalWindow/ModalWindow';
import Portal from '../Portal/Portal';

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const [showModalWindow, setShowModalWindow] = useState(false);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <ContextBackground />
        <h2>Modal window</h2>
        <button className='button' onClick={() => setShowModalWindow(true)}>Show modal window</button>
        {showModalWindow && (
          <Portal>
            <ModalWindow onClose={() => setShowModalWindow(false)} />
          </Portal>
        )}
      </div>
    </ThemeContext.Provider> 
  );
}

export default App;
