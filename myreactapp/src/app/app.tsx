import {Routes, Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "@pages/Home";
import Fullstack from "@pages/fullstack/Fullstack"

export function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/fullstack" element={<Fullstack/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
