import HomePage from './pages'
import UserPage from './pages/user'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  )
}

export default App;
