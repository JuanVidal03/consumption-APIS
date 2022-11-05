import './App.css';
import RickAndMortyComponent from './components/rickAndMorty/RickAndMortyComponent';
// import react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Home page */}
          <Route exact path='/' element={ <RickAndMortyComponent/> }/>

          {/* 404 */}
          <Route path='*' element={ <NotFoundPage/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
