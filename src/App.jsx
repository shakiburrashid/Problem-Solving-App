import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Pages/About/About"
import FAQ from "./Pages/FAQ/FAQ"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import Banner from "./Components/Banner/Banner"

function App() {

  return (
    <>
      <BrowserRouter>


        <Navbar />

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        
        <section className="px-10 pt-10 font-roboto">
          <Banner/>

        </section>
      </BrowserRouter>

    </>
  )
}

export default App
