import Navbar from './components/Navbar'
import Banner from './components/Banner'
import PasosContainer from './components/PasosContainer'
import Downloads from './components/Downloads'

import './App.css'

function App() {
  return (
    <div className="App font-nunito">
      <Navbar />
      <Banner />
      <PasosContainer />
      <Downloads />
    </div>
  )
}

export default App
