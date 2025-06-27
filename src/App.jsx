import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import OurMission from './pages/OurMission'
import CloudNative from './pages/CloudNative'
import AIML from './pages/AIML'
import MobileApps from './pages/MobileApps'
import WebDevelopment from './pages/WebDevelopment'
import CloudMigration from './pages/CloudMigration'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-teem" element={<About />} />
          <Route path="/about-teem/our-mission" element={<OurMission />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cloud-native-development" element={<CloudNative />} />
          <Route path="/services/ai-machine-learning" element={<AIML />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/cloud-migration" element={<CloudMigration />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 