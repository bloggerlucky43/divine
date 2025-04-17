import './App.css'
import VideoBackground from './videobackground'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import SuccessPage from './success'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<VideoBackground />} />
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
     
      
    </Router>
  )
}

export default App
