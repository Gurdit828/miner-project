import Login from './pages/login'
import Home from './pages/home'
import Header from './pages/Header'
import './App.css';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ui/themeprovider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Header" element={<Header />} />     
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App