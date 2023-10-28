
import './App.css'
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import NotePage from './pages/NotePage';
import { Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp';
import LogoutPage from './pages/LogoutPage';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={
          // <NotePage />
          <ProtectedRoute>
            <NotePage />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </>
  )
}

export default App
