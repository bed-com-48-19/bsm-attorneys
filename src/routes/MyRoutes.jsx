import { Route, Routes } from 'react-router-dom'
import HeroSection from '../components/HeroSection/HomeSection'
import ContactUs from '../Pages/Contact/ContactUs'

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  )
}

export default MyRoutes
