import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TokenAuth from './components/pages/TokenAuth'

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route exact path='/token-auth' element={<TokenAuth/>} />
      </Routes>
    </div>
  </Router>
)

export default App
