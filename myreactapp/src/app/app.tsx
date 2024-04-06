import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "@pages/Home";
import Writer from "@pages/Writer"
import StarBackground from '@components/StarBackground';
import Fullstack from '@pages/Fullstack';

export function App() {
  const location = useLocation();
  return (
    <div className='overflow-hidden'>
      <StarBackground/>
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<Home/>}/>
          <Route path="/writer" element={<Writer/>}/>
          <Route path="/fullstack" element={<Fullstack/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
