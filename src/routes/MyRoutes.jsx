import { Route, Routes } from 'react-router-dom'
import HeroSection from '../components/HeroSection/HomeSection'
import ContactUs from '../Pages/Contact/ContactUs'
import AboutUs from '../Pages/About/Aboutus'

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}

export default MyRoutes
