import { useState, useEffect } from 'react'
import{ useLocation, Outlet } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './utilities.css'
import './components.css'

import Header from './components/Header.jsx'

const backgrounds = {
  home: {
    mobile: "/assets/home/background-home-mobile.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    desktop: "/assets/home/background-home-desktop.jpg"
  } ,
  destination: {
    mobile: "/assets/destination/background-destination-mobile.jpg",
    tablet: "/assets/destination/background-destination-tablet.jpg",
    desktop: "/assets/destination/background-destination-desktop.jpg"
  },
  crew: {
    mobile: "/assets/crew/background-crew-mobile.jpg",
    tablet: "/assets/crew/background-crew-tablet.jpg",
    desktop: "/assets/crew/background-crew-desktop.jpg"
  },
  technology: {
    mobile: "/assets/technology/background-technology-mobile.jpg",
    tablet: "/assets/technology/background-technology-tablet.jpg",
    desktop: "/assets/technology/background-technology-desktop.jpg"
  }
};

function App() {   
  const location = useLocation();
  const basePath = location.pathname.split("/")[1] || "home";
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentBg, setCurrentBg] = useState("");
  const [count, setCount] = useState(0)

  useEffect(() => {
    const bgSet = backgrounds[basePath] || backgrounds.home;
    let bgSrc;
    
    if (screenWidth >= 1024) { bgSrc =  bgSet.desktop; }
    else if (screenWidth >= 640) { bgSrc = bgSet.tablet; }
    else { bgSrc = bgSet.mobile; }
    
    bgSrc = "/src" +bgSrc
    const img = new Image();
    img.src = bgSrc;
    img.onload = () => setCurrentBg(bgSrc);
  }, [basePath, screenWidth]);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div className="home" style={{backgroundImage: currentBg ? `url(${currentBg})` : "none"}}>
          <Header />
          <Outlet />
      </div>
      
    </>
  )
}

export default App;
