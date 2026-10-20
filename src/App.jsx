import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from '../src/components/Header'
import Sobre from '../src/pages/Sobre'
import Home from '../src/pages/Home'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
