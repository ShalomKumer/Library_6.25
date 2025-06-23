import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddBook from './components/AddBook'
import HomePage from './components/HomePage'
import SearchBook from './components/SearchBook'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddBook />} />
        <Route path='/search' element ={<SearchBook />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
