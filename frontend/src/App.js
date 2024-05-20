import { Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import PateFleuries from './pages/PateFleuries';
import PatePresseesCuites from './pages/PatePresseesCuites';
import PatePersillees from './pages/PatePersillees';
import PateMolles from './pages/PateMolles';
import PatePresseesNonCuites from './pages/PatePresseesNonCuites';
import TripleCremes from './pages/TripleCremes';
import FromageDeChevre from './pages/FromageDeChevres';
import FromageDeBrebis from './pages/FromageDeBrebis';
import Detail from './pages/Detail';
import Category from './components/Category';


import NavBar  from './components/NavBar';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/detail/:id" element={<Detail />} />

        <Route path="categories/" element={<Category />} />


        <Route path="pate-fleuries/" element={<PateFleuries />} />
        <Route path="pate-pressees-cuites/" element={<PatePresseesCuites />} />
        <Route path="pate-persillees/" element={<PatePersillees />} />
        <Route path="pate-molles/" element={<PateMolles />} />
        <Route path="pate-pressees-non-cuites/" element={<PatePresseesNonCuites />} />
        <Route path="fromage-de-chevre/" element={<FromageDeChevre />} />
        <Route path="fromage-de-brebis/" element={<FromageDeBrebis />} />
        <Route path="triple-cremes/" element={<TripleCremes />} />

        
      </Routes>
    </div>
  );
}