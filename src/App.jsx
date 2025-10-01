import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import TeamPage from './pages/TeamPage'
import VisionPage from './pages/VisionPage'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path = "/about-us" element = {<AboutUs />} />
          <Route path = "/our-team" element = {<TeamPage />} />
          <Route path = "/vision" element = {<VisionPage />} />
          <Route path = "/attend-service" element = {<ServicePage />} />
          <Route path = "/contact-us" element = {<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
