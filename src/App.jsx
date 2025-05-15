import { useLocation, Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing';
import ExhibitionGuide from './pages/ExhibitionGuide';
import Plan from './pages/Plan';
import DesignSalon from './pages/DesignSalon';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';

const App = ()=> {
  const location  =useLocation();
  
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/exhibitionGuide" element={<ExhibitionGuide />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/designSalon" element={<DesignSalon />} />
      </Routes>
    </AnimatePresence>      

  )
}

export default App;
