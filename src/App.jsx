import './App.css'
import Home from '../halaman/home'
import DetailPortfolio from '../halaman/DetailPortfolio'
import Education from '../halaman/Education'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio/:id' element={<DetailPortfolio/>}/>
        <Route path='/education' element={<Education/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
