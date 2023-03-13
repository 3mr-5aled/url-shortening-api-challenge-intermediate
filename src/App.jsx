import { useState } from "react"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Shortner from "./components/Shortner.jsx"
import AdvancedStats from "./components/AdvancedStats.jsx"
import BoostLinks from "./components/BoostLinks.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Shortner />
      <AdvancedStats />
      <BoostLinks />
      <Footer />
    </>
  )
}

export default App
