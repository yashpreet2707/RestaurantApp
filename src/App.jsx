
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}



export default App
