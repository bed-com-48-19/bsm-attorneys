import { Route, Routes } from 'react-router-dom'
import HeroSection from '../components/HeroSection/HomeSection'

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
      </Routes>
    </div>
  )
}

export default MyRoutes
