
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Header />
      <div className='flex justify-center items-center text-white text-5xl h-96  bg-gray-700'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}



export default App
