import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioPage from './pages/InicioPage';
import SeriesPage from './pages/seriesPage';
import PeliculasPage from './pages/peliculasPage';
function App() {


  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<InicioPage/>}/>
            <Route path='/series' element={<SeriesPage/>}/>
            <Route path='/peliculas' element={<PeliculasPage/>}/>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
