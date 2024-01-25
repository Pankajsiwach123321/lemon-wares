import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Herosection from './components/Herosection';
import TrueCloud from './components/TrueCloud';
import Services from './components/Services';
import Package from './components/Package';
import RealStory from './components/RealStory';
import Websites from './components/Websites';
import GetIn from './components/GetIn';
import Footerlogo from './components/Footerlogo';
import Backtop from './components/Backtop';
import { useEffect, useState } from 'react';
import Loader from './components/Loder';
document.body.classList.add("overflow-hidden")
function App() {
  const [preloder, setpreloder] = useState(true)
  setTimeout(() => {
    setpreloder(false)
    document.body.classList.remove("overflow-hidden")

  }, 4000);
  return (
    <div>
      {preloder && <div> <Loader /></div>}
      <NavBar />
      <Herosection />
      <TrueCloud />
      <Services />
      <Package />
      <RealStory />
      <Websites />
      <GetIn />
      <Footerlogo />
      <Backtop />
    </div >
  );
}

export default App;
