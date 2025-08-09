import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';

// dayjs
// react-router
// react-hook-form

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Signup />} />
            <Route path='/signup' element={<Signup />} /> 
            <Route path='/signin' element={<Signin />} /> 
            <Route path='/tasks' element={<HomePage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
