import logo from './logo.png';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Home from './components/Home';
import Pagination from './components/Pagination';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Favourites from './components/Favourites';
import PageNotFound from './components/PageNotFound';
import DataPokemon from './components/DataPokemon';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <h1> Hello React ❤️</h1> */}
        <NavBar></NavBar>
        <Routes>

          <Route path="/" element={
            <>
              <Banner />
              <Home />
            </>} />
          <Route path="/data/:name" element={<DataPokemon />} />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
