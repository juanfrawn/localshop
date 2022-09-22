import Navbar from './components/Navbar'
import Banner from './components/Banner'
import PasosContainer from './components/PasosContainer'
import Downloads from './components/Downloads'
import Unete from './components/Unete'
import Hero from './components/Hero'
import Brands from './components/Brands'

import './App.css'

function App() {
  return (
    <div className="App font-nunito">
      <Navbar />
      <Banner />
      <PasosContainer />
      <Downloads />
      <Unete />
      <Hero />
      <Brands />
    </div>
  )
}

export default App
