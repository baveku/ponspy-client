import { Route, MemoryRouter as Router, Routes } from 'react-router-dom'
import Hello from 'renderer/pages/home'

import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  )
}
