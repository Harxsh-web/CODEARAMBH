import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/Home/HomePage'
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Nav } from './pages/navbar/Nav';
import { AboutPage } from './pages/about/AboutPage';
import { Footer } from './pages/footer/Footer';
import { EventPage } from './pages/Event/EventPage';
import { ContactPage } from './pages/Contact us/ContactPage';
import { RegistrationPage } from './pages/registration/RegistrationPage';
import { TeamPage } from './pages/Team/TeamPage';

function App() {

  return (
    <>
    <ScrollProgress className="top-[5px]" />
    <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/events' element={<EventPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        {/* <Route path ='/team' element ={<TeamPage/>} /> */}
        <Route path='/register' element={<RegistrationPage/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
