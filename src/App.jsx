import './App.css'
import DaisyuiNavbar from './components/DaisyuiNavbar/DaisyuiNavbar'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import PriceOption from './components/priceOption/PriceOption'

function App() {
  

  return (
    <>

    <Navbar></Navbar>
    <DaisyuiNavbar></DaisyuiNavbar>
      <h1 className='text-7xl bg-red-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <PriceOption></PriceOption>
      


    </>
  )
}

export default App
