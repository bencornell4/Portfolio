import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageComponent from "@components/PageComponent";
import Home from "@pages/Home";
import Writer from "@pages/Writer"
import StarBackground from '@components/StarBackground';
import Fullstack from '@pages/Fullstack';
import AllJustDebts from '@pages/AllJustDebts';
import AnythingILike from '@pages/AnythingILike';
import PissDrunkToo from '@pages/PissDrunkToo';

export function App() {
  const location = useLocation();
  return (
    <div className='overflow-hidden'>
      <StarBackground/>
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<PageComponent><Home/></PageComponent>}/>
          <Route path="/writer" element={<PageComponent><Writer/></PageComponent>}/>
          <Route path="/fullstack" element={<PageComponent><Fullstack/></PageComponent>}/>
          <Route path="/writer/alljustdebts" element={<AllJustDebts/>}/>
          <Route path="/writer/anythingilike" element={<AnythingILike/>}/>
          <Route path="/writer/pissdrunktoo" element={<PissDrunkToo/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
