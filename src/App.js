import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import LogIng from './components/LogIng';
import Reg from './components/Reg';
import RestorePassword from './components/RestorePassword';


function App() {
  return (
    <>
      <Navbar />
      <div className='bg-[#F8EEEE] w-full h-screen flex justify-center items-center'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LogIng/>} />
          <Route path='/register' element={<Reg/>} />
          <Route path='/restorepassword' element={<RestorePassword/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
