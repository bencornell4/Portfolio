import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "@pages/Home";
import Fullstack from "@pages/fullstack/Fullstack"
import StarBackground from '@components/StarBackground';

export function App() {
  const location = useLocation();
  return (
    <div className='overflow-hidden'>
      <StarBackground/>
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<Home/>}/>
          <Route path="/fullstack" element={<Fullstack/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
