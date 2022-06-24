import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import RecommendedMenu from './Pages/RecommendedMenu/RecommendedMenu';
import Promo from './Pages/Promo/Promo';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<RecommendedMenu />} />
          <Route path="promo" element={<Promo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
