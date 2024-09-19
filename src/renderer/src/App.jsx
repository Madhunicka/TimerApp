
import Timer from './components/Timer';
import TopBar from './components/TopBar'
import { useState, useEffect } from 'react'

function App() {

  useEffect(() => {
    window.electron.ipcRenderer.on('overlay-mode', () => {
      setIsOverlay((prevState)=>!prevState);
    });
    return () => {
      window.electron.ipcRenderer.removeAllListeners('overlay-mode');
    }
  }, [])
  const [isOverlay, setIsOverlay] = useState(false);

  return (
    <>
    <div className={!isOverlay ? 'visible' : 'invisible'}>
    <TopBar/>
    </div>
    

    <div className={!isOverlay ? 'bg-black bg-opacity-40 p-2 rounded-b-xl': 'bg-black bg-opacity-40 p-2 rounded-xl' }>
      <Timer isOverlay={isOverlay}/></div>
      
    </>
  )
}

export default App

