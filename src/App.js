import './App.css';
import RickAndMortyComponent from './components/rickAndMorty/RickAndMortyComponent';
// import react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import CharacterDetail from './components/rickAndMorty/CharacterDetail';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Home page */}
          <Route exact path='/' element={ <RickAndMortyComponent/> }/>
          {/* ===== RICK AND MORTY ====== */}
          {/* Home Rick and Morty */}
          <Route exact path='/rick-and-morty' element={ <RickAndMortyComponent/> }/>
          {/* Character Detail */}
          <Route exact path='/character/:id' element={ <CharacterDetail/> }/>

          {/* 404 */}
          <Route path='*' element={ <NotFoundPage/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
