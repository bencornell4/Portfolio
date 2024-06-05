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
import Ovia from '@pages/Ovia';
import Meishi from '@pages/Meishi';
import Resume from '@pages/Resume';
import Portfolio from '@pages/Portfolio';
import Haiku from '@pages/Haiku';

export function App() {
  const location = useLocation();
  return (
    <div className='overflow-hidden'>
      <StarBackground/>
      <AnimatePresence mode="wait">
        <Routes location={location}>
          {
            //<Route path="/" element={<PageComponent><Home handleButtonClick={() => {}} choiceJob=''/></PageComponent>}/>
          }
          <Route path="/writer" element={<PageComponent><Writer handleButtonClick={() => {}} choiceJob=''/></PageComponent>}/>
          <Route path="/" element={<PageComponent><Fullstack handleButtonClick={() => {}} choiceJob=''/></PageComponent>}/>
          <Route path="/fullstack" element={<PageComponent><Fullstack handleButtonClick={() => {}} choiceJob=''/></PageComponent>}/>
          <Route path="/writer/alljustdebts" element={<AllJustDebts/>}/>
          <Route path="/writer/anythingilike" element={<AnythingILike/>}/>
          <Route path="/writer/pissdrunktoo" element={<PissDrunkToo/>}/>
          <Route path="/ovia" element={<PageComponent><Ovia handleButtonClick={() => {}} choiceJob=''/></PageComponent>}/>
          <Route path="/meishi" element={<PageComponent><Meishi handleButtonClick={() => {}} choiceJob=''/></PageComponent>}/>
          <Route path="/portfolio" element={<PageComponent><Portfolio handleButtonClick={() => {}} choiceJob=''/></PageComponent>}/>
          <Route path="/haiku" element={<PageComponent><Haiku handleButtonClick={() => {}} choiceJob=''/></PageComponent>}/>
          <Route path="/resume" element={<PageComponent><Resume handleButtonClick={() => {}} choiceJob=''/></PageComponent>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
