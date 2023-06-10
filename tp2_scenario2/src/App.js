import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Catalogue from './components/Catalogue'
import Home from './components/Home'
import PageHeader from './components/PageHeader'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <PageHeader/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalogue' element={<Catalogue/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;